import { AssetDefinition } from '@iroha2/data-model/dist/types/__generated__.d';
import { Id } from './classes';

export class CreateAccountDto {
  id: Id;
  assets: Array<AssetDefinition>;
  signatories: Array<string>;
}
