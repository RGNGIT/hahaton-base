import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { AppealsService } from './appeals.service';
import { CreateAppealDto } from './dto/create-appeal.dto';
import { UpdateAppealDto } from './dto/update-appeal.dto';
import { ApiTags } from '@nestjs/swagger'
import { GetCurrentUser } from 'src/common/decorators/get-current-user.decorator';
import { JwtGuard } from 'src/auth/guards/jwt-auth.guard';
import { User } from 'src/user/entities/user.entity';

@ApiTags('Обращения')
@Controller()
export class AppealsController {
  constructor(private readonly appealsService: AppealsService) {}

  @Post()
  create(@Body() createAppealDto: CreateAppealDto) {
    return this.appealsService.create(createAppealDto);
  }

  @Get()
  findAll() {
    return this.appealsService.findAll();
  }

  @UseGuards(JwtGuard)
  @Get('users')
  findUserAppeal(@GetCurrentUser() user: any) {
    return this.appealsService.findUserAppeal(user.id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.appealsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAppealDto: UpdateAppealDto) {
    return this.appealsService.update(+id, updateAppealDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.appealsService.remove(+id);
  }
}
