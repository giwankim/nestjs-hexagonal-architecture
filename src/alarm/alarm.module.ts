import { Module } from '@nestjs/common';
import { AlarmController } from './adapter/in/web/alarm.controller';
import { AlarmFactory } from './application/domain/service/alarm.factory';
import { CREATE_ALARM_USE_CASE } from './application/port/in/create-alarm.use-case';
import { CreateAlarmService } from './application/domain/service/create-alarm.service';
import { GET_ALARMS_USE_CASE } from './application/port/in/get-alarms.use-case';
import { GetAlarmsService } from './application/domain/service/get-alarms.service';
import { LOAD_ALARMS_PORT } from './application/port/out/load-alarms.port';
import { SAVE_ALARM_PORT } from './application/port/out/save-alarm.port';
import { AlarmPersistenceAdapter } from './adapter/out/persistence/alarm.persistence.adapter';

@Module({
  controllers: [AlarmController],
  providers: [
    AlarmFactory,
    { provide: CREATE_ALARM_USE_CASE, useClass: CreateAlarmService },
    { provide: GET_ALARMS_USE_CASE, useClass: GetAlarmsService },
    { provide: LOAD_ALARMS_PORT, useClass: AlarmPersistenceAdapter },
    { provide: SAVE_ALARM_PORT, useClass: AlarmPersistenceAdapter },
  ],
})
export class AlarmModule {}
