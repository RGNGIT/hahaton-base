import {Model, BelongsTo, Column, HasMany, Table } from "sequelize-typescript";
import { Department } from "src/departments/entities/department.entity";

@Table
export class Portal extends Model {
    @Column
    name: string;

    @Column({ allowNull: true })
    description?: string;

    @Column({ allowNull: true })
    logo_url?: string;

    @HasMany(() => Department)
    departments: Department[];


}
