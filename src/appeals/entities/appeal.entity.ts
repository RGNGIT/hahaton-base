import { BelongsTo, Column, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { HrAnswer } from "src/hr_answer/entities/hr_answer.entity";
import { User } from "src/user/entities/user.entity";


@Table
export class Appeal extends Model {
    @Column
    text: string;
    
    @Column
    status: Statuses;

    @ForeignKey(() => User)
    user_id: number;

    @BelongsTo(() => User)
    user: User;

    @HasMany(()=>HrAnswer)
    hr_answers: HrAnswer[];
}


enum Statuses {
    new = "Новая",
    closed = "Закрыто"
}