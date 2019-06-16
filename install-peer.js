/**
 * Created by user on 2019/6/16.
 */

const spawnSync = require('child_process').spawnSync;

function tryInstall(list)
{
	console.log(process.cwd());

	try
	{
		spawnSync('yarn', [], {
			stdio: 'inherit',
		})
	}
	catch (e)
	{
		console.error(e.toString());
	}

	try
	{
		spawnSync('yarn', [
			'add',
			...list,
		], {
			stdio: 'inherit',
		})
	}
	catch (e)
	{
		console.error(e.toString());
	}

	try
	{
		spawnSync('yarn', [
			'global',
			'add',
			...list,
		], {
			stdio: 'inherit',
		})
	}
	catch (e)
	{
		console.error(e.toString());
	}

	try
	{
		spawnSync('npm', [
			'install',
			'-g',
			...list,
		], {
			stdio: 'inherit',
		})
	}
	catch (e)
	{
		console.error(e.toString());
	}

	list.forEach((name) => {

		let p;

		try
		{
			p = require.resolve('name')
		}
		catch (e)
		{

		}

		console.log('check', name, '=', p);
	})
}

tryInstall([
	'ts-node',
	'typescript@next',
	'esm',
	'ts-loader',
	'process',
]);
