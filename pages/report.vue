<template>
  <div>
    <h2>Report</h2>
    <article>
      <nuxt-link
        v-for="(article, index) in reports"
        :key="index"
        :to="article._path"
      >
        <div class="report">
          <div class="report-date">{{ date(article._path.slice(-8)) }}</div>
          <div class="report-title">{{ article.title }}</div>
        </div>
      </nuxt-link>
    </article>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";

const reports = ref([]);

onMounted(async () => {
  const fetchedReports = await queryContent("/report").find();
  reports.value = fetchedReports.sort((a, b) => b._path.localeCompare(a._path));
});

// console.log(reports)

// 年月日の8桁の数字から日付を生成
const date = (date) => {
  const year = date.slice(0, 4);
  const month = date.slice(4, 6);
  const day = date.slice(6, 8);
  return `${year}/${month}/${day}`;
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
    font-size: 1.4rem;
  }
}
</style>
