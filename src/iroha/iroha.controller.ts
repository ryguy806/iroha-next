import { Controller, Get, Param, Post } from '@nestjs/common';

@Controller('iroha')
export class IrohaController {
  @Get()
  getHello(): string {
    return 'Hello World!';
  }

  @Get('/domains')
  viewDomains(): string {
    return 'ALl the domains!';
  }

  @Post('/domains/register')
  registerDomain(): void {}

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

  @Get('/transactions/')
  getAllTransactions(): string {
    return 'All Transactions';
  }

  @Get('/transactions/:transactionId')
  getTransactionDetails(
    @Param(':transactionId') transactionId: string,
  ): string {
    return `Transaction ${transactionId}`;
  }
}
