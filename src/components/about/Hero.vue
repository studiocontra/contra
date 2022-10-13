<template>
  <div class="about-hero js-about-hero">
    <Shapes>
      <div class="shape red red--1"></div>
      <div class="shape red red--2"></div>
    </Shapes>

    <div class="container">
      <div class="row">
        <div class="col-md-10 col-lg-9">
          <h1 class="title title--big" v-html="text"></h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default {
  name: 'AboutHero',
  props: {
    text: {
      type: String,
      default: ''
    }
  },data() {
    return {
      moveShape: null,
    };
  },
  mounted() {
    setTimeout(() => {
      this.moveShape = gsap.timeline({
        scrollTrigger: {
          trigger: '.js-about-hero',
          start: 'top top',
          end: '+=500',
          scrub: 0.2,
        }
      })
      .from('.js-about-hero .red--1', {
        left: '75%',
        top: '-10%',
        duration: 0.4
      })
      .from('.js-about-hero .red--2', {
        right: '80%',
        top: '25%',
        duration: 0.4
      }, '<');
    }, 750);
  },
  beforeDestroy() {
    this.moveShape.kill();
  },
}
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/about/hero";
</style>