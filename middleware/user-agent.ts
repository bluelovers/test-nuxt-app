/**
 * demo middleware
 * https://zh.nuxtjs.org/guide/routing/#%E4%B8%AD%E9%97%B4%E4%BB%B6
 */

export default function (context) {
	// @ts-ignore
	context.userAgent = process.server ? context.req.headers['user-agent'] : navigator.userAgent
}
