import { Controller, Get, Param, Post } from '@nestjs/common';
import { IrohaService } from './iroha.service';

@Controller('iroha')
export class IrohaController {
  IrohaServiceProvider = new IrohaService();
  @Get('/domains')
  viewDomains(): Promise<string> {
    return this.IrohaServiceProvider.viewDomains();
  }

  @Post('/domains/register')
  registerDomain(): void {
    this.IrohaServiceProvider.registerDomain();
  }

  @Get('/accounts/')
  viewAllAccounts(): Promise<string> {
    return this.IrohaServiceProvider.viewAllAccounts();
  }

  @Get('/accounts/:accountId')
  viewAccountDetails(@Param(':accountId') accountId: string): Promise<string> {
    return this.IrohaServiceProvider.viewAccountDetails(accountId);
  }

  @Post('/accounts/register')
  registerAccount(): void {
    this.IrohaServiceProvider.registerAccount();
  }

  @Get('/transactions/')
  viewAllTransactions(): Promise<string> {
    return this.IrohaServiceProvider.viewAllTransactions();
  }

  @Get('/transactions/:transactionId')
  getTransactionDetails(
    @Param(':transactionId') transactionId: string,
  ): Promise<string> {
    return this.IrohaServiceProvider.viewTransactionDetails(transactionId);
  }

  @Get('/assets/')
  viewAllAssets(): Promise<string> {
    return this.IrohaServiceProvider.viewAllAssets();
  }

  @Get('/assets/:assetId')
  viweAssetDetails(@Param(':assetId') assetId: string): Promise<string> {
    return this.IrohaServiceProvider.viewAssetDetails(assetId);
  }

  @Post('/assets/register')
  registerAsset(): void {
    this.IrohaServiceProvider.registerAsset();
  }

  @Post('/assets/mint')
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
