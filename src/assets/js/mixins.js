export default {
  setup() {
    definePageMeta({
      pageTransition: 'Articles',
    });
  },
  mounted() {
    const thisRoute = this.$route;
    const { location: { origin } } = window;
    const { title } = document;

    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 500);
  }
}