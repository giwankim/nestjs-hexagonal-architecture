import { Inject, Injectable } from '@nestjs/common';
import { GetAlarmsUseCase } from '@alarm/application/port/in/get-alarms.use-case';
import {
  LOAD_ALARMS_PORT,
  LoadAlarmsPort,
} from '@alarm/application/port/out/load-alarms.port';
import { Alarm } from '@alarm/application/domain/model/alarm';

@Injectable()
export class GetAlarmsService implements GetAlarmsUseCase {
  constructor(
    @Inject(LOAD_ALARMS_PORT) private readonly loadAlarmsPort: LoadAlarmsPort,
  ) {}

  getAlarms(): Alarm[] | Promise<Alarm[]> {
    return this.loadAlarmsPort.loadAlarms();
  }
}
