import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import CreateUserDto from '../dto/create-user.dto';
import { UserService } from '../services/user.service';
import UpdateUserDto from '../dto/update-user.dto';
import LoginUserDto from '../dto/login-user.dto';
import hash from 'src/common/hash';

@Controller()
export class UserController {
  constructor(private userService: UserService) { }

  @Post('new')
  async postNewUser(@Body() createUser: CreateUserDto) {
    return await this.userService.create(createUser);
  }

  @Get('all')
  async findAll() {
    return await this.userService.findAll();
  }

  @Post('login')
  async login(@Body() loginUser: LoginUserDto) {
    let foundUser = await this.userService.findOneByEmail(loginUser.email);

    if (!foundUser)
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);

    if (hash(loginUser.password) == foundUser.password)
      return foundUser;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
