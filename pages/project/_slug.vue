<template>
  <article>
    <NuxtContent :document="post" />
  </article>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    // URIから変数を取得 /report/{_slug}
    const slug = params.slug
    return {
      // content/report/{_slug}.mdのマークダウンを取得
      post: await $content('project/' + slug).fetch(),
    }
  },
}
</script>
