import { Inject, Injectable } from '@nestjs/common';
import { CreatePortalDto } from './dto/create-portal.dto';
import { UpdatePortalDto } from './dto/update-portal.dto';
import constants from 'src/common/constants';
import { Portal } from './entities/portal.entity';
import { Department } from 'src/departments/entities/department.entity';

@Injectable()
export class PortalService {
  constructor(
    @Inject(constants.PORTAL_REPOSITORY)
    private portalRepository: typeof Portal
  ) {}
  async create(createPortalDto: CreatePortalDto) {
    const newportal =  await this.portalRepository.create({...createPortalDto});

    // uersService.GiveRole(PORTAL_ADMIN)
    // UserService.Update(Portal_id = newportal.id)

    return newportal;
  }

  async findAll() {
    const portals = await  this.portalRepository.findAll({include: {all: true}});
    return portals;
  }

  async findOne(id: number) {
    const portal = await this.portalRepository.findOne({where: {id}, include: [{model: Department}]});
    return portal;
  }

  async update(id: number, updatePortalDto: UpdatePortalDto) {
    const portal = await this.portalRepository.update({...updatePortalDto}, {where: {id}});
    return portal;
  }

  async remove(id: number) {
    const portal = await this.portalRepository.destroy({where: {id}});  //flag?
    return portal;
  }
}
