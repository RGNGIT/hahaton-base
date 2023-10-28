import { Model, BelongsTo, Column, HasMany, Table } from "sequelize-typescript";
import { Topic } from "src/topic/entities/topic.entity";

@Table
export class Blob extends Model {
  @Column
  key: string;

  @HasMany(() => Topic)
  departments: Topic[];
}