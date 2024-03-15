import { Controller, Get } from '@nestjs/common';

@Controller('iroha')
export class IrohaController {
  @Get()
  getHello(): string {
    return 'Hello World!';
  }
}
