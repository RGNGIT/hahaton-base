import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TopicService } from '../services/topic.service';
import CreateTopicDto from '../dto/create-topic.dto';
import UpdateTopicDto from '../dto/update-topic.dto';

@Controller()
export class TopicController {
  constructor(private readonly topicService: TopicService) { }

  @Post('new')
  postNewRole(@Body() createRoleDto: CreateTopicDto) {
    return this.topicService.create(createRoleDto);
  }

  @Get('all')
  findAll() {
    return this.topicService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.topicService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRoleDto: UpdateTopicDto) {
    return this.topicService.update(+id, updateRoleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.topicService.remove(+id);
  }
}