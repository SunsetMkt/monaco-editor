"use strict";(self.webpackChunkmy_application=self.webpackChunkmy_application||[]).push([[5115],{4323:(n,e,r)=>{r.r(e),r.d(e,{default:()=>o});const o="targetScope = 'subscription'\n\nparam deployStorage bool = true\n\n@description('The object ID of the principal that will get the role assignment')\nparam aadPrincipalId string\n\nmodule stg './storage.bicep' = if(deployStorage) {\n  name: 'storageDeploy'\n  scope: resourceGroup('another-rg') // this will target another resource group in the same subscription\n  params: {\n    storageAccountName: '<YOURUNIQUESTORAGENAME>'\n  }\n}\n\nvar contributor = 'b24988ac-6180-42a0-ab88-20f7382dd24c'\nresource roleDef 'Microsoft.Authorization/roleDefinitions@2018-01-01-preview' existing = {\n  name: contributor\n}\n\nresource rbac 'Microsoft.Authorization/roleAssignments@2020-04-01-preview' = {\n  name: guid(subscription().id, aadPrincipalId, contributor)\n  properties: {\n    roleDefinitionId: roleDef.id\n    principalId: aadPrincipalId\n  }\n}\n\noutput storageName array = stg.outputs.containerProps\n"}}]);
//# sourceMappingURL=5115.js.map