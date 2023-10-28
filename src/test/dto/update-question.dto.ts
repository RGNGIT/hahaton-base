import { PartialType } from '@nestjs/mapped-types';
import CreateQuestionDto from './create-question.dto';

export default class UpdateQuestionDto extends PartialType(CreateQuestionDto) {
  blob_id: number;
  test_id: number;
}