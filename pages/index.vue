<template>
  <div>
    <div id="mainImg-2">
      <img src="images/civictech_A4_fly_fix_web_page-0001.jpg" alt="" />
      <img src="images/civictech_A4_fly_fix_web_page-0002.jpg" alt="" />
    </div>
    <article>
      <nuxt-content :document="index" />
    </article>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const index = await $content('index').fetch()
    // console.log(index.toc)
    return {
      index,
    }
  },
  head: {
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100&display=swap',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Righteous&display=swap',
      },
    ],
  },
}
</script>
<style lang="scss" scoped>
body {
  font-size: 1em;
  font-family: 'Noto Sans JP';
}

/* ヘッダー
------------------------------------------------------------*/

#mainnav a {
  color: #000;
}

#mainImg {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 528px;

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
::v-deep .nuxt-content {
  width: 100%;
  margin: auto;

  h2 {
    font-family: 'Noto Sans JP', cursive;
    width: 60%;
    margin: 20px auto 20px;
    font-size: 3rem;
    font-weight: normal;
    text-align: center;
    background-size: 1px 1px;
  }
  #event + ul {
    padding: 0;
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    li {
      width: (100% / 3);
      margin: 0;
      padding: 3px 6px;
      box-sizing: border-box;
      a img {
        width: 100%;
      }
    }
  }
  #contact + ul {
    list-style-type: none;
    img {
      width: 24px;
    }
  }
}
</style>
