import { Injectable, Inject } from '@nestjs/common';
import CreateUserDto from '../dto/create-user.dto';
import { User } from '../entities/user.entity';
import constants from '../../common/constants';
import hash from '../../common/hash';

@Injectable()
export class UserService {
  constructor(
    @Inject(constants.USERS_REPOSITORY)
    private usersRepository: typeof User
  ) {}

  async findAll(): Promise<User[]> {
    return await this.usersRepository.findAll<User>();
  }

  async createOne(newUser: CreateUserDto): Promise<User>
  {
    return await this.usersRepository.create({email: newUser.Email, password: hash(newUser.Password)});
  }
}