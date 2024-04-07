import { BelongsTo, Column, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { User } from "src/user/entities/user.entity";
import { Region } from "./region.entity";

@Table
export class Locality extends Model {
  @Column
  name: string;

  @HasMany(() => User)
  users: User[];

  @ForeignKey(() => Region)
  @Column
  region_id: number;

  @BelongsTo(() => Region)
  position: Region;
}