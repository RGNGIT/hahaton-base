import { Table, Column, Model, BelongsToMany, DataType } from 'sequelize-typescript';
import { Role } from '../../role/entities/role.entity';
import { UserRoles } from './user-roles.entity';

@Table
export class User extends Model {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @Column
  first_name: string;

  @Column
  last_name: string;

  @Column
  middle_name: string;

  @Column
  phone: string;

  @BelongsToMany(() => Role, () => UserRoles)
  roles: Role[]

  @Column
  email: string;

  @Column
  password: string;
}