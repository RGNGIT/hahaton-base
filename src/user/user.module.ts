import { Module } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { UserService } from './services/user.service';
import { usersProvider } from './providers/user.providers';
import { SequelizeModule } from '../sequelize/sequelize.module';

@Module({
  imports: [SequelizeModule],
  controllers: [UserController],
  providers: [
    UserService,
    ...usersProvider,
  ],
})

export class UserModule {}