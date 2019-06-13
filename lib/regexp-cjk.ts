/**
 * Created by user on 2019/6/14.
 */

import zhRegExp, { IOptions } from 'regexp-cjk';
import createZhRegExpPlugin, { IZhRegExpPluginOptions } from 'regexp-cjk-plugin-extra';

let options: IZhRegExpPluginOptions = {
	autoDeburr: true,
};

export default zhRegExp
