import { AlarmTypeOrmEntity } from './alarm.typeorm.entity';
import { Alarm } from '@alarm/application/domain/model/alarm';
import { AlarmSeverity } from '@alarm/application/domain/model/alarm-severity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AlarmTypeOrmMapper {
  mapToDomainEntity(alarmEntity): Alarm {
    const alarmSeverity = new AlarmSeverity(
      alarmEntity.severity as 'critical' | 'high' | 'medium' | 'low',
    );
    return new Alarm(alarmEntity.id, alarmEntity.name, alarmSeverity);
  }

  mapToOrmEntity(alarm: Alarm): AlarmTypeOrmEntity {
    const alarmEntity = new AlarmTypeOrmEntity();
    alarmEntity.id = alarm.id;
    alarmEntity.name = alarm.name;
    alarmEntity.severity = alarm.severity.value;
    return alarmEntity;
  }
}
