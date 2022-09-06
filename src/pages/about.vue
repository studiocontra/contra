<template>
  <div class="about-page">
    <Head>
      <Title>About Us</Title>
    </Head>

    <Header theme="dark" />
    <AboutHero />
    <AboutServices />
    <AboutMethodology />
    <AboutPartners class="js-dark-bg" />
    <AboutTeam />
    <AboutAwards />
    <News
        class="js-light-bg"
        theme="dark" />
    <Footer theme="dark" />
  </div>
</template>

<script>
import mixins from '@/assets/js/mixins';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'AboutPage',
  mixins: [mixins],
  data() {
    return {
      heroData: '',
      changeBgDark: null,
      changeBgLight: null,
    };
  },
  async created() {
    const { data: { _value: home } } = await useFetch('http://contra.local/wp-json/wp/v2/pages/2')
  },
  mounted() {
    setTimeout(() => {
      this.changeBgDark = gsap.timeline({
        scrollTrigger: {
          trigger: '.js-dark-bg',
          start: 'top 50%',
          end: '+=500',
          scrub: true,
        }
      })
      .to('.about-page', {
        backgroundColor: '#00001A',
      });

      this.changeBgLight = gsap.timeline({
        scrollTrigger: {
          trigger: '.js-light-bg',
          start: 'top 80%',
          end: '+=500',
          scrub: true,
        }
      })
      .to('.about-page', {
        backgroundColor: '#F4F4F4',
      });
    }, 750);

    window.addEventListener('resize', () => {
      this.changeBgDark.scrollTrigger.refresh();
      this.changeBgLight.scrollTrigger.refresh();
    })
  },
  beforeDestroy() {
    this.changeBgDark.kill();
    this.changeBgLight.kill();
  }
}
</script>

<style lang="scss" scoped>
  .about-page {
    background-color: $white;
  }
</style>
