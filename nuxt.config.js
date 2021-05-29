// https://nuxtjs.org/blog/creating-blog-with-nuxt-content
import getRoutes from "./utils/getRoutes";
import getSiteMeta from "./utils/getSiteMeta";
const meta = getSiteMeta();

export default {
    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',
    router: {
        // https://nuxtjs.org/docs/2.x/deployment/github-pages
        base: '/nuxt-content-md/',
    },
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        htmlAttrs: {
            lang: 'es-ES',
        },
        title: 'Mi sitio web personal creado con @nuxt/content.',
        meta: [
            ...meta,
            { charset: 'utf-8' },
            { name: 'HandheldFriendly', content: 'True' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { property: 'og:site_name', content: 'Jorge Santana' },
            {
                hid: 'description',
                name: 'description',
                content: 'Mi sitio web personal creado con @nuxt/content.',
            },
            { property: 'og:image:width', content: '740' },
            { property: 'og:image:height', content: '300' },
            { name: 'twitter:site', content: '@creacodigos' },
            { name: 'twitter:card', content: 'summary_large_image' },
        ],
        link: [
            { rel: 'icon', type: 'image/svg+xml', href: '/favicon.ico' },
            {
                hid: 'canonical',
                rel: 'canonical',
                href: process.env.BASE_URL,
            },
        ],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/bootstrap
        'bootstrap-vue/nuxt',
        '@nuxt/content',
        '@nuxtjs/sitemap',
        '@nuxtjs/pwa',
        //'@nuxt/image',
    ],
    // Build Configuration: https://go.nux+tjs.dev/config-build
    build: {},

    // SiteMap Configuration: https://redfern.dev/articles/adding-a-sitemap-using-nuxt-content/
    sitemap: {
        hostname: process.env.BASE_URL, // https://www.yoursite.com
        routes() {
            return getRoutes();
        },
    },
    /*
  image: {
    // Generate images to `/_nuxt/image/file.png`
    //staticFilename: '[publicPath]/images/[name]-[hash][ext]'
  },
*/

    content: {
        nestedProperties: ['author.name'],
        //liveEdit: false
    },

    // https://es.nuxtjs.org/examples/customize-nuxt-loading
    loading: {
        color: 'black',
        height: '2px',
        continuous: true,
        duration: 1000,
    },

    // https://pwa.nuxtjs.org/
    pwa: {
        meta: {
            title: 'My portfolio nuxt-content-md',
            author: 'Jorge Santana @creacodigos',
        },
        manifest: {
            name: 'Nuxt.js PWAs are so easy',
            short_name: 'Nuxt.js PWA',
            lang: 'es',
        },
    },
};
