import { Body, Controller, Get, Post } from '@nestjs/common';
import CreateUserDto from '../dto/create-user.dto';
import { UserService } from '../services/user.service';

@Controller()
export class UserController {
  constructor(private userService: UserService) {}

  @Post('new')
  async postNewUser(@Body() createUser: CreateUserDto) {
    return await this.userService.createOne(createUser);
  }

  @Post('login')
  async loginUser() {
    return await "Zalupa";
  }
}
