import {Model, BelongsTo, Column, HasMany, Table } from "sequelize-typescript";

@Table
export class Img extends Model {
  @Column
  file: string;
}