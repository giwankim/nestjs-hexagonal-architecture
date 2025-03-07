import { Module } from '@nestjs/common';
import { AlarmController } from './adapter/in/web/alarm.controller';
import { CREATE_ALARM_USE_CASE } from './application/port/in/create-alarm.use-case';
import { GET_ALARMS_USE_CASE } from './application/port/in/get-alarms.use-case';
import { AlarmFactory } from './application/domain/service/alarm.factory';
import { CreateAlarmService } from './application/domain/service/create-alarm.service';
import { GetAlarmsService } from './application/domain/service/get-alarms.service';

@Module({
  controllers: [AlarmController],
  providers: [
    AlarmFactory,
    { provide: CREATE_ALARM_USE_CASE, useClass: CreateAlarmService },
    { provide: GET_ALARMS_USE_CASE, useClass: GetAlarmsService },
  ],
})
export class AlarmModule {
  static register() {
    return {};
  }
}
