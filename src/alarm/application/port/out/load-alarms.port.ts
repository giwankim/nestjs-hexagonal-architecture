import { Alarm } from '@alarm/application/domain/model/alarm';

export const LOAD_ALARMS_PORT = Symbol('LOAD_ALARMS_PORT');

export interface LoadAlarmsPort {
  loadAlarms(): Promise<Alarm[]>;
}
