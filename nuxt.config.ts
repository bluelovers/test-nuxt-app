/* eslint-disable */

import NuxtConfiguration from '@nuxt/config'
import colors from 'vuetify/es5/util/colors'

console.info(`process.env`);
console.dir(process.env);

export default <NuxtConfiguration>{
	mode: 'universal',
	/*
	** Headers of the page
	*/
	head: {
		titleTemplate: '%s - ' + process.env.npm_package_name,
		title: process.env.npm_package_name || '',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			/*
			{
				rel: 'stylesheet',
				href:
					'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
			}
			 */
		],
	},
	/*
	** Customize the progress-bar color
	*/
	loading: { color: '#fff' },
	/*
	** Global CSS
	*/
	css: [],
	/*
	** Plugins to load before mounting the App
	*/
	plugins: [
		'~/plugins/font',
	],
	/*
	** Nuxt.js modules
	*/
	modules: [
		'@nuxtjs/vuetify',
		'@nuxtjs/markdownit',
		// Doc: https://axios.nuxtjs.org/usage
		'@nuxtjs/axios',
		'@nuxtjs/pwa',
		['@nuxtjs/dotenv', { /* module options */ }],
	],
	/*
	** Axios module configuration
	** See https://axios.nuxtjs.org/options
	*/
	axios: {},
	/*
	** vuetify module configuration
	** https://github.com/nuxt-community/vuetify-module
	*/
	vuetify: {
		theme: {
			primary: colors.blue.darken2,
			accent: colors.grey.darken3,
			secondary: colors.amber.darken3,
			info: colors.teal.lighten1,
			warning: colors.amber.base,
			error: colors.deepOrange.accent4,
			success: colors.green.accent3,
		},
		defaultAssets: {
			font: false,
			icons: false,
		},
	},
	/*
	** Build configuration
	*/
	build: {
		analyze: true,

		/*
		** You can extend webpack config here
		*/
		extend(config, ctx)
		{
			const { isClient, isDev, isServer, loaders } = ctx;

			console.info(`webpack config`, `context:`, ctx);
			console.dir(config, {
				depth: 1,
			});
		},
	},
	render: {
		resourceHints: false,
		http2: {
			push: true,
		},
	},
	watchers: {
		webpack: {
			aggregateTimeout: 5000,
		},
	},
	vue: {
		config: {
			prettify: false,
		},
	},
	/**
	 * [optional] markdownit options
	 * See https://github.com/markdown-it/markdown-it
	 */
	markdownit: {
		preset: 'default',
		html: true,
		xhtmlOut: true,
		linkify: true,
		breaks: true,
		use: [],
		injected: true,
	},
}
