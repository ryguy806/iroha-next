import { Signer } from '@iroha2/client';
import { crypto } from '@iroha2/crypto-target-node';
import {
  DomainId,
  AccountId,
} from '@iroha2/data-model/dist/types/__generated__.d';

const keyPair = crypto.KeyPair.fromJSON({
  public_key: process.env.IROHA_PUBLIC_KEY,
  private_key: {
    digest_function: 'SHA256',
    payload: process.env.IROHA_PRIVATE_KEY,
  },
});

const accountId = AccountId({
  name: 'mad_hatter',
  domain_id: DomainId({
    name: 'wonderland',
  }),
});

const signer = new Signer(accountId, keyPair);
