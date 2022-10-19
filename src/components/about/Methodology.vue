<template>
  <div class="container">
    <div class="our-methodology">
      <div class="row justify-between">
        <div class="col-md-6">
          <h3 class="title title--small">
            {{ data.headline }}
          </h3>
        </div>

        <div class="col-md-6">
          <div class="title title--medium" v-html="data.content"></div>
        </div>

        <div class="col-12">
          <div class="graph">
            <img src="~/assets/img/methodology.png" alt="">
          </div>
        </div>
      </div>
    </div>
<!-- 
    <div class="we-are-partners" ref="wrap-partners">
      <div class="wrap-cursors">
        <div class="single-cursor js-single-cursor">
          <img src="~/assets/img/floating-cursor-red.png" alt="">
          <span class="letter">
            C
          </span>
        </div>
        <div class="single-cursor js-single-cursor">
          <img src="~/assets/img/floating-cursor-red.png" alt="">
          <span class="letter">
            P
          </span>
        </div>
        <div class="single-cursor js-single-cursor">
          <img src="~/assets/img/floating-cursor-blue.png" alt="">
          <span class="letter">
            J
          </span>
        </div>
        <div class="single-cursor js-single-cursor">
          <img src="~/assets/img/floating-cursor-red.png" alt="">
          <span class="letter">
            A
          </span>
        </div>
        <div class="single-cursor js-single-cursor">
          <img src="~/assets/img/floating-cursor-blue.png" alt="">
          <span class="letter">
            T
          </span>
        </div>

      </div>

      <div class="main-headline">
        <h4 class="title" v-html="data.headline_2"></h4>
      </div>
      <div class="row justify-between">
        <div class="col-md-6 col-lg-5">
          <h5 class="title title--small" v-html="data.sub_headline"></h5>

          <div class="text" v-html="data.content"></div>
        </div>

        <div class="col-md-6 col-lg-5">
          <div
            v-if="hasTestimonials"
            class="slider-testimonials">
            <Swiper
              :autoplay="{
                delay: 6000,
                disableOnInteraction: false,
              }"
              :scrollbar="{
                hide: false,
              }"
              :modules="modules" >
              <SwiperSlide
                v-for="(item, idx) in data.testimonials"
                :key="idx">
                <div class="quote">
                  <div class="text" v-html="item.quote"></div>
                  <div class="quote__author">
                    <p>
                      {{ item.name }}
                    </p>
                    <span>
                      {{ item.role }}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import { gsap } from 'gsap';
// import Swiper JS
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Scrollbar } from "swiper";

// import Swiper styles
import 'swiper/css';
import "swiper/css/scrollbar";

export default {
  name: 'OurMethodology',
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
      modules: [Autoplay, Scrollbar],
    };
  },
  mounted() {
    setTimeout(() => {
      const {width, height} = this.$refs['wrap-partners'].getBoundingClientRect();

      document.querySelectorAll('.js-single-cursor').forEach(element => {
        const startXVal = gsap.utils.random(0, width);
        const endXVal = gsap.utils.random(0, width);
        const startYVal = gsap.utils.random(0, height);
        const endYVal = gsap.utils.random(0, height);

        console.log(startXVal, endXVal);

        gsap.timeline().set(element, {
          top: `${startYVal}px`,
          left: `${startXVal}px`
        })
        .to(element, {
          top: `${endYVal}px`,
          left: `${endXVal}px`,
          duration: 20,
          yoyo: true,
          repeat: -1,
          repeat: '-1',
        });
      });
    }, 750);
  },
  computed: {
    hasTestimonials() {
      return this.data.testimonials.length > 0;
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/about/methodology";
</style>