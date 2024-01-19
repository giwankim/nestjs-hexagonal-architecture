import { Injectable } from '@nestjs/common';
import { CreateAlarmDto } from '../presenter/http/dto/create-alarm.dto';
import { UpdateAlarmDto } from '../presenter/http/dto/update-alarm.dto';

@Injectable()
export class AlarmService {
  create(createAlarmDto: CreateAlarmDto) {
    return 'This action adds a new alarm';
  }

  findAll() {
    return `This action returns all alarm`;
  }

  findOne(id: number) {
    return `This action returns a #${id} alarm`;
  }

  update(id: number, updateAlarmDto: UpdateAlarmDto) {
    return `This action updates a #${id} alarm`;
  }

  remove(id: number) {
    return `This action removes a #${id} alarm`;
  }
}
