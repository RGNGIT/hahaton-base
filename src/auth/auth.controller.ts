import { Controller, Request, Post, UseGuards, Body, Get, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger'
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import CreateUserDto from 'src/user/dto/create-user.dto';
import { UserService } from 'src/user/services/user.service';
import { RefreshJwtGuard } from './guards/refresh-jwt-auth.guard';
import { Response as ResponseType } from 'express';


@ApiTags('Авторизация')
@Controller()
export class AuthController {
    constructor(private authService: AuthService,
        private userService: UserService) {}

    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Request() req) {
      return this.authService.login(req.user);
    }

    @Post('register')
    async registerUser(@Body() createUserDto: CreateUserDto){
        return this.userService.create(createUserDto);
    }

    @UseGuards(RefreshJwtGuard)
    @Post('refresh') 
    async refreshToken(@Request() req){
        return this.authService.refreshToken(req.user);
    }

    
}
