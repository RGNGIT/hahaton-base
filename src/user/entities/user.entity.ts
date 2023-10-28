import { Table, Column, Model, BelongsToMany, DataType, ForeignKey, BelongsTo, HasOne } from 'sequelize-typescript';
import { Role } from '../../role/entities/role.entity';
import { UserRoles } from './user-roles.entity';
import { Position } from 'src/positions/entities/position.entity';
import { Department } from 'src/departments/entities/department.entity';
import { Portal } from 'src/portal/entities/portal.entity';

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
  

  @ForeignKey(()=>Department)
  @Column
  department_id: number;

  @BelongsTo(()=>Department)
  department: Department;

  @ForeignKey(()=>Position)
  @Column
  position_id: number;

  @BelongsTo(()=>Position)
  position: Position;

  @ForeignKey(()=>Portal)
  @Column
  portal_id: number;
  
  @BelongsTo(()=>Portal)
  portal: Portal;
  


}