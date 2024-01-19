import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { AlarmSeverity } from '../model/alarm-severity';
import { Alarm } from '../model/alarm';

@Injectable()
export class AlarmFactory {
  create(name: string, severity: string): Alarm {
    const alarmId = randomUUID();
    const alarmSeverity = new AlarmSeverity(severity as AlarmSeverity['value']);
    return new Alarm(alarmId, name, alarmSeverity);
  }
}
