import { Body, Controller, Get, Post } from '@nestjs/common';
import { AlarmService } from '../../application/alarm.service';
import { CreateAlarmDto } from './dto/create-alarm.dto';

@Controller('alarm')
export class AlarmController {
  constructor(private readonly alarmService: AlarmService) {}

  @Post()
  create(@Body() createAlarmDto: CreateAlarmDto) {
    return this.alarmService.create(createAlarmDto);
  }

  @Get()
  findAll() {
    return this.alarmService.findAll();
  }
}
