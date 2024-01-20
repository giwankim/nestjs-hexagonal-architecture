import { GetAlarmsUseCase } from '../../port/in/get-alarms.use-case';
import { Alarm } from '../model/alarm';
import {
  LOAD_ALARMS_PORT,
  LoadAlarmsPort,
} from '../../port/out/load-alarms.port';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class GetAlarmsService implements GetAlarmsUseCase {
  constructor(
    @Inject(LOAD_ALARMS_PORT) private readonly loadAlarmsPort: LoadAlarmsPort,
  ) {}

  getAlarms(): Promise<Alarm[]> {
    return this.loadAlarmsPort.loadAlarms();
  }
}
