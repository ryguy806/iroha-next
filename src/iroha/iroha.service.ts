import { Injectable } from '@nestjs/common';
import { Client, Signer } from '@iroha2/client';

declare const signer: Signer;

@Injectable()
export class IrohaService {
  private client: Client;

  constructor() {
    this.client = new Client({ signer });
  }

  //Domain functions
  async viewDomains(): Promise<string> {
    return 'All the domains';
  }

  async registerDomain(): Promise<void> {
    this.registerDomain();
  }

  //Account functions
  async viewAllAccounts(): Promise<any> {
    return this.viewAllAccounts();
  }

  async viewAccountDetails(accountId: string): Promise<string> {
    return `Account: ${accountId}`;
  }

  async registerAccount(): Promise<void> {
    return this.registerAccount();
  }

  //Transaction functions
  async viewTransactionDetails(transactionID: string): Promise<any> {
    return this.viewTransactionDetails(transactionID);
  }

  async viewAllTransactions(): Promise<any> {
    return this.viewAllTransactions();
  }

  //Asset functions
  async viewAssetDetails(assetID: string): Promise<any> {
    return this.viewAssetDetails(assetID);
  }

  async registerAsset(): Promise<void> {
    return this.registerAsset();
  }
  async mintAsset(): Promise<any> {
    return this.mintAsset();
  }
  async transferAsset(): Promise<void> {
    return this.transferAsset();
  }
  async burnAsset(): Promise<void> {
    return this.burnAsset();
  }

  async viewAllAssets(): Promise<any> {
    return this.viewAllAssets();
  }
}
