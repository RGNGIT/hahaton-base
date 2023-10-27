import { Sequelize } from "sequelize-typescript";
import { User } from "../../user/entities/user.entity";
import {sequelizeConfig} from "../../config";
import { Department } from "src/departments/entities/department.entity";
import { Portal } from "src/portal/entities/portal.entity";
import { Position } from "src/positions/entities/position.entity";
import { Role } from "src/role/entities/role.entity";
import { UserRoles } from "src/user/entities/user-roles.entity";

export const dbProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async() => {
      const sequelize = new Sequelize(sequelizeConfig);
      sequelize.addModels([User, Role, UserRoles, Portal, Department, Position]);
      await sequelize.sync({ alter: true });
      
      return sequelize;
    }
  }
];