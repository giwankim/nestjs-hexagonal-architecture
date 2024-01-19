import { Module } from '@nestjs/common';
import { AppController } from './alarm/presenter/http/app.controller';
import { AppService } from './app.service';
import { AlarmModule } from './alarm/application/alarm.module';

@Module({
  imports: [AlarmModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
