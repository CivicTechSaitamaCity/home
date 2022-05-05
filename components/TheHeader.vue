<template>
  <header class="header">
    <div class="header__wrapper">
      <a href="/">
        <img class="header__logo" src="~assets/img/logo.png" alt="logo" />
      </a>
      <ul class="header__menu">
        <li><a href="/#news">NEWS</a></li>
        <li><a href="/#message">MESSAGE</a></li>
        <li><a href="/#event">EVENT</a></li>
        <li><a href="/#vision">VISION</a></li>
        <li><a href="/#project">PROJECT</a></li>
        <li><a href="/report">REPORT</a></li>
      </ul>
    </div>
  </header>
</template>
<script>
export default {
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
    ],
  },
}
</script>

<style lang="scss" scoped>
.header {
  &__wrapper {
    @media screen and (max-width: 600px) {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
  &__logo {
    width: 142px;
  }
  &__menu {
    display: flex;
    @media screen and (max-width: 600px) {
      display: inline-block;
      text-align: right;
      padding: 0;
      margin: 0;
    }
    li {
      padding: 0 16px;
      font-size: 15px;
      list-style: none;
    }
    a {
      text-decoration: none;
    }
  }
}
</style>
