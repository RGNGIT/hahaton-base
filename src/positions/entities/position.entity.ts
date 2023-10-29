import { BelongsTo, Column, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { Department } from "src/departments/entities/department.entity";
import { User } from "src/user/entities/user.entity";

@Table
export class Position extends Model {
  @Column
  name: string;

  @Column
  description: string;

  // @Column({defaultValue: false})
  // is_director: boolean;

  // @ForeignKey(() => Department)
  // @Column
  // department_id: number;

  // @BelongsTo(() => Department)
  // department: Department; 

  @HasMany(() => User)
  users: User[];
}
