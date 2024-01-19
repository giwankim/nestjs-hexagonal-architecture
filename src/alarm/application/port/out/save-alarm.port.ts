import { Alarm } from '../../domain/model/alarm';

export const SAVE_ALARM_PORT = Symbol('SAVE_ALARM_PORT');

export interface SaveAlarmPort {
  saveAlarm(): Promise<Alarm>;
}
