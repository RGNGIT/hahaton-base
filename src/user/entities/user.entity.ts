import { Table, Column, Model, BelongsToMany, DataType, ForeignKey, BelongsTo, HasOne, HasMany } from 'sequelize-typescript';
import { Role } from '../../role/entities/role.entity';
import { UserRoles } from './user-roles.entity';
import { Position } from 'src/positions/entities/position.entity';
import { Department } from 'src/departments/entities/department.entity';
import { Portal } from 'src/portal/entities/portal.entity';
import { EmployeeStatuses } from 'src/common/enums/employee_statuses.enum';
import { Rates } from 'src/common/enums/rates.enum';
import { Appeal } from 'src/appeals/entities/appeal.entity';

@Table
export class User extends Model {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @Column
  avatar_salt: string;

  @Column
  first_name: string;

  @Column
  last_name: string;

  @Column
  middle_name: string;

  @Column
  phone: string;

  @Column
  birthdate: Date;

  @BelongsToMany(() => Role, () => UserRoles)
  roles: Role[]

  @Column
  email: string;

  @Column
  password: string;

  @Column({defaultValue: Rates.single})
  rate: Rates
  
  @Column({defaultValue: EmployeeStatuses.active})
  status: EmployeeStatuses;

  @ForeignKey(() => Department)
  @Column
  department_id: number;

  @BelongsTo(() => Department)
  department: Department;

  @ForeignKey(() => Position)
  @Column
  position_id: number;

  @BelongsTo(()=>Position)
  position: Position;

  @ForeignKey(() => Portal)
  @Column
  portal_id: number;
  
  @BelongsTo(() => Portal)
  portal: Portal;
  
  @HasMany(() => Appeal, 'user_id')
  appeals: Appeal[];

  @HasMany(() => Appeal, 'hr_id')
  requests: Appeal[];
}

