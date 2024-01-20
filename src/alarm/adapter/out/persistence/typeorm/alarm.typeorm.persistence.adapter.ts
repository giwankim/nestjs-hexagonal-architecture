import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { AlarmTypeOrmEntity } from './alarm.typeorm.entity';
import { AlarmTypeOrmMapper } from './alarm.typeorm.mapper';
import { LoadAlarmsPort } from '@alarm/application/port/out/load-alarms.port';
import { SaveAlarmPort } from '@alarm/application/port/out/save-alarm.port';
import { Alarm } from '@alarm/application/domain/model/alarm';

@Injectable()
export class AlarmTypeOrmPersistenceAdapter
  implements LoadAlarmsPort, SaveAlarmPort
{
  constructor(
    @InjectRepository(AlarmTypeOrmEntity)
    private alarmRepository: Repository<AlarmTypeOrmEntity>,
  ) {}

  async loadAlarms(): Promise<Alarm[]> {
    const alarmEntities = await this.alarmRepository.find();
    return alarmEntities.map((alarmEntity) =>
      AlarmTypeOrmMapper.mapToDomainEntity(alarmEntity),
    );
  }

  async saveAlarm(alarm: Alarm): Promise<Alarm> {
    const ormEntity = AlarmTypeOrmMapper.mapToOrmEntity(alarm);
    const savedEntity = await this.alarmRepository.save(ormEntity);
    return AlarmTypeOrmMapper.mapToDomainEntity(savedEntity);
  }
}
