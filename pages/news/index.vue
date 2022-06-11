<template>
  <div>
    <article>
      <div id="news" class="nuxt-content">
        <h2>News</h2>
        <ul>
          <li v-for="(article, index) in news" :key="index">
            {{ article.date | date }}
            {{ article.title }}
            <a :href="article.link">
              <span v-if="article.link">link</span>
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
    const news = await $content('data', { deep: true })
      .sortBy('date', 'desc')
      .where({ date: { $gt: new Date(2020) } })
      .fetch()

    return {
      news,
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
