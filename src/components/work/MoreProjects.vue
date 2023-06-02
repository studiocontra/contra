<template>
  <div class="wrap-accordion">
    <template v-for="(project, idx) in data" :key="idx">
      <div class="single-accordion">
        <div class="accordion__headline js-single-accordion">
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <h4 class="title title--small" v-html="project.title.rendered"></h4>
              </div>
              <div class="col-md-6">
                <div class="tags">
                  Diseño web, Desarrollo web
                </div>
              </div>

              <div class="icon"></div>
            </div>
          </div>
        </div>

        <div class="accordion__content">
          <div class="intro">
            <div class="container">
              <div class="text text--small">
                <div v-html="project.excerpt.rendered"></div>
                <a :href="project.acf.project_link.url" class="link">
                  Visitar website
                </a>
              </div>
            </div>
          </div>

          <div
            v-if="showSlider"
            class="wrap-swiper">
            <Swiper
              :slidesPerView="1.1"
              :spaceBetween="16"
              :breakpoints="{
                '768': {
                  slidesPerView: 1.5,
                  spaceBetween: 24,
                },
              }"
              :navigation="{
                nextEl: '.swiper-arrow--next',
                prevEl: '.swiper-arrow--prev',
                disabledClass: 'swiper-arrow--disabled',
              }"
              :modules="modules">
              <SwiperSlide
                v-for="(item, idx) in project.acf.images"
                :key="idx">
                <picture>
                  <source :srcset="item.image.sizes['half-page']" media="(min-width: 768px)">
                    <NuxtImg
                      :src="item.image.sizes.card"
                      :alt="item.image.alt" />
                  </picture>
              </SwiperSlide>

              <div class="wrap-arrows">
                <div class="container">
                  <div class="swiper-arrow swiper-arrow--prev">
                    <svg viewBox="0 0 18 15">
                      <path d="M9.59961 1.2L15.9996 7.6L9.59961 14" />
                      <path d="M0 7.59979L10.5143 7.59979" />
                    </svg>
                  </div>
                  <div class="swiper-arrow swiper-arrow--next">
                    <svg viewBox="0 0 18 15">
                      <path d="M9.59961 1.2L15.9996 7.6L9.59961 14" />
                      <path d="M0 7.59979L10.5143 7.59979" />
                    </svg>
                  </div>
                </div>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import accordion from '@/assets/js/accordion';

// import Swiper JS
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper";

// import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

export default {
  name: 'MoreProjects',
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  },
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      modules: [Navigation],
      showSlider: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.showSlider = true;
      accordion('.js-single-accordion');
    }, 750);
  },
}
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/work/more-projects";
</style>
