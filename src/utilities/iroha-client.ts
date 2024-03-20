import { Client, Signer } from '@iroha2/client';
import { adapter as WS } from '@iroha2/client/dist/web-socket/native';
import { crypto } from './cryptoUtils';
import client_config from '../../config.json';
import { AccountId } from '@iroha2/data-model/dist/types/__generated__.d';

const HOST = window.location.host;

export const toriiPre = {
  apiURL: `http://${HOST}/torii/api`,
  telemetryURL: `http://${HOST}/torii/telemetry`,
  ws: WS,
  fetch: fetch.bind(window),
};

const signer = new Signer(
  client_config.account as AccountId,
  crypto.KeyPair.fromJSON(client_config),
);

export const client = new Client({ signer });
