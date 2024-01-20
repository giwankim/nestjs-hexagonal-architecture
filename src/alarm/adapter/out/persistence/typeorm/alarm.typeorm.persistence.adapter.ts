import { LoadAlarmsPort } from '../../../../application/port/out/load-alarms.port';
import { SaveAlarmPort } from '../../../../application/port/out/save-alarm.port';
import { Alarm } from '../../../../application/domain/model/alarm';
import { InjectRepository } from '@nestjs/typeorm';
import { AlarmTypeOrmEntity } from './alarm.typeorm.entity';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { AlarmTypeOrmMapper } from './alarm.typeorm.mapper';

@Injectable()
export class AlarmTypeormPersistenceAdapter
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
