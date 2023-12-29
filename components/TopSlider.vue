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

export default {
  setup() {
    const [emblaNode] = emblaCarouselVue();
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
}

.embla__container {
  display: flex;
}

.embla__slide {
  flex: 0 0 100%;
  min-width: 0;
}
</style>

