console.log(`require express`);
import express from 'express'
//console.log(`require consola'`);
//import consola from 'consola'
console.log(`require nuxt'`);
import { Nuxt, Builder } from 'nuxt'

console.log(`create express...`);

const app = express();

console.log(`load nuxt.config...`);

// Import and Set Nuxt.js options
import config from '../nuxt.config'
//import { consoleDebug } from '../lib/console';

console.log(`check NODE_ENV...`);

//@ts-ignoreq
config.dev = !(process.env.NODE_ENV === 'production')

console.dir(config);

export async function start()
{
	console.log(`create Nuxt...`);

	// Init Nuxt.js
	const nuxt = new Nuxt(config)

	const { host, port } = nuxt.options.server

	// Build only in dev mode
	//@ts-ignoreq
	if (config.dev)
	{
		console.log(`Build in dev mode...`);

		const builder = new Builder(nuxt)
		await builder.build()
	}
	else
	{
		console.log(`nuxt.ready...`);
		await nuxt.ready()
	}

	console.log(`setup render...`);

	// Give nuxt middleware to express
	app.use(nuxt.render)

	if (1 || !(process.env.IS_ZEIT_NOW || process.env.IS_ZEIT_NOW_BUILD))
	{
		// Listen the server
		app.listen(port, host)

		console.log(`Server listening on http://${host}:${port}`)
	}

	/*
	consola.ready({
		message: `Server listening on http://${host}:${port}`,
		badge: true,
	})
	 */

	console.log(`return app...`);

	return app
}

export default start()
