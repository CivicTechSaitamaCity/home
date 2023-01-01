<template>
  <div>
    <article>
      <div id="news" class="nuxt-content">
        <h2>News</h2>
        <ul>
          <li v-for="(article, index) in news" :key="index">
            {{ formatDate(article.date) }}
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

<script setup>
const news = await queryContent("/data")
  .sort({ eventDate: -1 })
  .sort({ date: -1 })
  .where({ date: { $gt: new Date(2020) } })
  .find();
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
</style>
