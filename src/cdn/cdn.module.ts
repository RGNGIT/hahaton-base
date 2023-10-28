import { Module } from '@nestjs/common';
import { CdnController } from './controllers/cdn.controller';
import { CdnService } from './services/cdn.service';

@Module({
  imports: [],
  controllers: [CdnController],
  providers: [CdnService]
})

export class CdnModule {}