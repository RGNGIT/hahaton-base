import { Module } from '@nestjs/common';
import { PortalService } from './portal.service';
import { PortalController } from './portal.controller';
import { SequelizeModule } from 'src/sequelize/sequelize.module';
import { portalProvider } from './providers/portal.providers';

@Module({
  imports: [SequelizeModule],
  controllers: [PortalController],
  providers: [PortalService, ...portalProvider],
  
})
export class PortalModule {}
