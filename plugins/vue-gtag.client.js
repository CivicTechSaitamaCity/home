// plugins/vue-gtag.client.js
import VueGtag from 'vue-gtag-next'

export default defineNuxtPlugin((nuxtApp) => {
  // Initialize vue-gtag-next
  nuxtApp.vueApp.use(VueGtag, {
    property: {
      id: 'G-QDNTQQJPTK',
    }
  })

  // Client-only hook: track navigation finished (no debug logging)
  if (process.client) {
    nuxtApp.hook('page:finish', (context) => {
      // page:finish runs after navigation is complete
      // vue-gtag will send events internally; keep hook for future non-verbose handling
    })
  }
})
