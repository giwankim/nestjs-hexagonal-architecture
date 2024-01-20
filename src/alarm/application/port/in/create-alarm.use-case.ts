import { Alarm } from '@alarm/application/domain/model/alarm';
import { CreateAlarmCommand } from './create-alarm.command';

export const CREATE_ALARM_USE_CASE = Symbol('CREATE_ALARM_USE_CASE');

export interface CreateAlarmUseCase {
  createAlarm(command: CreateAlarmCommand): Promise<Alarm>;
}
