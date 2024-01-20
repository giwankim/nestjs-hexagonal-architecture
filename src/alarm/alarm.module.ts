import { Module } from '@nestjs/common';
import { AlarmController } from './adapter/in/web/alarm.controller';
import { AlarmFactory } from './application/domain/service/alarm.factory';
import { CREATE_ALARM_USE_CASE } from './application/port/in/create-alarm.use-case';
import { CreateAlarmService } from './application/domain/service/create-alarm.service';
import { GET_ALARMS_USE_CASE } from './application/port/in/get-alarms.use-case';
import { GetAlarmsService } from './application/domain/service/get-alarms.service';
import { AlarmTypeormPersistenceModule } from './adapter/out/persistence/typeorm/alarm.typeorm.persistence.module';

@Module({
  imports: [AlarmTypeormPersistenceModule],
  controllers: [AlarmController],
  providers: [
    AlarmFactory,
    { provide: CREATE_ALARM_USE_CASE, useClass: CreateAlarmService },
    { provide: GET_ALARMS_USE_CASE, useClass: GetAlarmsService },
  ],
})
export class AlarmModule {}
