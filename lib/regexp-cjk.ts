/**
 * Created by user on 2019/6/14.
 */

import _zhRegExp, { IOptions } from 'regexp-cjk';
import createZhRegExpPlugin from 'regexp-cjk-plugin-extra';
import createZhRegExpCorePlugin from 'regexp-cjk-plugin-escape-unicode-property';

export const zhRegExp = _zhRegExp.use({
	flags: 'u',
	on: [
		createZhRegExpPlugin({
			autoVoice: true,
			autoLocale: true,
			autoFullHaif: true,
			autoDeburr: true,
		}),
	],
	onCore: [
		createZhRegExpCorePlugin({
			escapeAuto: true,
		}),
	],
});

export default zhRegExp
