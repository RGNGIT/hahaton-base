import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';

@Controller()
export class TestController {
  // constructor(private readonly roleService: RoleService) {}
  @Post('new')
  async addNewTest() {
    
  }
}
