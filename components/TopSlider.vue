<template>
  <div class="embla" ref="emblaNode">
    <div class="embla__container">
      <div class="embla__slide" v-for="item in items" :key="item.id">
        <img :src="item.img" alt="alt" />
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
        { img: "/images/240907UDCkickoff.jpg" },
        { img: "/images/240302-park-opendata.jpg" },
        { img: "/images/event230115seniorIdeathon.jpg" },
        { img: "/images/project/project_shindan.jpg" },
        { img: "/images/project/project_table.jpg" },
        { img: "/images/project/project_kyouzai.jpg" },
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

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
