import {Model, BelongsTo, Column, HasMany, Table, ForeignKey } from "sequelize-typescript";
import { Topic } from "src/topic/entities/topic.entity";
import { Answer } from "./answer.entity";
import { Question } from "./question.entity";

@Table
export class Test extends Model {
  @Column
  name: string;

  @ForeignKey(() => Topic)
  @Column
  topic_id: number;

  @BelongsTo(() => Topic)
  topic: Topic;

  @HasMany(() => Question)
  answer: Question[]
}