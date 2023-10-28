import { Module } from '@nestjs/common';
import { SequelizeModule } from 'src/sequelize/sequelize.module';
import { topicProviders } from './providers/topic.providers';

@Module({
  imports: [SequelizeModule],
  controllers: [],
  providers: [ ...topicProviders ]
})

export class TopicModule {}