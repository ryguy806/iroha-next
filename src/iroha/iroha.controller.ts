import { Controller, Get, Param } from '@nestjs/common';

@Controller('iroha')
export class IrohaController {
  @Get()
  getHello(): string {
    return 'Hello World!';
  }

  @Get('/transactions')
  viewAllTransactions(): string {
    return 'all!';
  }

  @Get('/accounts/')
  getAllAccounts(): string {
    return 'All Accounts';
  }

  @Get('/accounts/:accountId')
  getAccountDetails(@Param(':accountId') accountId: string): string {
    return `Account ${accountId}`;
  }
}
