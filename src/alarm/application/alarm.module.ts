import { Module } from '@nestjs/common';
import { AlarmService } from './alarm.service';
import { AlarmController } from '../presenter/http/alarm.controller';
import { AlarmFactory } from '../domain/factory/alarm.factory';

@Module({
  controllers: [AlarmController],
  providers: [AlarmService, AlarmFactory],
})
export class AlarmModule {}
