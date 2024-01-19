import { LoadAlarmsPort } from '../../../application/port/out/load-alarms.port';
import { SaveAlarmPort } from '../../../application/port/out/save-alarm.port';
import { Alarm } from '../../../application/domain/model/alarm';
import { InjectRepository } from '@nestjs/typeorm';
import { AlarmTypeOrmEntity } from './alarm.typeorm.entity';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AlarmPersistenceAdapter implements LoadAlarmsPort, SaveAlarmPort {
  constructor(
    @InjectRepository(AlarmTypeOrmEntity)
    private alarmRepository: Repository<AlarmTypeOrmEntity>,
  ) {}

  loadAlarms(): Promise<Alarm[]> {
    return Promise.resolve([]);
  }

  saveAlarm(): Promise<Alarm> {
    return Promise.resolve(undefined);
  }
}
