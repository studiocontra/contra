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
            v-for="update in updates"
            :key="update.id">
            <UpdatesCard
              v-if="update.layout[1]"
              :theme="theme"
              :name="update.title"
              :description="update.layout[1].intro[0].children[0].text"
              :link="update.slug" 
              :image="update.thumbnail.url"
              :en="en"
            />
            <UpdatesCard
              v-else
              :theme="theme"
              :name="update.title"
              :link="update.slug" 
              :image="update.thumbnail.url"
              :content="update.layout[0].content[0].children"
              :en="en"
            />
          </SwiperSlide>
          <SwiperSlide>
            <UpdatesCard
              v-for="update in updatesAddon"
              :key="update.id"
              :small="true"
              :theme="theme"
              :name="update.title"
              :content="update.layout[0].content[0].children"
            />
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
    updates: {
      type: Array,
      default: () => []
    },
    updatesAddon: {
      type: Array,
      default: () => []
    },
    en: {
      type: Boolean,
      default: false
    }
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
