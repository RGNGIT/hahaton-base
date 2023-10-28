import { Controller, Request, Post, UseGuards, Body, Get, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger'
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import CreateUserDto from 'src/user/dto/create-user.dto';
import { UserService } from 'src/user/services/user.service';
import { RefreshJwtGuard } from './guards/refresh-jwt-auth.guard';
import { Response as ResponseType } from 'express';
import { AuthGuard } from './guards/auth.guard';


@ApiTags('Авторизация')
@Controller()
export class AuthController {
    constructor(private authService: AuthService) {}

    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Request() req) {
      return this.authService.login(req.user);
    }

    @UseGuards(RefreshJwtGuard)
    @Post('refresh') 
    async refreshToken(@Request() req){
        return this.authService.refreshToken(req.user);
    }

    @UseGuards(AuthGuard)
    @Post('profile') 
    async getProfile(@Request() req) {
      return req.user;
    }
}
