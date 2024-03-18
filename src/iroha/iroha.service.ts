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
  async viewDomains(): Promise<any> {
    return this.viewDomains();
  }

  async registerDomain(): Promise<any> {
    return this.registerDomain();
  }

  //Account functions
  async viewAllAccounts(): Promise<any> {
    return this.viewAllAccounts();
  }

  async registerAccount(): Promise<any> {
    return this.registerAccount();
  }

  //Transaction functions
  async getTransactionDetails(transactionID: string): Promise<any> {
    return this.getTransactionDetails(transactionID);
  }

  async viewAllTransactions(): Promise<any> {
    return this.viewAllTransactions();
  }

  //Asset functions
  async getAssetDetails(assetID: string): Promise<any> {
    return this.getAssetDetails(assetID);
  }

  async registerAsset(): Promise<any> {
    return this.registerAsset();
  }
  async mintAsset(): Promise<any> {
    return this.mintAsset();
  }
  async transferAsset(): Promise<any> {
    return this.transferAsset();
  }
  async burnAsset(): Promise<any> {
    return this.burnAsset();
  }

  async viewAllAssets(): Promise<any> {
    return this.viewAllAssets();
  }
}
