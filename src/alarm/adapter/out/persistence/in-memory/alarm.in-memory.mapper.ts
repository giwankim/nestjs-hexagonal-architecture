import { Injectable } from '@nestjs/common';
import { AlarmSeverity } from '@alarm/application/domain/model/alarm-severity';
import { Alarm } from '@alarm/application/domain/model/alarm';
import { AlarmInMemoryEntity } from '@alarm/adapter/out/persistence/in-memory/alarm.in-memory.entity';

@Injectable()
export class AlarmInMemoryMapper {
  mapToDomainEntity(alarmEntity: AlarmInMemoryEntity): Alarm {
    const alarmSeverity = new AlarmSeverity(
      alarmEntity.severity as 'critical' | 'high' | 'medium' | 'low',
    );
    return new Alarm(alarmEntity.id, alarmEntity.name, alarmSeverity);
  }

  mapToInMemoryEntity(alarm: Alarm): AlarmInMemoryEntity {
    const alarmEntity = new AlarmInMemoryEntity();
    alarmEntity.id = alarm.id;
    alarmEntity.name = alarm.name;
    alarmEntity.severity = alarm.severity.value;
    return alarmEntity;
  }
}
