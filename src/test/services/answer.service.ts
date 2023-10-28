import { Inject, Injectable } from '@nestjs/common';
import { Test } from '../entities/test.entity';
import constants from 'src/common/constants';
import CreateTestDto from '../dto/create-test.dto';
import UpdateTestDto from '../dto/update-test.dto';
import { Question } from '../entities/question.entity';
import CreateQuestionDto from '../dto/create-question.dto';
import UpdateQuestionDto from '../dto/update-question.dto';
import { Answer } from '../entities/answer.entity';
import CreateAnswerDto from '../dto/create-answer.dto';

@Injectable()
export class AnswerService {
  constructor(
    @Inject(constants.ANSWER_REPOSITORY)
    private answerRepository: typeof Answer,
  ) { }

  async create(createAnswerDto: CreateAnswerDto) {
    const answer = await this.answerRepository.create({ ...createAnswerDto });
    return answer;
  }

  async findAll() {
    const answer = await this.answerRepository.findAll({ include: { all: true } });
    return answer;
  }

  async findOne(id: number) {
    const answer = await this.answerRepository.findOne({ where: { id }, include: { all: true } });
    return answer;
  }

  async update(id: number, updateQuestionDto: UpdateQuestionDto) {
    const question = await this.questionRepository.update({ ...updateQuestionDto }, { where: { id } });
    return question;
  }

  async remove(id: number) {
    const question = await this.questionRepository.destroy({ where: { id } });
    return question;
  }
}