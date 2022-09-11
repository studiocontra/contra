export default {
  setup() {
    definePageMeta({
      pageTransition: 'Articles',
    });
  },
  mounted() {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 500);
  }
}