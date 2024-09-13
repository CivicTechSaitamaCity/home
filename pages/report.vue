<template>
  <div>
    <h2>開催レポート</h2>
    <article>
      <nuxt-link
        v-for="(article, index) in reports"
        :key="index"
        :to="article._path"
      >
        <div class="report">
          <div class="report-date">{{ formatDate(article.reportDate) }}</div>
          <div class="report-title">{{ getH1Text(article) }}</div>
        </div>
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

/**
 * 記事から h1 要素のテキストを取得する関数
 * @param {Object} article - コンテンツ記事オブジェクト
 * @returns {String} h1 のテキストまたはフォールバックとして article.title
 */

const getH1Text = (article) => {
  const h1 = article.body.children.find((child) => child.tag === "h1");
  return h1 ? h1.children[0].value : article.title;
};
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
.report {
  display: flex;
  padding: 10px 0;
  border-bottom: 1px solid #ccc;
  &-date {
    font-size: 1rem;
    padding-right: 16px;
  }
  &-title {
    font-size: 1.2rem;
  }
}
</style>
