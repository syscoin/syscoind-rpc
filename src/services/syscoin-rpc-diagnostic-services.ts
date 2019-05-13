import { get } from '../endpoint-decorators';
import DiagnosticServices from "../../type-definitions/supporting-types/diagnostic-services";

export function syscoinRpcDiagnosticServices(callRpc): DiagnosticServices {

  return {
    getAllRawRpcMethods: get(getAllRawRpcMethods),
    helpForRpcCommand: get(helpForRpcCommand)
  };

  async function getAllRawRpcMethods() {
    let rawHelpResult = await callRpc('help');
    // Turn the whole thing into a json object
    if (rawHelpResult.error) {
      return rawHelpResult;
    }
    let helpMethodDefinitions = rawHelpResult.split('\n');

    let helpMethodDefinitionArray = [];
    helpMethodDefinitions.forEach(helpDef => {
      if (!helpLineIsHeader(helpDef) && helpDef.length > 0) {
        let methodArgumentSplitIndex = helpDef.indexOf(' ');
        if (methodArgumentSplitIndex === -1) {
          helpMethodDefinitionArray.push({method: helpDef});
        } else {
          let method = helpDef.substring(0, methodArgumentSplitIndex);
          let argumentString = helpDef.substring(methodArgumentSplitIndex + 1);
          helpMethodDefinitionArray.push({
            method: method,
            arguments: argumentString
          });
        }
      }
    });
    return helpMethodDefinitionArray;
  }

  function helpLineIsHeader(helpDefinition) {
    return helpDefinition.startsWith("==");
  }

  async function helpForRpcCommand({commandName}) {
    let response = await callRpc('help', [commandName]);
    return response;
  }
}