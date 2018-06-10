// 外部モジュール

// NodeJs - CommonJS
// RequireJS - AMD

// tsc external_module.ts -m commonjs
// import User = require('./external_module_commonjs')
// console.log(User.name);

// tsc external_module.ts -m amd
import User = require('./external_module_umd')
console.log(User.name);