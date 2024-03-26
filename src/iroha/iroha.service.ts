import { Injectable } from '@nestjs/common';

const domains = [];
const accounts = [];
const assets = [];
const transactions = [];

@Injectable()
export class IrohaService {
  //Domain functions
  async viewDomains(): Promise<string> {
    return await domains.toString();
  }

  async registerDomain(domain): Promise<string> {
    domains.push(domain);
    return await (domain + ' Added!');
  }

  //Account functions
  async viewAllAccounts(): Promise<any> {
    return accounts.toString();
  }

  async viewAccountDetails(accountId: number): Promise<string> {
    return accounts[accountId].toString();
  }

  async registerAccount(account: string) {
    accounts.push(account);
    return await (account + ' Added!');
  }

  //Transaction functions
  async viewTransactionDetails(transactionID: number): Promise<string> {
    return await transactions[transactionID].toString();
  }

  async viewAllTransactions(): Promise<string> {
    return transactions.toString();
  }

  //Asset functions
  async viewAssetDetails(assetID: string): Promise<any> {
    return this.viewAssetDetails(assetID);
  }

  async registerAsset(assetId): Promise<string> {
    assets.push(assetId);
    return await (assetId + ' Added!');
  }
  async mintAsset(): Promise<any> {
    transactions.push('Minted Asset');
    return 'Asset Minted';
  }
  async transferAsset(): Promise<void> {
    transactions.push('Transfered Asset');
    return this.transferAsset();
  }
  async burnAsset(): Promise<void> {
    transactions.push('Burned Asset');
    return this.burnAsset();
  }

  async viewAllAssets(): Promise<any> {
    return await assets.toString();
  }
}
