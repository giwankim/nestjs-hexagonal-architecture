import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AlarmTypeormPersistenceAdapter } from './alarm.typeorm.persistence.adapter';
import { AlarmTypeOrmEntity } from './alarm.typeorm.entity';
import { LOAD_ALARMS_PORT } from '@alarm/application/port/out/load-alarms.port';
import { SAVE_ALARM_PORT } from '@alarm/application/port/out/save-alarm.port';

@Module({
  imports: [TypeOrmModule.forFeature([AlarmTypeOrmEntity])],
  providers: [
    { provide: LOAD_ALARMS_PORT, useClass: AlarmTypeormPersistenceAdapter },
    { provide: SAVE_ALARM_PORT, useClass: AlarmTypeormPersistenceAdapter },
  ],
  exports: [LOAD_ALARMS_PORT, SAVE_ALARM_PORT],
})
export class AlarmTypeormPersistenceModule {}
