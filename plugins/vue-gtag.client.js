// plugins/vue-gtag.client.js
import VueGtag from 'vue-gtag-next'

export default defineNuxtPlugin((nuxtApp) => {
  // Initialize vue-gtag-next
  nuxtApp.vueApp.use(VueGtag, {
    property: {
      id: 'G-QDNTQQJPTK',
    }
  })

  // Debug logging to help verify analytics during development
  if (process.client) {
    console.log('[vue-gtag] initialized (client)')

    nuxtApp.hook('page:finish', (context) => {
      // page:finish runs after navigation is complete
      console.log('[vue-gtag] page:finish', context?.route?.path || '')
    })
  }
})
