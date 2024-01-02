<template>
  <article>
    <h1>Report</h1>
    <nuxt-link v-for="(article, index) in reports" :key="index" :to="article._path">
      <p>{{ article.title }}</p>
    </nuxt-link>
  </article>
</template>
<script setup>
const reports = await queryContent("/report").find();
// console.log(reports)
</script>
