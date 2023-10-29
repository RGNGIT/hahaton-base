import { Inject, Injectable } from '@nestjs/common';
import { CreatePositionDto } from './dto/create-position.dto';
import { UpdatePositionDto } from './dto/update-position.dto';
import constants from 'src/common/constants';
import { Position } from './entities/position.entity';

@Injectable()
export class PositionsService {
  constructor(
    @Inject(constants.POSITION_REPOSITORY)
    private positionsRepository: typeof Position
  ) { }

  async create(createPositionDto: CreatePositionDto) {
    const newposition = await this.positionsRepository.create({ ...createPositionDto });
    return newposition
  }

  async findAll() {
    const positions = await this.positionsRepository.findAll({ include: { all: true } });
    return positions;
  }

  async findOne(id: number) {
    const position = await this.positionsRepository.findOne({ where: { id }, include: { all: true } });
    return position;
  }


  async update(id: number, updatePositionDto: UpdatePositionDto) {
    const position = await this.positionsRepository.update({ ...updatePositionDto }, { where: { id } });
    return position;
  }

  async remove(id: number) {
    const portal = await this.positionsRepository.destroy({ where: { id } });
    return portal;
  }
}
