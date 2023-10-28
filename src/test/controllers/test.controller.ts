import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TestService } from '../services/test.service';
import CreateTestDto from '../dto/create-test.dto';
import UpdateTestDto from '../dto/update-test.dto';
import { QuestionService } from '../services/question.service';
import { AnswerService } from '../services/answer.service';
import TestDto from '../dto/complex/test.dto';

@Controller()
export class TestController {
  constructor(
    private readonly testService: TestService,
    private readonly questionService: QuestionService,
    private readonly answerService: AnswerService,
  ) { }

  @Post('submitTest')
  async submitTest(@Body() testDto: TestDto) {
    console.log(testDto);
  }
}
