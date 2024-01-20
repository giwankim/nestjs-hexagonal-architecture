import { Inject, Injectable } from '@nestjs/common';
import { AlarmFactory } from './alarm.factory';
import { CreateAlarmUseCase } from '@alarm/application/port/in/create-alarm.use-case';
import {
  SAVE_ALARM_PORT,
  SaveAlarmPort,
} from '@alarm/application/port/out/save-alarm.port';
import { CreateAlarmCommand } from '@alarm/application/port/in/create-alarm.command';
import { Alarm } from '@alarm/application/domain/model/alarm';

@Injectable()
export class CreateAlarmService implements CreateAlarmUseCase {
  constructor(
    @Inject(SAVE_ALARM_PORT) private readonly saveAlarmPort: SaveAlarmPort,
    private readonly alarmFactory: AlarmFactory,
  ) {}

  createAlarm(command: CreateAlarmCommand): Promise<Alarm> {
    const alarm = this.alarmFactory.create(command.name, command.severity);
    return this.saveAlarmPort.saveAlarm(alarm);
  }
}
