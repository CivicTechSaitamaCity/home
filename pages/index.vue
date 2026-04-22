<template>
  <div>
    <TopSlider />
    <article>
      <div class="nuxt-content">
        <h2 id="news">News</h2>
        <ul>
          <li v-for="(article, index) in news" :key="index">
            <div class="news-box">
              <div>
                <span class="news-date">{{ formatDate(article.date) }}</span>
              </div>
              <div>
                <div v-if="article.eventDate" class="event-date">
                  <span class="event-date-text">開催日</span>
                  {{ formatDate(article.eventDate) }}
                </div>
                <a class="news-link" :href="article.link">
                  <span>{{ article.title }}</span>
                </a>
                <nuxt-link :to="article.path" class="news-link">
                  <span v-if="article.reportDate" class="news-report"
                    >レポート</span
                  >
                </nuxt-link>
              </div>
            </div>
          </li>
        </ul>
        <span>
          <a href="/news">more...</a>
        </span>
      </div>
    </article>

    <article>
      <div id="project" class="nuxt-content">
        <ContentRenderer v-if="projectsDoc" :value="projectsDoc" />
      </div>
    </article>

    <article>
      <div class="nuxt-content">
        <h2 id="event">Event</h2>
        <ul>
          <li
            v-for="(event, index) in events"
            :key="index"
            :class="{ 'is-hidden': !event.thumb }"
          >
            <a :href="event.link">
              <img :src="event.thumb" alt />
            </a>
          </li>
        </ul>
        <span>
          <a href="/events">more...</a>
        </span>
      </div>
    </article>

    <article>
      <div id="message" class="nuxt-content">
        <ContentRenderer v-if="messageDoc" :value="messageDoc" />
      </div>
    </article>

    <article>
      <div id="vision" class="nuxt-content">
        <ContentRenderer v-if="visionDoc" :value="visionDoc" />
      </div>
    </article>

    <article>
      <div class="nuxt-content">
        <h2>Contact</h2>
        <ul class="footer__list">
          <li>
            シビックテックさいたま世話人：太田一穂、クワハラシズカ、藤田史織、古川尚史、冨田かおり
          </li>
          <li>email：civictech.saitama@gmail.com</li>
          <li>
            <a href="https://www.facebook.com/CivicTechSaitamaCity">
              <img src="/images/iconFb.png" alt />
            </a>
          </li>
        </ul>
      </div>
    </article>
  </div>
</template>

<script setup>
const news = await queryCollection("content")
  .where("path", "LIKE", "/data/%")
  .where("date", ">", "2020-01-01")
  .order("eventDate", "DESC")
  .order("date", "DESC")
  .limit(8)
  .all();

const events = await queryCollection("content")
  .where("path", "LIKE", "/data/%")
  .where("eventDate", ">", "2020-01-01")
  .order("eventDate", "DESC")
  .limit(8)
  .all();

const projectsDoc = await queryCollection("content").path("/projects").first();
const messageDoc = await queryCollection("content").path("/message").first();
const visionDoc = await queryCollection("content").path("/vision").first();
</script>

<style lang="scss" scoped>
/* ヘッダー */

#mainnav a {
  color: #000;
}

#mainImg {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 400px;

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
:deep(.nuxt-content) {
  // width: 100%;
  max-width: 1000px;
  margin: auto;
  font-family: "Noto Sans JP", cursive;
  font-size: clamp(18px, 1vw, 24px);

  h2 {
    font-family: cursive;
    width: 60%;
    margin: 20px auto 20px;
    font-size: 3rem;
    font-weight: normal;
    text-align: center;
    background-size: 1px 1px;

    a {
      text-decoration: none;
    }
  }

  /**
   * News
   */
  #news + ul {
    list-style-type: none;
    padding: 0 8px;

    .news-box {
      display: flex;
    }
    .news-date {
      margin-right: 8px;
      font-weight: bold;
      font-size: 16px;
    }

    .event-date {
      font-size: 14px;
      display: inline-block;
      margin-right: 4px;

      &-text {
        color: #000;
        background-color: white;
        border: 1px solid #000;
        border-radius: 4px;
        padding: 2px;
      }
    }

    .news-link {
      text-decoration: none;
    }

    .news-report {
      font-size: 16px;
      color: white;
      background-color: rgb(83, 139, 0);
      border: 1px solid white;
      border-radius: 4px;
      padding: 2px;
    }
  }

  #event + ul,
  #project + ul {
    padding: 0;
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;

    li {
      width: calc(100% / 4);
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      &:hover {
        opacity: 0.5;
      }
      a img {
        width: 100%;
      }
    }
  }

  @media screen and (max-width: 800px) {
    #event + ul,
    #project + ul {
      li {
        width: calc(100% / 2);
      }
    }
  }
  .is-hidden {
    display: none;
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
