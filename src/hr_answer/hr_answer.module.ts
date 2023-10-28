import { Module } from '@nestjs/common';
import { HrAnswerService } from './hr_answer.service';
import { HrAnswerController } from './hr_answer.controller';

@Module({
  controllers: [HrAnswerController],
  providers: [HrAnswerService],
})
export class HrAnswerModule {}
