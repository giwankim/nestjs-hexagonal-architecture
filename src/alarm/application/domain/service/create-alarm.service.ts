import { CreateAlarmUseCase } from '../../port/in/create-alarm.use-case';
import { Alarm } from '../model/alarm';
import { CreateAlarmCommand } from '../../port/in/create-alarm.command';
import { SAVE_ALARM_PORT, SaveAlarmPort } from '../../port/out/save-alarm.port';
import { Inject, Injectable } from '@nestjs/common';

// TODO: Implement this service
@Injectable()
export class CreateAlarmService implements CreateAlarmUseCase {
  constructor(
    @Inject(SAVE_ALARM_PORT) private readonly saveAlarmPort: SaveAlarmPort,
  ) {}

  createAlarm(command: CreateAlarmCommand): Promise<Alarm> {
    return Promise.resolve(undefined);
  }
}
