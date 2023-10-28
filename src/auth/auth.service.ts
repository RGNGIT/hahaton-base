import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/services/user.service';
import hash from '../common/hash';
import { User } from 'src/user/entities/user.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private readonly usersService: UserService,
        private jwsService:JwtService) {}

    async validateUser(username: string, password: string): Promise<any> {
        const user = await this.usersService.findOneByEmail(username);
        if (user && hash(password)==user.password) {
          const { password, ...result } = user;
          return result;
        }
        return null;
      }

    async login(user: User){
        const payload = {
            username: user.email
        };
        console.log(user);
        return {
            id: user.dataValues.id,
            accessToken: this.jwsService.sign(payload),
            refreshToken: this.jwsService.sign(payload, {expiresIn: '30d'}),
        };
    }

    async refreshToken(user: User){
        const payload = {
            username: user.email
        };
        return {
            accessToken: this.jwsService.sign(payload),
        };
    }
}
