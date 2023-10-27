import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from '../user/user.module';
import { RouterModule } from '@nestjs/core';
import path from '../common/path';
import { AuthMiddleware } from '../user/middlewares/auth.middleware';
import { DepartmentsModule } from 'src/departments/departments.module';
import { PortalModule } from 'src/portal/portal.module';
import { PositionsModule } from 'src/positions/positions.module';
import { RoleModule } from '../role/role.module';

@Module({
  imports: [
    UserModule,
    PortalModule,
    DepartmentsModule,
    PositionsModule,
    RoleModule,
    RouterModule.register([{
      path: path.API_REQUEST,
      children: [{
        path: path.USER_MODULE,
        module: UserModule
      },
      {
        path: path.PORTAL_MODULE,
        module: PortalModule
      },
      {
        path: path.DEPARTMENTS_MODULE,
        module: DepartmentsModule
      },
      {
        path: path.POSITIONS_MODULE,
        module: PositionsModule
      }, 
      {
        path: path.ROLE_MODULE,
        module: RoleModule
      },
      ]
    }
    ])
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .exclude(path.NEW_USER);
  }
}
