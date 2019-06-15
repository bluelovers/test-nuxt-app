
require = require("esm")(module/*, options*/);
require('ts-node').register();

module.exports = require('./core').default;
