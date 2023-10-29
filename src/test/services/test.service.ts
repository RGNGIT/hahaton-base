import { Inject, Injectable } from '@nestjs/common';
import { Test } from '../entities/test.entity';
import constants from 'src/common/constants';
import CreateTestDto from '../dto/create-test.dto';
import UpdateTestDto from '../dto/update-test.dto';
import { Question } from '../entities/question.entity';
import { Answer } from '../entities/answer.entity';

@Injectable()
export class TestService {
  constructor(
    @Inject(constants.TEST_REPOSITORY)
    private testsRepository: typeof Test,
  ) { }

  async create(createTestDto: CreateTestDto) {
    const test = await this.testsRepository.create({ ...createTestDto });
    return test;
  }

  async findAll() {
  const tests = await this.testsRepository.findAll({ include: [{model: Question, include: [{model: Answer}]} ] });
    return tests;
  }

  async findOne(id: number) {
    const test = await this.testsRepository.findOne({ where: { id }, include: [{model: Question, include: [{model: Answer}]} ] });
    return test;
  }

  async update(id: number, updateTestDto: UpdateTestDto) {
    const test = await this.testsRepository.update({ ...updateTestDto }, { where: { id } });
    return test;
  }

  async remove(id: number) {
    const test = await this.testsRepository.destroy({ where: { id } });
    return test;
  }
}