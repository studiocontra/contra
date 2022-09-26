<template>
  <div class="our-methodology">
    <div class="container">
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

    <div class="we-are-partners">
      <div class="container">
        <div class="wrap-cursors">
          <svg width="36" height="44" viewBox="0 0 36 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25.8184 5.81763H27.273V7.27179H25.8184V5.81763Z" fill="#FB0028"/>
            <path d="M33.0918 23.2725H34.5466V26.1815H33.0918V23.2725Z" fill="#FB0028"/>
            <path d="M24.3633 4.36304H25.8179V5.81788H24.3633V4.36304Z" fill="#FB0028"/>
            <path d="M28.7266 8.72729H30.1812V10.1815H28.7266V8.72729Z" fill="#FB0028"/>
            <path d="M27.2734 7.27197H28.7278V8.72682H27.2734V7.27197Z" fill="#FB0028"/>
            <path d="M31.6367 11.6362H33.0913V13.0904H31.6367V11.6362Z" fill="#FB0028"/>
            <path d="M30.1816 26.1812H33.0907V27.636H30.1816V26.1812Z" fill="#FB0028"/>
            <path d="M30.1816 10.1814H31.6363V11.6362H30.1816V10.1814Z" fill="#FB0028"/>
            <path d="M22.9102 2.90918H24.3648V4.36335H22.9102V2.90918Z" fill="#FB0028"/>
            <path d="M31.6367 20.363H33.0913V23.272H31.6367V20.363Z" fill="#FB0028"/>
            <path d="M30.1816 17.4539H31.6363V20.3629H30.1816V17.4539Z" fill="#FB0028"/>
            <path d="M27.2734 20.363H28.7278V23.272H27.2734V20.363Z" fill="#FB0028"/>
            <path d="M28.7266 23.2725H30.1812V26.1815H28.7266V23.2725Z" fill="#FB0028"/>
            <path d="M35.9994 15.9991V14.5449H34.5448V13.0901H33.0902V14.5449H28.7266V17.4539H30.181V15.9991H35.9994Z" fill="#FB0028"/>
            <path d="M21.4544 2.90901H22.909V1.45417H21.4544V0H20V21.8176H21.4544V20.3632H22.909V18.9086H21.4544V2.90901Z" fill="#FB0028"/>
            <path d="M22.9102 17.4539H24.3648V18.908H22.9102V17.4539Z" fill="#FB0028"/>
            <path d="M24.3633 15.9993H25.8179V17.4541H24.3633V15.9993Z" fill="#FB0028"/>
            <path d="M25.8184 17.4539H27.273V20.3629H25.8184V17.4539Z" fill="#FB0028"/>
            <circle cx="11.515" cy="32.3934" r="11.515" fill="#FB0028"/>
            <path d="M8.14757 33.3621C8.14757 33.7767 8.23047 34.1083 8.39629 34.3847L8.90756 35.2552C9.33592 35.9876 9.95773 36.333 10.8283 36.333H13.6748V35.2967H10.7868C10.317 35.2967 10.0959 35.1861 9.87482 34.7854L9.34973 33.8458C9.28064 33.7352 9.25301 33.6385 9.25301 33.3898V30.0458C9.25301 29.8662 9.29446 29.7004 9.37737 29.5345L10.2894 27.7935C10.3723 27.6415 10.4966 27.5586 10.6624 27.5586H11.2981C11.4777 27.5586 11.6159 27.6276 11.685 27.7796L12.4173 29.2858H13.6748L12.5832 27.2131C12.3897 26.84 11.9752 26.5222 11.229 26.5222H10.7039C9.98536 26.5222 9.58464 26.84 9.37737 27.2269L8.39629 29.0094C8.23047 29.3134 8.14757 29.6865 8.14757 30.0182V33.3621Z" fill="#F4F4F4"/>
          </svg>

        </div>

        <div class="main-headline">
          <h4 class="title" v-html="data.headline_2"></h4>
        </div>
        <div class="row justify-between">
          <div class="col-md-6 col-lg-5">
            <h5 class="title title--small">
              {{ data.sub_headline }}
            </h5>

            <div class="text" v-html="data.content"></div>
          </div>

          <div class="col-md-6 col-lg-5">
            <div
              v-if="hasTestimonials"
              class="slider-testimonials">
              <Swiper
                :autoplay="{
                  delay: 5000,
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
      </div>
    </div>
  </div>
</template>

<script>
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