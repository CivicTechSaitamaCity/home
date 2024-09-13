<template>
  <div>
    <h2>開催レポート</h2>
    <article>
      <nuxt-link
        v-for="(article, index) in reports"
        :key="index"
        :to="article._path"
      >
        <p>{{ article.title }}</p>
      </nuxt-link>
    </article>
  </div>
</template>
<script setup>
const reports = await queryContent("/data")
  .sort({ reportDate: -1 })
  .where({ reportDate: { $gt: new Date(2020) } })
  .find();
// console.log(reports)
</script>
<style lang="scss" scoped>
h2 {
  font-family: "Noto Sans JP", cursive;
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
article {
  max-width: 1000px;
  margin: auto;
  // font-size: clamp(18px, 1vw, 24px);
}
</style>
