import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { CreateAlarmCommand } from '@alarm/application/port/in/create-alarm.command';
import {
  CREATE_ALARM_USE_CASE,
  CreateAlarmUseCase,
} from '@alarm/application/port/in/create-alarm.use-case';
import {
  GET_ALARMS_USE_CASE,
  GetAlarmsUseCase,
} from '@alarm/application/port/in/get-alarms.use-case';
import { Alarm } from '@alarm/application/domain/model/alarm';
import { CreateAlarmRequestDto } from './create-alarm.request.dto';

@Controller('alarm')
export class AlarmController {
  constructor(
    @Inject(CREATE_ALARM_USE_CASE)
    private readonly createAlarmUseCase: CreateAlarmUseCase,
    @Inject(GET_ALARMS_USE_CASE)
    private readonly getAlarmsUseCase: GetAlarmsUseCase,
  ) {}

  @Post()
  create(@Body() createAlarmRequestDto: CreateAlarmRequestDto): Promise<Alarm> {
    return this.createAlarmUseCase.createAlarm(
      new CreateAlarmCommand(
        createAlarmRequestDto.name,
        createAlarmRequestDto.severity,
      ),
    );
  }

  @Get()
  findAll(): Promise<Alarm[]> {
    return this.getAlarmsUseCase.getAlarms();
  }
}
