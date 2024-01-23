import { LoadAlarmsPort } from '@alarm/application/port/out/load-alarms.port';
import { SaveAlarmPort } from '@alarm/application/port/out/save-alarm.port';
import { AlarmInMemoryEntity } from '@alarm/adapter/out/persistence/in-memory/alarm.in-memory.entity';
import { Alarm } from '@alarm/application/domain/model/alarm';
import { AlarmInMemoryMapper } from '@alarm/adapter/out/persistence/in-memory/alarm.in-memory.mapper';

export class AlarmInMemoryPersistenceAdapter
  implements LoadAlarmsPort, SaveAlarmPort
{
  private readonly alarms = new Map<string, AlarmInMemoryEntity>();

  constructor(private readonly alarmInMemoryMapper: AlarmInMemoryMapper) {}

  loadAlarms(): Alarm[] {
    const entities = Array.from(this.alarms.values());
    return entities.map((entity) =>
      this.alarmInMemoryMapper.mapToDomainEntity(entity),
    );
  }

  saveAlarm(alarm: Alarm): Alarm {
    const alarmEntity = this.alarmInMemoryMapper.mapToInMemoryEntity(alarm);
    this.alarms.set(alarmEntity.id, alarmEntity);

    const savedAlarmEntity = this.alarms.get(alarmEntity.id);
    return this.alarmInMemoryMapper.mapToDomainEntity(savedAlarmEntity);
  }
}
