import * as tsNamespace from 'ts-namespaces';
import * as tsModule from 'ts-modules';

let namespaceService = new tsNamespace.Core.Service();
let moduleService    = new tsModule.AnotherCore.Service();

console.log(`The test value of namespaceService is ${namespaceService.test}`);
console.log(`The test value of moduleService is ${moduleService.test}`);
