import { BelongsTo, Column, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { AppealStatus } from "src/common/enums/appeal_status.enum";
import { HrAnswer } from "src/hr_answer/entities/hr_answer.entity";
import { User } from "src/user/entities/user.entity";


@Table
export class Appeal extends Model {
  @Column
  text: string;

  @Column({ defaultValue: AppealStatus.new })
  status: AppealStatus;

  @ForeignKey(() => User)
  user_id: number;

  @BelongsTo(() => User, 'user_id')
  user: User;

  @HasMany(() => HrAnswer)
  hr_answers: HrAnswer[];

  @ForeignKey(() => User)
  hr_id: number;

  @BelongsTo(() => User, 'hr_id')
  hr: User;

}