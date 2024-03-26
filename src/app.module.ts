import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IrohaController } from './iroha/iroha.controller';
import { IrohaService } from './iroha/iroha.service';
import { IrohaModule } from './iroha/iroha.module';
import { ConfigModule } from '@nestjs/config';
import { ClientService } from './client/client.service';

ConfigModule.forRoot();

@Module({
  imports: [IrohaModule],
  controllers: [AppController, IrohaController],
  providers: [AppService, IrohaService, ClientService],
})
export class AppModule {}
