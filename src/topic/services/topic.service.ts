import { Inject, Injectable } from '@nestjs/common';
import constants from 'src/common/constants';
import { Topic } from '../entities/topic.entity';
import CreateTopicDto from '../dto/create-topic.dto';
import UpdateTopicDto from '../dto/update-topic.dto';

@Injectable()
export class TopicService {
  constructor(
    @Inject(constants.TOPIC_REPOSITORY)
    private topicsRepository: typeof Topic
  ) {}

  async create(createTopicDto: CreateTopicDto) {
    const topic =  await this.topicsRepository.create({...createTopicDto});
    return topic;
  }

  async findAll() {
    const topics = await  this.topicsRepository.findAll({include: {all: true}});
    return topics;
  }

  async findOne(id: number) {
    const topic = await this.topicsRepository.findOne({where: {id}, include: {all: true}});
    return topic;
  }

  async update(id: number, updateTopicDto: UpdateTopicDto) {
    const topic = await this.topicsRepository.update({...updateTopicDto}, {where: {id}});
    return topic;
  }

  async remove(id: number) {
    const topic = await this.topicsRepository.destroy({where: {id}});
    return topic;
  }
}