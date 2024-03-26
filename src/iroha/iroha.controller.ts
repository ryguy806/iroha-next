import { Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { IrohaService } from './iroha.service';

@Controller('iroha')
export class IrohaController {
  IrohaServiceProvider = new IrohaService();

  @Get('/domains')
  viewDomains(): Promise<string> {
    return this.IrohaServiceProvider.viewDomains();
  }

  @Post('/domains/register/:name')
  registerDomain(@Param('name') name: string) {
    return this.IrohaServiceProvider.registerDomain(name);
  }

  @Get('/accounts/')
  viewAllAccounts(): Promise<string> {
    return this.IrohaServiceProvider.viewAllAccounts();
  }

  @Get('/accounts/:accountId')
  viewAccountDetails(
    @Param(':accountId', ParseIntPipe) accountId: number,
  ): Promise<string> {
    return this.IrohaServiceProvider.viewAccountDetails(accountId);
  }

  @Post('/accounts/register/:accountId')
  registerAccount(@Param(':accountId', ParseIntPipe) accountId) {
    return this.IrohaServiceProvider.registerAccount(accountId);
  }

  @Get('/transactions/')
  viewAllTransactions(): Promise<string> {
    return this.IrohaServiceProvider.viewAllTransactions();
  }

  @Get('/transactions/:transactionId')
  getTransactionDetails(
    @Param(':transactionId', ParseIntPipe) transactionId: number,
  ): Promise<string> {
    return this.IrohaServiceProvider.viewTransactionDetails(transactionId);
  }

  @Get('/assets/')
  viewAllAssets(): Promise<string> {
    return this.IrohaServiceProvider.viewAllAssets();
  }

  @Get('/assets/:assetId')
  viewAssetDetails(@Param(':assetId') assetId: string): Promise<string> {
    return this.IrohaServiceProvider.viewAssetDetails(assetId);
  }

  @Post('/assets/register/:assetId')
  registerAsset(@Param('assetId') assetId: string) {
    return this.IrohaServiceProvider.registerAsset(assetId);
  }

  @Post('/assets/mint/')
  mintAsset(): void {
    this.mintAsset();
  }
  @Post('/assets/transfer')
  transferAsset(): void {
    this.transferAsset();
  }

  @Post('/assets/burn')
  burnAsset(): void {
    this.burnAsset();
  }
}
