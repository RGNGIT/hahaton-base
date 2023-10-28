import { Module } from '@nestjs/common';
import { SequelizeModule } from 'src/sequelize/sequelize.module';
import { testProviders } from './providers/test.providers';
import { TestController } from './controllers/test.controller';

@Module({
  imports: [SequelizeModule],
  controllers: [TestController],
  providers: [ ...testProviders ]
})

export class TestModule {}