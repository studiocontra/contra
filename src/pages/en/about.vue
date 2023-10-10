<template>
  <div class="about-page">
    <Head>
      <Title>{{title}}</Title>
      <Meta name="description" :content="intro" />
    </Head>

    <Header theme="dark" :en="true"/>
    <AboutHero
      :text="intro" />
    <AboutServices
      :data="services" />
    <AboutMethodology
      :data="metholodogy" />
    <AboutPartners
      class="js-dark-bg"
      :data="partners" />
    <AboutTeam
      :data="team" />
    <AboutAwards
      :data="awards" />
    <!--<Updates
      :en="true"
      theme="light"
      :updates="updates"
      :updatesAddon="updatesAddon" /> -->
    <Footer theme="light" :en="true" />
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
    const { PAYLOAD_PUBLIC_URL } = useRuntimeConfig();
    let page = await $fetch(`${PAYLOAD_PUBLIC_URL}/pages/648cbf0aa72df9ea402fa10c?locale=en`);
    let updates = await $fetch(`${PAYLOAD_PUBLIC_URL}/updates?locale="en"`);

    return {
      title: page.title,
      intro: page.intro,
      services: page.Layout[0],
      metholodogy: page.Layout[1],
      partners: page.Layout[2],
      team: page.Layout[3],
      awards: page.Layout[4],
      updates: updates.docs.filter(update => update.status !== 'draft').slice(0, 3),
      updatesAddon: updates.docs.slice(4, 8)
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
          start: 'top 60%',
          end: '+=500',
          scrub: true,
        }
      })
      .to('.about-page', {
        backgroundColor: '#00001A',
      });
    }, 1000);

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
