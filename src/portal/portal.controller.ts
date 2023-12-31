import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PortalService } from './portal.service';
import { CreatePortalDto } from './dto/create-portal.dto';
import { UpdatePortalDto } from './dto/update-portal.dto';
import { ApiTags } from '@nestjs/swagger'

@ApiTags('Портал')
@Controller()
export class PortalController {
  constructor(private readonly portalService: PortalService) { }

  @Post('new')
  create(@Body() createPortalDto: CreatePortalDto) {
    return this.portalService.create(createPortalDto);
  }

  @Get('all')
  findAll() {
    return this.portalService.findAll();
  }

  @Get('one/:id')
  findOne(@Param('id') id: string) {
    return this.portalService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePortalDto: UpdatePortalDto) {
    return this.portalService.update(+id, updatePortalDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.portalService.remove(+id);
  }
}
