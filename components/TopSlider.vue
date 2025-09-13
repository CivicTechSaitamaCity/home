<template>
  <div class="embla" ref="emblaNode">
    <div class="embla__container">
      <div class="embla__slide" v-for="item in items" :key="item.id">
        <a v-if="item.link" :href="item.link" target="_blank">
          <img :src="item.img" alt="alt" />
        </a>
        <img v-else :src="item.img" alt="alt" />
      </div>
    </div>
  </div>
</template>

<script>
import emblaCarouselVue from "embla-carousel-vue";
import Autoplay from "embla-carousel-autoplay";

export default {
  setup() {
    const [emblaNode] = emblaCarouselVue({ loop: true }, [
      Autoplay({ delay: 6000 }),
    ]);
    return { emblaNode };
  },
  data() {
    return {
      items: [
      {
        link: "https://fb.me/e/76ZcU2xZe",
        img: "/images/251002-small-digital-consult.png",
      },
        {
          link: "https://fb.me/e/9bmIe3dug",
          img: "/images/250915-omiya-mokumoku.png",
        },
        {
          link: "https://fb.me/e/1N6RJRiRds",
          img: "/images/250905-small-digital-consult.png",        },
        {
          link: "https://wikiyono.peatix.com/",
          img: " /images/250524-wikipedia-town.png",
        },
        {
          link: "https://civictechsaitama202503.peatix.com/",
          img: "/images/250309-plteau-unity-workshop.png",
        },
        {
          img: "/images/241005-saitama-plateau.jpg",
          link: "https://civictechsaitama1005.peatix.com/",
        },
        {
          img: "/images/240907UDCkickoff.jpg",
          link: "https://civictechsaitama0907.peatix.com/view",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.embla {
  overflow: hidden;
  width: 100%;
  max-width: 100%;
  background-color: #eee;

  &__container {
    display: flex;
    align-items: flex-start;
  }

  &__slide {
    flex: 0 0 auto;
    min-width: 0;
    max-width: 100%;
    text-align: center;
    justify-content: center;
    height: 24vw;
    max-height: 400px;

    // マウスオン時透過率を変更
    &:hover {
      opacity: 0.8;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
