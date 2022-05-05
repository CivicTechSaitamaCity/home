<template>
  <div>
    <div id="mainImg">
      <img src="images/mainImg.jpg" alt="" />
      <!-- <div id="mainImg-2">
      <img src="images/civictech_A4_fly_fix_web_page-0001.jpg" alt="" />
      <img src="images/civictech_A4_fly_fix_web_page-0002.jpg" alt="" />
      -->
    </div>
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
          <li><a href="/news">more...</a></li>
        </ul>
      </div>
    </article>
    <article>
      <nuxt-content :document="message" />
    </article>
    <article>
      <div class="nuxt-content">
        <h2 id="event">Event</h2>
        <ul>
          <li v-for="(article, index) in events" :key="index">
            <a :href="article.link">
              <img :src="article.thumb" alt="" />
            </a>
          </li>
          <li><a href="/events">more...</a></li>
        </ul>
      </div>
    </article>
    <article>
      <nuxt-content :document="index" />
    </article>
    <article>
      <div class="nuxt-content">
        <h2>Contact</h2>
        <ul class="footer__list">
          <li>
            シビックテックさいたま世話人：太田一穂、クワハラシズカ、藤田史織
          </li>
          <li>email：civictech.saitama@gmail.com</li>
          <li>
            <a href="https://www.facebook.com/CivicTechSaitamaCity">
              <img src="images/iconFb.png" alt=""
            /></a>
          </li>
        </ul>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const index = await $content('index').fetch()
    const message = await $content('message').fetch()
    const news = await $content('data', { deep: true })
      .limit(10)
      .sortBy('date', 'desc')
      .where({ date: { $gt: new Date(2020) } })
      .fetch()
    const events = await $content('data', { deep: true })
      .limit(9)
      .sortBy('eventDate', 'desc')
      .where({ eventDate: { $gt: new Date(2020) } })
      .fetch()
    // console.log(news, events)
    // console.log(index.toc)
    return {
      index,
      events,
      message,
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
/* ヘッダー
------------------------------------------------------------*/

#mainnav a {
  color: #000;
}

#mainImg {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 528px;

  img {
    position: absolute;
    left: 50%;
    max-width: 1280px;
    // width: 100%;

    width: 1280px;
    height: 528px;
    margin-left: -640px;
  }
}

#mainImg-2 {
  display: flex;
  img {
    width: 50%;
  }
}

section {
  clear: both;
  padding-top: 40px;
  h2 span {
    background: #fff;
  }
}

.panel li a {
  text-decoration: none;
}
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
  #contact + ul {
    list-style-type: none;
    img {
      width: 24px;
    }
  }
  .footer__list li {
    list-style-type: none;
    img {
      width: 24px;
    }
  }
}
</style>
