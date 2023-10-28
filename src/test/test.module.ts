import { Module } from '@nestjs/common';
import { SequelizeModule } from 'src/sequelize/sequelize.module';
import { testProviders } from './providers/test.providers';
import { TestController } from './controllers/test.controller';
import { TestService } from './services/test.service';

@Module({
  imports: [SequelizeModule],
  controllers: [TestController],
  providers: [ TestService, ...testProviders ]
})

export class TestModule {}