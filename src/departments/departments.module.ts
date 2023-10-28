import { Module } from '@nestjs/common';
import { DepartmentsService } from './departments.service';
import { DepartmentsController } from './departments.controller';
import { SequelizeModule } from 'src/sequelize/sequelize.module';
import { departmentProvider } from './providers/departments.providers';

@Module({
  imports: [SequelizeModule],
  controllers: [DepartmentsController],
  providers: [DepartmentsService, ...departmentProvider],
})
export class DepartmentsModule {}
