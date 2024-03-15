import { Injectable } from '@nestjs/common';
import { Client, Signer } from '@iroha2/client';

declare const signer: Signer;

@Injectable()
export class IrohaService {
  private client: Client;

  constructor() {
    this.client = new Client({ signer });
  }
}
