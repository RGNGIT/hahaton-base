import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TestService } from '../services/test.service';
import CreateTestDto from '../dto/create-test.dto';
import UpdateTestDto from '../dto/update-test.dto';
import { QuestionService } from '../services/question.service';
import { AnswerService } from '../services/answer.service';
import TestDto from '../dto/complex/test.dto';
import CreateQuestionDto from '../dto/create-question.dto';

@Controller()
export class TestController {
  constructor(
    private readonly testService: TestService,
    private readonly questionService: QuestionService,
    private readonly answerService: AnswerService,
  ) { }

  @Post('submitTest')
  async submitTest(@Body() testDto: TestDto) {
    const createdTest = await this.testService.create(testDto as CreateTestDto);

    for (const question of testDto.questions) {
      const createdQuestion = await this.questionService.create({ ...question, test_id: createdTest.id } as CreateQuestionDto);

      for (const answer of question.answers) {
        await this.answerService.create({ ...answer, question_id: createdQuestion.id });
      }
    }
  }

  @Get('test/one/:id')
  async getTest(@Param('id') id) {
    return await this.testService.findOne(id);
  }

  @Patch('test/:id') 
  async editTest(@Param('id') id, @Body() updateTestDto: UpdateTestDto) {
    return await this.testService.update(id, updateTestDto);
  }

  @Delete('test/:id')
  async deleteTest(@Param('id') id) {
    return await this.testService.remove(id);
  }
}
