import { Alarm } from '../../domain/model/alarm';

export const LOAD_ALARMS_PORT = Symbol('LOAD_ALARMS_PORT');

export interface LoadAlarmsPort {
  loadAlarms(): Promise<Alarm[]>;
}
