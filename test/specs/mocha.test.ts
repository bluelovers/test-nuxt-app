/**
 * Created by User on 2019/6/22.
 */

// @ts-ignore
/// <reference types="mocha" />
// @ts-ignore
/// <reference types="benchmark" />
// @ts-ignore
/// <reference types="chai" />
// @ts-ignore
/// <reference types="node" />

import { chai, relative, expect, path, assert, util, mochaAsync, SymbolLogOutput } from '../_local-dev';

import { resolve } from 'path'
import { Nuxt, Builder } from 'nuxt'
import { JSDOM } from 'jsdom'

// @ts-ignore
describe(relative(__filename), () =>
{
	let currentTest: Mocha.Test;
	let nuxt: Nuxt = null;

	/**
	 * @FIXME looks like didn't load plugin
	 */
	before(async function ()
	{
		this.timeout(0);

		const config = {
			//...require(resolve(__dirname, '..', '..', 'nuxt.config')),
			dev: false,
			rootDir: resolve(__dirname, '..', '..')
		};

		nuxt = new Nuxt(config);
		await new Builder(nuxt).build()
		await nuxt.server.listen(4000, 'localhost')
	});

	beforeEach(function ()
	{
		currentTest = this.currentTest;

		delete currentTest[SymbolLogOutput];

		//console.log('it:before', currentTest.title);
		//console.log('it:before', currentTest.fullTitle());
	});

	afterEach(function ()
	{
		let out = currentTest[SymbolLogOutput];
		let t = typeof out;

		if (t === 'string')
		{
			console.log(`----------`);
			console.log(out);
			console.log(`----------`);
		}
		else if (t === 'function')
		{
			out(currentTest)
		}
		else if (out != null)
		{
			console.dir(out);
		}

	});

	// @ts-ignore
	describe(`suite`, () =>
	{
		// @ts-ignore
		it(`label`, async function ()
		{
			//console.log('it:inner', currentTest.title);
			//console.log('it:inner', currentTest.fullTitle());

			console.log(777);

			const context = {}
			const ret = await nuxt.server.renderRoute('/', context);

			let actual = ret.html;
			let expected;

			console.dir(ret);

			currentTest[SymbolLogOutput] = actual;

			//expect(ret).to.be.ok;
			//expect(actual).to.be.deep.equal(expected);
			//assert.isOk(actual.value, util.inspect(actual));

			nuxt.close();
		});
	});

});
