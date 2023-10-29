import {Model, BelongsTo, Column, HasMany, Table, ForeignKey } from "sequelize-typescript";
import { Test } from "./test.entity";

@Table
export class TestResult extends Model {
  @Column
  score: number;

  @ForeignKey(() => Test)
  @Column
  test_id: number;

  @BelongsTo(() => Test)
  test: Test;
  
  @Column
  is_vr: boolean;
}