<template>
  <header class="header">
    <div class="header__wrapper">
      <a href="/">
        <img class="header__logo" src="~assets/img/logo.png" alt="logo" />
      </a>
      <button
        class="header__toggle"
        :aria-expanded="isMenuOpen"
        aria-controls="site-menu"
        aria-label="メニューを開閉"
        @click="toggleMenu"
      >
        <span class="header__toggle-line" :class="{ 'is-open': isMenuOpen }"></span>
        <span class="header__toggle-line" :class="{ 'is-open': isMenuOpen }"></span>
        <span class="header__toggle-line" :class="{ 'is-open': isMenuOpen }"></span>
      </button>
      <ul id="site-menu" class="header__menu" :class="{ 'is-open': isMenuOpen }">
        <li><a href="/#news" @click="closeMenu">NEWS</a></li>
        <li><a href="/#project" @click="closeMenu">PROJECT</a></li>
        <li><a href="/#event" @click="closeMenu">EVENT</a></li>
        <li><a href="/#message" @click="closeMenu">MESSAGE</a></li>
        <li><a href="/#vision" @click="closeMenu">VISION</a></li>
        <li><a href="/report" @click="closeMenu">REPORT</a></li>
      </ul>
    </div>
  </header>
</template>
<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
    closeMenu() {
      this.isMenuOpen = false
    },
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
    ],
  },
}
</script>

<style lang="scss" scoped>
.header {
  position: relative;

  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 600px) {
      position: relative;
    }
  }

  &__logo {
    width: 142px;
  }

  &__toggle {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    padding: 8px;

    @media screen and (max-width: 600px) {
      display: inline-flex;
      flex-direction: column;
      gap: 5px;
    }
  }

  &__toggle-line {
    width: 24px;
    height: 2px;
    background: #111;
    transition: transform 0.25s ease, opacity 0.25s ease;

    &:nth-child(1).is-open {
      transform: translateY(7px) rotate(45deg);
    }

    &:nth-child(2).is-open {
      opacity: 0;
    }

    &:nth-child(3).is-open {
      transform: translateY(-7px) rotate(-45deg);
    }
  }

  &__menu {
    display: flex;

    @media screen and (max-width: 600px) {
      display: none;
      position: absolute;
      top: calc(100% + 8px);
      right: 0;
      width: min(260px, 90vw);
      text-align: left;
      padding: 0;
      margin: 0;
      background: #fff;
      border: 1px solid #ddd;
      border-radius: 8px;
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);

      &.is-open {
        display: block;
      }
    }

    li {
      padding: 0 16px;
      font-size: 15px;
      list-style: none;

      @media screen and (max-width: 600px) {
        padding: 12px 16px;
        border-bottom: 1px solid #f0f0f0;

        &:last-child {
          border-bottom: 0;
        }
      }
    }

    a {
      text-decoration: none;
    }
  }
}
</style>
