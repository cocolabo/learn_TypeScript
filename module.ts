// 内部モジュール

/// <reference path="./module_user.ts" />

// tsc module.ts --out all.js
console.log(UserModule.name);
// console.log(UserModule.AddressModule.zip);

import addr = UserModule.AddressModule;
console.log(addr.zip);