export default defineNuxtConfig({
    sourcemap: {
            client: false,
            server: false,
    },

  vite: {
      build: {
          modulePreload: {
              polyfill: false,
          },
      },
  },

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
                  href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100..900&display=swap',
              },
              {
                  rel: 'stylesheet',
                  href: 'https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap',
              },
          ],
      },
  },

  compatibilityDate: '2024-07-18',

  hooks: {
    async 'build:done'() {
      if (process.env.npm_lifecycle_event?.includes('generate')) {
        const { generateSitemap } = await import('./utils/sitemap');
        const { join } = await import('path');
        const { promises: fs } = await import('fs');

        // Read domain from CNAME file
        let baseUrl = process.env.SITE_URL || 'https://otkzh.github.io';
        try {
          const cnamePath = join(process.cwd(), 'public', 'CNAME');
          const cnameContent = await fs.readFile(cnamePath, 'utf-8');
          const domain = cnameContent.trim();
          if (domain) {
            baseUrl = `https://${domain}`;
          }
        } catch (error) {
          console.warn('Could not read CNAME file, using default URL');
        }

        const outputPath = join(process.cwd(), 'public', 'sitemap.xml');
        await generateSitemap(baseUrl, outputPath);
      }
    }
  }
})
