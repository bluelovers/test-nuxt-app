//import 'esm';
//import 'ts-node/register';
//require('esm')(module);

//require('fs-extra').readJSONSync(require('path').join(__dirname, '..', '..', 'tsconfig.ts-node.json'));

require('ts-node').register({
	project: require('path').join(__dirname, '..', '..', 'tsconfig.ts-node.json'),
});

