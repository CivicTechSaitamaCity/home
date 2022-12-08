<template>
  <div class="example">
    <!-- component: only render Swiper on browser env -->
    <client-only>
      <swiper
        ref="carousel"
        class="swiper"
        :options="swiperOptions"
        @ready="onSwiperRedied"
        @clickSlide="onSwiperClickSlide"
        @slideChangeTransitionStart="onSwiperSlideChangeTransitionStart"
      >
        <swiper-slide v-for="item in items" :key="item.id">
          <img :src="item.img" alt="alt" />
        </swiper-slide>

        <div slot="pagination" class="swiper-pagination" />
      </swiper>
    </client-only>
  </div>
</template>

<script>
export default {
  name: 'SwiperNuxt',
  data() {
    return {
      items: [
        { img: '/images/mainImg.jpg' },
        { img: '/images/project/project_shindan.jpg' },
        { img: '/images/project/project_table.jpg' },
        { img: '/images/project/project_kyouzai.jpg' },
      ],
      swiperOptions: {
        speed: 2000,
        autoplay: {
          delay: 8000,
          disableOnInteraction: false,
        },
        loop: true,
        loopAdditionalSlides: 1,
        watchSlidesProgress: true,
        nextButton: true,
        prevButton: true,
        effect: 'fade',
      },
    }
  },
  methods: {
    onSwiperRedied(swiper) {
      console.log('Swiper redied!', swiper)
    },
    onSwiperSlideChangeTransitionStart() {
      console.log('SwiperSlideChangeTransitionStart!')
    },
    onSwiperClickSlide(index, reallyIndex) {
      console.log('Swiper click slide!', reallyIndex)
    },
  },
}
</script>

<style lang="scss" scoped>
.example {
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
    .swiper-pagination {
      > .swiper-pagination-bullet {
        background-color: red;
      }
    }
  }
}
</style>