"use strict";
exports.__esModule = true;
var colors_1 = require("vuetify/es5/util/colors");
var console_1 = require("./lib/console");
console_1.consoleDebug.info("process.env");
console_1.consoleDebug.dir(process.env);
exports["default"] = {
    mode: 'universal',
    modern: 'client',
    devtools: true,
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
        ]
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
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        '@nuxtjs/pwa',
        ['@nuxtjs/dotenv', { /* module options */}],
        [
            '@nuxtjs/component-cache', {
                max: 10000,
                maxAge: 1000 * 60 * 60
            },
        ],
        ['@bazzite/nuxt-netlify', {}],
        '@nuxtjs/sitemap',
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
            primary: colors_1["default"].blue.darken2,
            accent: colors_1["default"].grey.darken3,
            secondary: colors_1["default"].amber.darken3,
            info: colors_1["default"].teal.lighten1,
            warning: colors_1["default"].amber.base,
            error: colors_1["default"].deepOrange.accent4,
            success: colors_1["default"].green.accent3
        },
        defaultAssets: {
            font: false,
            icons: false
        }
    },
    /*
    ** Build configuration
    */
    build: {
        parallel: true,
        extractCSS: true,
        /*
        ** You can extend webpack config here
        */
        extend: function (config, ctx) {
            var isClient = ctx.isClient, isDev = ctx.isDev, isServer = ctx.isServer, loaders = ctx.loaders;
            console_1.consoleDebug.info("webpack config", "context:", ctx);
            console_1.consoleDebug.dir(config, {
                depth: 1
            });
        }
    },
    render: {
        resourceHints: false,
        http2: {
            push: true
        }
    },
    watchers: {
        webpack: {
            aggregateTimeout: 5000
        }
    }
};
