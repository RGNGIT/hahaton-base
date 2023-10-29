import { Module } from '@nestjs/common';
import { AppealsService } from './appeals.service';
import { AppealsController } from './appeals.controller';
import { appealProvider } from './providers/appeals.provider';

@Module({
  controllers: [AppealsController],
  providers: [AppealsService, ...appealProvider],
})
export class AppealsModule { }
