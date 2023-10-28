import { Injectable, Inject } from '@nestjs/common';
import CreateUserDto from '../dto/create-user.dto';
import { User } from '../entities/user.entity';
import constants from '../../common/constants';
import hash from '../../common/hash';
import UpdateUserDto from '../dto/update-user.dto';
import { Role } from '../../role/entities/role.entity';
import { UserRoles } from '../entities/user-roles.entity';
import DefineUserRoleDto from '../dto/define-user-role.dto';

@Injectable()
export class UserService {
  constructor(
    @Inject(constants.USERS_REPOSITORY)
    private usersRepository: typeof User,
    @Inject(constants.USER_ROLES_REPOSITORY)
    private userRolesRepository: typeof UserRoles
  ) {}

  async defineUserRole(define: DefineUserRoleDto): Promise<UserRoles> {
    const definiton = await this.userRolesRepository.create({...define});
    return definiton;
  }

  async findOne(id): Promise<User> {
    const user = await this.usersRepository.findOne({where: {id}, include: {model: Role}});
    return user;
  }

  async findOneByEmail(email): Promise<User> {
    const user = await this.usersRepository.findOne({where: {email}, include: {model: Role}});
    return user;
  }

  async create(newUser: CreateUserDto): Promise<User>
  {
    const user = await this.usersRepository.create({email: newUser.email, password: hash(newUser.password)});
    return user;
  }

  async findAll(): Promise<User[]> {
    const users = await this.usersRepository.findAll<User>();
    return users;
  }

  async update(id: number, updateRoleDto: UpdateUserDto): Promise<User | [affectedCount: number]> {
    const user = await this.usersRepository.update(updateRoleDto, {where: {id}});
    return user;
  }

  async delete(id: number): Promise<User | number> {
    const user = await this.usersRepository.destroy({where: {id}});
    return user;
  }
}