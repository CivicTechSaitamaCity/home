<template>
  <div>
    <header id="header">
      <div id="headerWrap">
        <h1>
          <img src="images/logo.png" width="142" height="80" alt="logo" />
        </h1>
        <nav id="mainnav">
          <p id="menuWrap">
            <a id="menu"><span id="menuBtn"></span></a>
          </p>
          <div class="panel">
            <ul>
              <li><a href="#top">TOP</a></li>
              <li v-for="item in index.toc" :key="item.id">
                <a :href="'#' + item.id">{{ item.text }}</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>

    <div id="mainImg">
      <img src="images/mainImg.jpg" alt="" />
    </div>

    <article>
      <nuxt-content :document="index" />
    </article>
    <footer id="footer"></footer>
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
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap');


body {
  font: 14px/1.9 'Noto Sans JP', Arial, Verdana, 游ゴシック, YuGothic,
    'ヒラギノ角ゴ ProN W3', 'Hiragino Kaku Gothic ProN', メイリオ, Meiryo,
    sans-serif;
}

/* ヘッダー
------------------------------------------------------------*/
#header {
  text-align: center;
}

#mainnav a {
  color: #000;
}

#mainImg {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 528px;
}

#mainImg img {
  position: absolute;
  left: 50%;
  max-width: 1280px;
  width: 1280px;
  height: 528px;
  margin-left: -640px;
}
a#menu {
  display: none;
}

#mainnav li {
  display: inline-block;
  padding: 50px 25px;
  font-size: 15px;
}
section {
  clear: both;
  padding-top: 40px;
}

section h2 span {
  background: #fff;
}

.panel li a {
    text-decoration: none;
}
/**
 * Nuxt content
 */
.nuxt-content {
  width: 800px;
  margin: auto;

  h2 {
    // font-family: 'Pacifico', cursive;
    font-family: 'Shadows Into Light', cursive;
    width: 60%;
    margin: 20px auto 20px;
    font-size: 3rem;
    font-weight: normal;
    text-align: center;
    // background: url('images/borderBlack.png') repeat-x 0 50%;
    background-size: 1px 1px;
  }
  #event + ul {
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
}
</style>
