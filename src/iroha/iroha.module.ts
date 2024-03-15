import { Module } from '@nestjs/common';
import { IrohaController } from './iroha.controller';
import { IrohaService } from './iroha.service';

@Module({
  controllers: [IrohaController],
  providers: [IrohaService],
})
export class IrohaModule {}
