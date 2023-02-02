<template>
  <div class="container">
    <div
      class="wrap-updates"
      :class="`wrap-updates--${theme}`">
      <div class="updates__headline">
        <h2 class="title">
          Updates
        </h2>
      </div>

      <div class="updates__grid">
        <Swiper
          :slidesPerView="1.2"
          :spaceBetween="16"
          :breakpoints="{
            '576': {
              slidesPerView: 2.5,
              spaceBetween: 24,
            },
            '992': {
              slidesPerView: 4,
              spaceBetween: 24,
            }
          }">
          <SwiperSlide
            v-for="item in data"
            :key="item.id">
            <UpdatesCard
              :theme="theme"
              :name="item.title.rendered"
              :custom-name="item.acf.headline"
              :link="item.slug"
              :image="getProductDataImg(item, 'small')"
              :description="item.excerpt.rendered || item.acf.intro"/>
          </SwiperSlide>

          <SwiperSlide>
            <UpdatesCard
              v-for="item in moreData"
              :key="item.id"
              :small="true"
              :theme="theme"
              :name="item.title.rendered"
              :custom-name="item.acf.headline"
              :link="item.slug"
              :description="item.excerpt.rendered || item.acf.intro"/>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </div>
</template>

<script>
// import Swiper JS
import { Swiper, SwiperSlide } from "swiper/vue";

// import Swiper styles
import 'swiper/css';

import mixins from '@/assets/js/mixins';

export default {
  name: 'updatesBlock',
  mixins: [mixins],
  props: {
    theme: {
      type: String,
      default: 'light',
    },
    data: {
      type: Array,
      default: () => []
    },
    moreData: {
      type: Array,
      default: () => []
    },
  },
  components: {
    Swiper,
    SwiperSlide
  }
}
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/components/updates";
</style>
