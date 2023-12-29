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
      Autoplay({ delay: 6000 })
    ]);
    return { emblaNode };
  },
  data() {
    return {
      items: [
        { img: "/images/event230115seniorIdeathon.jpg" },
        { img: "/images/project/project_shindan.jpg" },
        { img: "/images/project/project_table.jpg" },
        { img: "/images/project/project_kyouzai.jpg" }
      ]
    };
  }
};
</script>

<style scoped>
.embla {
  overflow: hidden;
  width: 100%;
  max-width: 100%;
  background-color: #eee;
}

.embla__container {
  display: flex;
  align-items: flex-start;
}

.embla__slide {
  flex: 0 0 auto;
  min-width: 0;
  max-width: 100%;
  text-align: center;
  justify-content: center;
  height: 24vw;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>

