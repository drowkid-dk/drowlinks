export default ({
    target: 'static',
    router: { 
        base: '/<drowlinks>/'  } ,
    modules: ['@nuxtjs/tailwindcss', 'nuxt-icon', '@vueuse/nuxt'],
    build: {
        transpile: ["@headlessui/vue"],
    },
    colorMode: {
        classSuffix: '',
    },
})
