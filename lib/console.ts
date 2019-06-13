/**
 * Created by user on 2019/6/14.
 */

import console, { Console2 } from 'debug-color2';

export const consoleDebug = new Console2(null, {
	label: true,
	time: true,
	inspectOptions: {
		depth: 5,
	}
});

export default console
