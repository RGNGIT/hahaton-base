import { Inject, Injectable } from '@nestjs/common';
import CreateRoleDto from '../dto/create-role.dto';
import { UpdateRoleDto } from '../dto/update-role.dto';
import { Role } from '../entities/role.entity';
import constants from "../../common/constants";

@Injectable()
export class RoleService {
  constructor(
    @Inject(constants.ROLES_REPOSITORY)
    private rolesRepository: typeof Role
  ) {}
  
  async create(createRoleDto: CreateRoleDto) {
    return this.rolesRepository.create({name: createRoleDto.name, description: createRoleDto.description});
  }

  async findAll() {
    return await this.rolesRepository.findAll();
  }

  async findOne(id: number) {
    return await this.rolesRepository.findByPk(id);
  }

  async update(id: number, updateRoleDto: UpdateRoleDto) {
    return await this.rolesRepository.update(updateRoleDto, {where: {id}});
  }

  async remove(id: number) {
    return await this.rolesRepository.destroy({where: {id}});
  }
}
