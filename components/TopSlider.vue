<template>

  <swiper :slidesPerView="1" :spaceBetween="30" :loop="true" :autoplay="{
  delay: 8000,
  disableOnInteraction: false,
}" effect="fade" :loopAdditionalSlides="1" :modules="modules">
    <swiper-slide v-for="item in items" :key="item.id">
      <img :src="item.img" alt="alt" />
    </swiper-slide>
  </swiper>
</template>
<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, EffectFade } from "swiper";
import "swiper/css";
import 'swiper/css/effect-fade';
const modules = [Autoplay, EffectFade];

const items = [
  { img: '/images/event230115seniorIdeathon.jpg' },
  { img: '/images/project/project_shindan.jpg' },
  { img: '/images/project/project_table.jpg' },
  { img: '/images/project/project_kyouzai.jpg' },
]
</script>

<style lang="scss" scoped>
.swiper {
  height: 400px;
  width: 100%;
  max-width: 100%;

  .swiper-slide {
    &:not(.swiper-slide-visible) {
      .slide {
        pointer-events: none;
        opacity: 0.3;
      }
    }

    text-align: center;
    font-size: 38px;
    font-weight: 700;
    background-color: #eee;
    display: flex;
    justify-content: center;
  }
}
</style>
