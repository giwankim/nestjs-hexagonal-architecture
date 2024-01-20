import { Alarm } from '@alarm/application/domain/model/alarm';

export const GET_ALARMS_USE_CASE = Symbol('GET_ALARMS_USE_CASE');

export interface GetAlarmsUseCase {
  getAlarms(): Promise<Alarm[]>;
}
