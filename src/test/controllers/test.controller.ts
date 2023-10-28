import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TestService } from '../services/test.service';
import CreateTestDto from '../dto/create-test.dto';
import UpdateTestDto from '../dto/update-test.dto';

@Controller()
export class TestController {
  constructor(private readonly testService: TestService) {}

  
}
