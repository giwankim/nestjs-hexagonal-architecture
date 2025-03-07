import { DynamicModule, Module } from '@nestjs/common';
import { AlarmInMemoryPersistenceModule } from '@alarm/adapter/out/persistence/in-memory/alarm.in-memory.persistence.module';
import { AlarmTypeormPersistenceModule } from '@alarm/adapter/out/persistence/typeorm/alarm.typeorm.persistence.module';

@Module({})
export class AlarmPersistenceModule {
  static register(config: { datasource: 'orm' | 'in-memory' }): DynamicModule {
    const persistenceModule =
      config.datasource === 'orm'
        ? AlarmTypeormPersistenceModule
        : AlarmInMemoryPersistenceModule;
    return {
      module: AlarmPersistenceModule,
      imports: [persistenceModule],
      exports: [persistenceModule],
    };
  }
}
