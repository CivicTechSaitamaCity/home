<template>
  <main>
    <h2>Report</h2>
    <ContentDoc />
    <nuxt-link to="/report">BACK</nuxt-link>
  </main>
</template>
<style lang="scss">
h2 {
  a {
    text-decoration: none;
  }
}

p {
  font-size: 1.5rem;
  line-height: 150%;
}

main {
  max-width: 1000px;
  margin: auto;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 16px auto;
}
</style>
