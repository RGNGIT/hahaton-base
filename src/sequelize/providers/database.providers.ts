import { Sequelize } from "sequelize-typescript";
import { User } from "../../user/entities/user.entity";
import {sequelizeConfig} from "../../config";
import { Department } from "src/departments/entities/department.entity";
import { Portal } from "src/portal/entities/portal.entity";
import { Position } from "src/positions/entities/position.entity";
import { Role } from "src/role/entities/role.entity";
import { UserRoles } from "src/user/entities/user-roles.entity";
import { Topic } from "src/topic/entities/topic.entity";
import { Blob } from "src/cdn/entities/blob.entity";
import { Appeal } from "src/appeals/entities/appeal.entity";
import { HrAnswer } from "src/hr_answer/entities/hr_answer.entity";

export const dbProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async() => {
      const sequelize = new Sequelize(sequelizeConfig);
      sequelize.addModels([User, Role, UserRoles, Portal, Department, Position, Topic, Blob, Appeal, HrAnswer]);
      await sequelize.sync({ alter: true });
      
      return sequelize;
    }
  }
];