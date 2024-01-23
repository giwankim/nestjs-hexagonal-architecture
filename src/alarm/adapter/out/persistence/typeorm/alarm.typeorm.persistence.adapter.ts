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
    private readonly alarmRepository: Repository<AlarmTypeOrmEntity>,
    private readonly alarmTypeOrmMapper: AlarmTypeOrmMapper,
  ) {}

  async loadAlarms(): Promise<Alarm[]> {
    const alarmOrmEntities = await this.alarmRepository.find();
    return alarmOrmEntities.map((alarmOrmEntity) =>
      this.alarmTypeOrmMapper.mapToDomainEntity(alarmOrmEntity),
    );
  }

  async saveAlarm(alarm: Alarm): Promise<Alarm> {
    const alarmOrmEntity = this.alarmTypeOrmMapper.mapToOrmEntity(alarm);
    const savedAlarmOrmEntity = await this.alarmRepository.save(alarmOrmEntity);
    return this.alarmTypeOrmMapper.mapToDomainEntity(savedAlarmOrmEntity);
  }
}
