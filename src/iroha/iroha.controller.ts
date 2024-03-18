import { Controller, Get, Param, Post } from '@nestjs/common';

@Controller('iroha')
export class IrohaController {
  @Get('/domains')
  viewDomains(): string {
    return 'ALl the domains!';
  }

  @Post('/domains/register')
  registerDomain(): void {}

  @Get('/accounts/')
  viewAllAccounts(): string {
    return 'All the Accounts';
  }

  @Get('/accounts/:accountId')
  getAccountDetails(@Param(':accountId') accountId: string): string {
    return `Account: ${accountId}`;
  }

  @Post('/accounts/register')
  registerAccount(): string {
    return 'Account Registered';
  }

  @Get('/transactions/')
  viewAllTransactions(): string {
    return 'All the Transactions';
  }

  @Get('/transactions/:transactionId')
  getTransactionDetails(
    @Param(':transactionId') transactionId: string,
  ): string {
    return `Transaction ${transactionId}`;
  }

  @Get('/assets/')
  viewAllAssets(): string {
    return 'All the Assets';
  }

  @Get('/assets/:assetId')
  getAssetDetails(@Param(':assetId') assetId: string): string {
    return `Asset: ${assetId}`;
  }

  @Post('/assets/register')
  registerAsset(): string {
    return 'Asset registered';
  }

  @Post('/assets/mint')
  mintAsset(): string {
    return 'Asset minted';
  }
  @Post('/assets/transfer')
  transferAsset(): string {
    return 'Asset transfered';
  }

  @Post('/assets/burn')
  burnAsset(): string {
    return 'Asset burned';
  }
}
