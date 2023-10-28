import { Module } from '@nestjs/common';
import { SequelizeModule } from 'src/sequelize/sequelize.module';
import { testProviders } from './providers/test.providers';

@Module({
  imports: [SequelizeModule],
  controllers: [],
  providers: [ ...testProviders ]
})

export class TestModule {}