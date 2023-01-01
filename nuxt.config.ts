export default defineNuxtConfig({
    modules: [
        '@nuxt/content',
    ],
    content: {
        // https://content.nuxtjs.org/api/configuration
    },
    app: {
        head: {
            title: 'シビックテックさいたま',
            htmlAttrs: {
                lang: 'ja',
            },
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { hid: 'description', name: 'description', content: '' },
                { name: 'format-detection', content: 'telephone=no' },
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }, {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100&display=swap',
                },
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap',
                },
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css2?family=Righteous&display=swap',
                },
            ],
        },
    }


})
