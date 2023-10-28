import { Inject, Injectable } from '@nestjs/common';
import { CreateInvitationDto } from './dto/create-invitation.dto';
import { UpdateInvitationDto } from './dto/update-invitation.dto';
import constants from 'src/common/constants';
import { Invitation } from './entities/invitation.entity';

@Injectable()
export class InvitationsService {

  constructor(
    @Inject(constants.INVITATION_REPOSITORY)
    private invitationsRepository: typeof Invitation,
   
  ) {}

  async create(createInvitationDto: CreateInvitationDto) {
    const newinvitation =  await this.invitationsRepository.create({...createInvitationDto});
    return newinvitation;
  }

  async findAll() {
    const invitation =  await this.invitationsRepository.findAll({include: {all: true}});
    return invitation;
  }

  async findOne(id: number) {
    const invitation =  await this.invitationsRepository.findOne({where: {id}});
    return invitation;
  }

  async update(id: number, updateInvitationDto: UpdateInvitationDto) {
    const invitation =  await this.invitationsRepository.update({...updateInvitationDto}, {where: {id}});
    return invitation;
  }

  async remove(id: number) {
    const invitation =  await this.invitationsRepository.destroy({where: {id}});
    return invitation;
  }
}
