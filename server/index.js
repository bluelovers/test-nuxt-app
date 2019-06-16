console.log(`require server/index.js`, __filename);

console.log(`esm register`);
require = require("esm")(module/*, options*/);
//console.log(`ts-node register`);
//require('ts-node/register/transpile-only');
console.log(`require server/core`);
module.exports = require('./core.js').default;
