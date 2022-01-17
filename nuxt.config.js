export default {
    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',

    // Global page headers: https://go.nuxtjs.dev/config-head
    head() {
        const i18nHead = this.$nuxtI18nHead ? this.$nuxtI18nHead({ addSeoAttributes: true }) : { meta: [], link: [] }
        const description = this.$t ? this.$t('introduction') : 'Wordle Suggest allows you to find possible words for several versions of the Wordle game, when you are out of inspiration.'

        return {
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
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '~/assets/scss/fonts.scss',
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/eslint
        '@nuxtjs/eslint-module',
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
                name: 'Français',
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
