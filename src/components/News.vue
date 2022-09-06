<template>
  <div class="container">
    <div
      class="wrap-news"
      :class="`wrap-news--${theme}`">
      <div class="news__headline">
        <h2 class="title">
          News
        </h2>
      </div>
    </div>

    <div class="news__grid">
      <Swiper
        :slidesPerView="1.5"
        :spaceBetween="24"
        :breakpoints="{
          '576': {
            slidesPerView: 2.5,
          },
          '992': {
            slidesPerView: 4,
          }
        }">
        <SwiperSlide>
          <NewsCard
            :theme="theme"
            name="Contra is now part of Bombastica Group"
            description="Since September Contra takes part in the independent group of creative agencies. Adding value in the Digital sector."
            link="/projects/la-silla-vacia"
            image="https://picsum.photos/seed/10/500/500" />
        </SwiperSlide>
        <SwiperSlide>
          <NewsCard
            :theme="theme"
            name="IDARTES and Contra working in collaboration"
            description="Last week in Contra Studio we started to work with IDARTES in an amazing project. We are one step closer to our goal, create a relation between technology and culture in the region."
            link="/projects/ora-the-floral-agency"
            image="https://picsum.photos/seed/20/500/500" />
        </SwiperSlide>
        <SwiperSlide>
          <NewsCard
            :theme="theme"
            name="Beckett Simonon new website launch"
            description="This month we celebrate the launch of our last project, Beckett Simonon, a tailar made shopify to showcase amazing handcrafted shoes."
            link="/projects/paya-health"
            image="https://picsum.photos/seed/30/500/500" />
        </SwiperSlide>
        <SwiperSlide>
          <NewsCard
            :theme="theme"
            name="July studio playlist is ready"
            description="Listen to the last palylist created in the studio, this curated music sometimes reflec the mood of our studio during working sessions."
            link="/projects/paya-health"
            image="https://picsum.photos/seed/40/500/500" />
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<script>
// import Swiper JS
import { Swiper, SwiperSlide } from "swiper/vue";

// import Swiper styles
import 'swiper/css';

export default {
  name: 'NewsBlock',
  props: {
    theme: {
      type: String,
      default: 'light',
    }
  },
  components: {
    Swiper,
    SwiperSlide
  },
}
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/components/news";
</style>
