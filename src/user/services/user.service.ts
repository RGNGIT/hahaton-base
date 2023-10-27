import { Injectable, Inject } from '@nestjs/common';
import CreateUserDto from '../dto/create-user.dto';
import { User } from '../entities/user.entity';
import constants from '../../common/constants';
import hash from '../../common/hash';
import UpdateUserDto from '../dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(
    @Inject(constants.USERS_REPOSITORY)
    private usersRepository: typeof User
  ) {}

  async findOneByEmail(email) {
    return await this.usersRepository.findOne({where: {email}});
  }

  async create(newUser: CreateUserDto): Promise<User>
  {
    return await this.usersRepository.create({email: newUser.email, password: hash(newUser.password)});
  }

  async findAll(): Promise<User[]> {
    return await this.usersRepository.findAll<User>();
  }

  async update(id: number, updateRoleDto: UpdateUserDto) {
    return await this.usersRepository.update(updateRoleDto, {where: {id}});
  }

  async remove(id: number) {
    return await this.usersRepository.destroy({where: {id}});
  }
}