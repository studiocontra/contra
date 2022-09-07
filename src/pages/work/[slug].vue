<template>
  <div class="single-work">
    <Header theme="dark" />
    <ProjectHeadline />
    <ProjectContent />
    <ProjectImages class="js-toggle-bg" />
    <ProjectNextProject />
    <Footer />
  </div>
</template>

<script>
import mixins from '@/assets/js/mixins';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'ProjectPage',
  mixins: [mixins],
  data() {
    return {
      changeBgDark: null,
    };
  },
  async setup() {
    const {
      currentRoute: {
        value: {
          params: {
            slug
          }
        }
      }
    } = useRouter();

    const { data } = await useFetch(`https://contra.local/wp-json/wp/v2/projects/?slug=${slug}`);

    console.log(slug, data);

    return {
      data
    }
  },
  mounted() {
    setTimeout(() => {
      this.changeBgDark = gsap.timeline({
        scrollTrigger: {
          trigger: '.js-toggle-bg',
          start: 'top 50%',
          end: '+=500',
          scrub: true,
        }
      })
      .to('.single-work', {
        backgroundColor: '#00001A',
      });
    }, 750);

    window.addEventListener('resize', () => this.changeBgDark.scrollTrigger.refresh())
  }
}
</script>

<style lang="scss" scoped>
  .single-work {
    background-color: $white;
  }
</style>
