import { Sequelize } from "sequelize-typescript";
import { User } from "../../user/entities/user.entity";
import { sequelizeConfig } from "../../config";
import { Department } from "src/departments/entities/department.entity";
import { Portal } from "src/portal/entities/portal.entity";
import { Position } from "src/positions/entities/position.entity";
import { Role } from "src/role/entities/role.entity";
import { UserRoles } from "src/user/entities/user-roles.entity";
import { Topic } from "src/topic/entities/topic.entity";
import { Blob } from "src/cdn/entities/blob.entity";
import { Test } from "../../test/entities/test.entity";
import { Question } from "src/test/entities/question.entity";
import { Answer } from "src/test/entities/answer.entity";
import { Appeal } from "src/appeals/entities/appeal.entity";
import { HrAnswer } from "src/hr_answer/entities/hr_answer.entity";
import { TestResult } from "src/test/entities/test-results.entity";
import * as mysql from 'mysql2/promise';

export const dbProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const connection = await mysql.createConnection({
        host: sequelizeConfig.host,
        port: sequelizeConfig.port,
        user: sequelizeConfig.username,
        password: sequelizeConfig.password
      });
      await connection.query(`CREATE DATABASE IF NOT EXISTS \`${sequelizeConfig.database}\`;`);

      const sequelize = new Sequelize(sequelizeConfig);
      sequelize.addModels([User, Role, UserRoles, Portal, Department, Position, Topic, Blob, Test, Question, Answer, Appeal, HrAnswer, TestResult]);
      await sequelize.sync(/*{ alter: true }*/);

      return sequelize;
    }
  }
];