export default {
    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',

    // Global page headers: https://go.nuxtjs.dev/config-head
    head() {
        const i18nHead = this.$nuxtI18nHead ? this.$nuxtI18nHead({ addSeoAttributes: true }) : { meta: [], link: [] }
        const description = this.$t ? this.$t('introduction') : 'Wordle Suggest allows you to find possible words for several versions of the Wordle game, when you are out of inspiration.'

        const head = {
            htmlAttrs: i18nHead.htmlAttrs,
            title: 'Wordle Suggest',
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { hid: 'description', name: 'description', content: description },
                { name: 'format-detection', content: 'telephone=no' },
                ...i18nHead.meta,
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
                ...i18nHead.link,
            ],
        }

        if (process.env.NODE_ENV === 'production') {
            head.script = [
                {
                    src: '//gc.zgo.at/count.js',
                    async: true,
                    'data-goatcounter': 'https://wordle-suggest.goatcounter.com/count',
                },
            ]
        }

        return head
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '~/assets/scss/fonts.scss',
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        '~/plugins/possible-words-content.js',
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/eslint
        '@nuxtjs/eslint-module',
        // https://github.com/nuxt-community/svg-module
        '@nuxtjs/svg',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/pwa
        '@nuxtjs/pwa',
        '@nuxtjs/i18n',
    ],

    i18n: {
        locales: [
            {
                code: 'en',
                iso: 'en-US',
                name: 'English',
                file: 'en.json',
            },
            {
                code: 'fr',
                iso: 'fr-FR',
                name: 'Fran??ais',
                file: 'fr.json',
            },
        ],
        defaultLocale: 'en',
        baseUrl: 'https://wordle-suggest.sebjean.com',
        langDir: '~/i18n',
        vueI18n: {
            fallbackLocale: 'en',
        },
    },

    // PWA module configuration: https://go.nuxtjs.dev/pwa
    pwa: {
        manifest: {
            lang: 'en',
        },
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
    },
}
