import { JsonRpcCall } from "../model";

export class HelpServices {

  constructor(private callRpc: <ReturnType>(methodName: string, args?: Array<any>) => JsonRpcCall<ReturnType>) {
  }

  public async getAllRawRpcMethods(): Promise<{ method: string, arguments: string }[]> {
    let rawHelpResult = await this.callRpc<string>('help').call();
    let helpMethodDefinitions = rawHelpResult.split('\n');

    let helpMethodDefinitionArray = [];
    helpMethodDefinitions.forEach(helpDef => {
      if (!this.helpLineIsHeader(helpDef) && helpDef.length > 0) {
        let methodArgumentSplitIndex = helpDef.indexOf(' ');
        if (methodArgumentSplitIndex === -1) {
          helpMethodDefinitionArray.push({method: helpDef});
        }
        else {
          let method = helpDef.substring(0,methodArgumentSplitIndex);
          let argumentString = helpDef.substring(methodArgumentSplitIndex+1);
          helpMethodDefinitionArray.push({
            method: method,
            arguments: argumentString
          });
        }
      }
    });
    return helpMethodDefinitionArray;
  }

  public  helpLineIsHeader(helpDefinition) {
    return helpDefinition.startsWith("==");
  }

  public async helpForRpcCommand({commandName}) {
    return await this.callRpc('help', [commandName]);
  }
}
