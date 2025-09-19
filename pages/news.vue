<template>
  <div>
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
                <NuxtLink :to="article._path" class="news-link">
                  <span v-if="article.reportDate" class="news-report"
                    >レポート</span
                  >
                </NuxtLink>
              </div>
            </div>
          </li>
        </ul>
        <span>
          <a href="/news">more...</a>
        </span>
      </div>
    </article>
  </div>
</template>

<script setup>
const { data: news } = await useAsyncData('news-list', () =>
  queryContent('/data')
    .sort({ eventDate: -1 })
    .sort({ date: -1 })
    .where({ date: { $gt: new Date(2020) } })
    .find()
);
</script>

<style lang="scss" scoped>
:deep(.nuxt-content) {
  // width: 100%;
  max-width: 1000px;
  margin: auto;
  font-size: clamp(18px, 1vw, 24px);

  h2 {
    font-family: "Noto Sans JP", cursive;
    width: 60%;
    margin: 20px auto 20px;
    font-size: 3rem;
    font-weight: normal;
    text-align: center;
    background-size: 1px 1px;
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
</style>
