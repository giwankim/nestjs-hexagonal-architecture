import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AlarmTypeOrmPersistenceAdapter } from './alarm.typeorm.persistence.adapter';
import { AlarmTypeOrmEntity } from './alarm.typeorm.entity';
import { LOAD_ALARMS_PORT } from '@alarm/application/port/out/load-alarms.port';
import { SAVE_ALARM_PORT } from '@alarm/application/port/out/save-alarm.port';
import { AlarmTypeOrmMapper } from '@alarm/adapter/out/persistence/typeorm/alarm.typeorm.mapper';

@Module({
  imports: [TypeOrmModule.forFeature([AlarmTypeOrmEntity])],
  providers: [
    { provide: LOAD_ALARMS_PORT, useClass: AlarmTypeOrmPersistenceAdapter },
    { provide: SAVE_ALARM_PORT, useClass: AlarmTypeOrmPersistenceAdapter },
    AlarmTypeOrmMapper,
  ],
  exports: [LOAD_ALARMS_PORT, SAVE_ALARM_PORT],
})
export class AlarmTypeormPersistenceModule {}
