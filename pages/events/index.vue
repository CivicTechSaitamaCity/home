<template>
  <div>
    <article>
      <div class="nuxt-content">
        <h2 id="event">Event</h2>
        <ul>
          <li v-for="(article, index) in events" :key="index">
            <a :href="article.link">
              <img :src="article.thumb" alt="" />
            </a>
          </li>
        </ul>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const events = await $content('data', { deep: true })
      .sortBy('eventDate', 'desc')
      .where({ eventDate: { $gt: new Date(2020) } })
      .fetch()
    // console.log(news, events)
    // console.log(index.toc)
    return {
      events,
    }
  },
  head: {
    link: [
      {
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
</script>
<style lang="scss" scoped>
/* ヘッダー
------------------------------------------------------------*/

/**
 * Nuxt content
 */
::v-deep .nuxt-content {
  // width: 100%;
  max-width: 1000px;
  margin: auto;
  font-size: clamp(18px, 1vw, 24px);

  h2 {
    font-family: 'Noto Sans JP', cursive;
    width: 60%;
    margin: 20px auto 20px;
    font-size: 3rem;
    font-weight: normal;
    text-align: center;
    background-size: 1px 1px;
  }
  #event + ul {
    padding: 0;
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    li {
      width: calc(100% / 3);
      margin: 0;
      padding: 3px 6px;
      box-sizing: border-box;
      a img {
        width: 100%;
      }
    }
  }
}
</style>
