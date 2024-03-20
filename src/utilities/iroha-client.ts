import { DomainId, Executable, Expression, IdentifiableBox, Metadata, NewDomain, OptionIpfsPath, RegistrableBox, Value } from "@iroha2/data-model/dist/types/__generated__.d";
import { client, toriiRequirements } from "./cryptoUtils";


async function registerDomain() {
    const registerBox = RegistrableBox({object: EvaluateToRegistrableBox({expression: Expression('Raw', Value('Identifiable', IdentifiableBox('NewDomain': NewDomain({id: DomainId({name: domainName}), metadata: Metadata({map: MapNameValue(new Map())}), logo: OptionIpfsPath('None')}))))})})

    await client.submitExecutable(toriiRequirements, Executable('Instructions', VecInstructions([Instruction('Register', registerBox)])));
}