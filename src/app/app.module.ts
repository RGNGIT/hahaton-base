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
import { JwtModule } from '@nestjs/jwt';
import { AuthModule } from 'src/auth/auth.module';
import { TopicModule } from 'src/topic/topic.module';

@Module({
  imports: [
    UserModule,
    AuthModule,
    PortalModule,
    DepartmentsModule,
    PositionsModule,
    RoleModule,
    JwtModule,
    TopicModule,
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
      {
        path: path.AUTH_MODULE,
        module: AuthModule
      },
      {
        path: path.TOPIC_MODULE,
        module: TopicModule
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
