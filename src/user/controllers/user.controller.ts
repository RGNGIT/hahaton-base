import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Patch, Post, Query } from '@nestjs/common';
import CreateUserDto from '../dto/create-user.dto';
import { UserService } from '../services/user.service';
import UpdateUserDto from '../dto/update-user.dto';
import LoginUserDto from '../dto/login-user.dto';
import hash from 'src/common/hash';
import { createConfirmationUser, checkConfirm } from '../../helpers/email-confirm';
import DefineUserRoleDto from '../dto/define-user-role.dto';

@Controller()
export class UserController {
  constructor(private userService: UserService) { }

  @Post('register')
  async postNewUser(@Body() createUser: CreateUserDto) {
    const result = await createConfirmationUser(createUser);

    if (!result)
      throw new HttpException('Something happened while processing', HttpStatus.INTERNAL_SERVER_ERROR);

    return 'OK';
  }

  @Post('defineRole')
  async defineRole(@Body() defineUserRoleDto : DefineUserRoleDto) {
    const result = await this.userService.defineUserRole(defineUserRoleDto);
    return result;
  }

  @Get('confirmRegistration')
  async confirmRegistration(@Query('u') u, @Query('c') c) {
    const checkedConfirmUser = checkConfirm(u, c);

    if (!checkedConfirmUser)
      throw new HttpException('No such record', HttpStatus.NOT_FOUND);

    return await this.userService.create(checkedConfirmUser.UserData);
  }

  @Get('/:id')
  async findOne(@Param('id') id) {
    const {password, ...result} = (await this.userService.findOne(id)).dataValues;
    return result;
  }

  @Get('all')
  async findAll() {
    return await this.userService.findAll();
  }

  // DEPRECATED LOGIN MOVED TO AUTH
  // @Post('login')
  // async login(@Body() loginUser: LoginUserDto) {
  //   let foundUser = await this.userService.findOneByEmail(loginUser.email);

  //   if (!foundUser)
  //     throw new HttpException('Not found', HttpStatus.NOT_FOUND);

  //   if (hash(loginUser.password) == foundUser.password)
  //     return foundUser;
  // }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.delete(+id);
  }
}
