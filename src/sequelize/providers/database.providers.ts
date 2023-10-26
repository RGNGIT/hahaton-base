import { Sequelize } from "sequelize-typescript";
import { User } from "../../user/entities/user.entity";
import {sequelizeConfig} from "../../config";

export const dbProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async() => {
      const sequelize = new Sequelize(sequelizeConfig);
      sequelize.addModels([User]);
      await sequelize.sync();
      
      return sequelize;
    }
  }
];