import { PartialType } from '@nestjs/mapped-types';
import CreateTopicDto from './create-topic.dto';
import UpdateTopicDto from './update-topic.dto';

export default class UpdateTopicFileSaltDto extends PartialType(UpdateTopicDto) {
  salt: string;
}