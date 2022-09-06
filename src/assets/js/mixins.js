// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
import smoothScroll from '@/assets/js/scroll';

// gsap.registerPlugin(ScrollTrigger);

export default {
  mounted() {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 500);
  }
}