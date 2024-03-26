import {
  Account,
  AssetDefinition,
} from '@iroha2/data-model/dist/types/datamodel.d';
import { Id } from './classes';

export class CreateDomainDto {
  id: Id;
  accounts: Array<Account>;
  asset_definitions: Array<AssetDefinition>;
}
