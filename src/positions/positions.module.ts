import { Module } from '@nestjs/common';
import { PositionsService } from './positions.service';
import { PositionsController } from './positions.controller';
import { positionProvider } from './providers/position.providers';
import { SequelizeModule } from 'src/sequelize/sequelize.module';

@Module({
  imports: [SequelizeModule],
  controllers: [PositionsController],
  providers: [PositionsService, ...positionProvider],
})
export class PositionsModule { }
