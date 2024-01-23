import { Module } from '@nestjs/common';
import { LOAD_ALARMS_PORT } from '@alarm/application/port/out/load-alarms.port';
import { SAVE_ALARM_PORT } from '@alarm/application/port/out/save-alarm.port';
import { AlarmInMemoryPersistenceAdapter } from '@alarm/adapter/out/persistence/in-memory/alarm.in-memory.persistence.adapter';
import { AlarmInMemoryMapper } from '@alarm/adapter/out/persistence/in-memory/alarm.in-memory.mapper';

@Module({
  providers: [
    { provide: LOAD_ALARMS_PORT, useClass: AlarmInMemoryPersistenceAdapter },
    { provide: SAVE_ALARM_PORT, useClass: AlarmInMemoryPersistenceAdapter },
    AlarmInMemoryMapper,
  ],
  exports: [LOAD_ALARMS_PORT, SAVE_ALARM_PORT],
})
export class AlarmInMemoryPersistenceModule {}
