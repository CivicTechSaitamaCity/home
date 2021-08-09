<template>
<div>
  <article>
    <h1>{{ index.title }}</h1>
    <nuxt-content :document="index" />
  </article>
  <div>
    <nuxt-content :document="hello" />
  </div>
</div>

</template>

<script>
export default {
  async asyncData({ $content }) {
    const index = await $content('index').fetch()
    const hello = await $content('hello').fetch()

    return {
      index,
      hello,
    }
  },
}
</script>
