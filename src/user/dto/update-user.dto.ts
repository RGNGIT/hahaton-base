import { PartialType } from '@nestjs/mapped-types';
import CreateUserDto from './create-user.dto';

export default class UpdateUserDto extends PartialType(CreateUserDto) {
  first_name: string;
  last_name: string;
  middle_name: string;
  phone: string;
}