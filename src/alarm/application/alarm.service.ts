import { Injectable } from '@nestjs/common';
import { CreateAlarmCommand } from './command/create-alarm.command';

@Injectable()
export class AlarmService {
  create(createAlarmCommand: CreateAlarmCommand) {
    return 'This action adds a new alarm';
  }

  findAll() {
    return `This action returns all alarm`;
  }
}
