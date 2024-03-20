import {
  Client,
  Signer,
  ToriiRequirementsForApiHttp,
  ToriiRequirementsForApiWebSocket,
} from '@iroha2/client';
import { crypto } from '@iroha2/crypto-target-node';
import {
  DomainId,
  AccountId,
  Executable,
} from '@iroha2/data-model/dist/types/__generated__.d';
import { fetch } from 'undici';
import { adapter as WS } from '@iroha2/client/dist/web-socket/node';

//Client information
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

export const signer = new Signer(accountId, keyPair);

//Torii requirements
export const toriiRequirements: ToriiRequirementsForApiHttp &
  ToriiRequirementsForApiWebSocket = {
  apiURL: 'http://127.0.0.1:8080',
  ws: WS,
  fetch: fetch.bind(window),
};

export const client = new Client({ signer });

declare const exec: Executable;

export const clientConfing = async () => {
  await client.submitExecutable(toriiRequirements, exec);
};
