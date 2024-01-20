import { AlarmTypeOrmEntity } from './alarm.typeorm.entity';
import { Alarm } from '../../../../application/domain/model/alarm';
import { AlarmSeverity } from '../../../../application/domain/model/alarm-severity';

export class AlarmTypeOrmMapper {
  static mapToDomainEntity(alarmEntity): Alarm {
    const alarmSeverity = new AlarmSeverity(
      alarmEntity.severity as 'critical' | 'high' | 'medium' | 'low',
    );
    return new Alarm(alarmEntity.id, alarmEntity.name, alarmSeverity);
  }

  static mapToOrmEntity(alarm): AlarmTypeOrmEntity {
    const alarmEntity = new AlarmTypeOrmEntity();
    alarmEntity.id = alarm.id;
    alarmEntity.name = alarm.name;
    alarmEntity.severity = alarm.severity.value;
    return alarmEntity;
  }
}
