import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { CreateAlarmCommand } from '../../../application/port/in/create-alarm.command';
import { CreateAlarmRequestDto } from './create-alarm.request.dto';
import {
  CREATE_ALARM_USE_CASE,
  CreateAlarmUseCase,
} from '../../../application/port/in/create-alarm.use-case';
import {
  GET_ALARMS_USE_CASE,
  GetAlarmsUseCase,
} from '../../../application/port/in/get-alarms.use-case';
import { Alarm } from '../../../application/domain/model/alarm';

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
