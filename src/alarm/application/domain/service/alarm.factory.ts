import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { Alarm } from '@alarm/application/domain/model/alarm';
import { AlarmSeverity } from '@alarm/application/domain/model/alarm-severity';

@Injectable()
export class AlarmFactory {
  create(name: string, severity: string): Alarm {
    const alarmId = randomUUID();
    const alarmSeverity = new AlarmSeverity(severity as AlarmSeverity['value']);
    return new Alarm(alarmId, name, alarmSeverity);
  }
}
