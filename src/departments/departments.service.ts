import { Inject, Injectable } from '@nestjs/common';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import constants from 'src/common/constants';
import { Department } from './entities/department.entity';

@Injectable()
export class DepartmentsService {
  constructor(
    @Inject(constants.DEPARTMENT_REPOSITORY)
    private departmentsRepository: typeof Department
  ) {}
  async create(createDepartmentsDto: CreateDepartmentDto) {
    const newdepartment =  await this.departmentsRepository.create({...createDepartmentsDto});
    return newdepartment;
  }

  async findAll() {
    const departments = await  this.departmentsRepository.findAll({include: {all: true}});
    return departments;
  }

  async findOne(id: number) {
    const department = await this.departmentsRepository.findOne({where: {id}, include: {all: true}});
    return department;
  }

  async update(id: number, updateDepartmentsDto: UpdateDepartmentDto) {
    const department = await this.departmentsRepository.update({...updateDepartmentsDto}, {where: {id}});
    return department;
  }

  async remove(id: number) {
    const department = await this.departmentsRepository.destroy({where: {id}}); 
    return department;
  }
}
