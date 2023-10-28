import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus, UseInterceptors, UploadedFile } from '@nestjs/common';
import { CdnService } from '../services/cdn.service';
import * as fs from 'fs';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags } from '@nestjs/swagger'

@ApiTags('Файлы')
@Controller()
export class CdnController {
  constructor(private readonly cdnService: CdnService) { }

  @Get('get/:key')
  async getFile(@Param('key') key) {
    try {
      let base64buffer = (await this.cdnService.readFile(key)).toString('base64');
      return base64buffer;
    } catch (err) {
      throw new HttpException('No such shit', HttpStatus.NOT_FOUND);
    }
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    try {
      return await this.cdnService.writeFile(file.buffer);
    } catch (err) {
      return err;
    }
  }
}