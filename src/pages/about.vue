<template>
  <div class="about-page">
    <Head>
      <Title>About Us</Title>
    </Head>

    <Header theme="dark" />
    <AboutHero
      :text="aboutData.hero_headline" />
    <AboutServices
      :data="aboutData.services" />
    <AboutMethodology
      :data="aboutData.metholodogy" />
    <AboutPartners
      class="js-dark-bg"
      :data="aboutData.partners" />
    <AboutTeam
      :data="aboutData.team" />
    <AboutAwards
      :data="awardsData" />
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
  async setup() {
    const { API_BASE_URL } = useRuntimeConfig();

    const { acf } = await $fetch(`${API_BASE_URL}/pages/79?acf_format=standard`);
    const { acf: { awards }} = await $fetch(`${API_BASE_URL}/pages/2?acf_format=standard`);

    return {
      aboutData: acf,
      awardsData: awards
    }
  },
  data() {
    return {
      changeBgDark: null,
      changeBgLight: null,
    };
  },
  mounted() {
    setTimeout(() => {
      this.changeBgDark = gsap.timeline({
        scrollTrigger: {
          trigger: '.js-dark-bg',
          start: 'top 40%',
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
          start: 'top 60%',
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
