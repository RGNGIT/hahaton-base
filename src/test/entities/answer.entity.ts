import {Model, BelongsTo, Column, HasMany, Table, ForeignKey } from "sequelize-typescript";
import { Question } from "./question.entity";

@Table
export class Answer extends Model {
  @Column
  text: string;

  @Column
  isCorrect: boolean;

  @ForeignKey(() => Question)
  @Column
  question_id: number;

  @BelongsTo(() => Question)
  question: Question;
}