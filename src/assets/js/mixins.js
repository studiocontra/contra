export default {
  mounted() {
    const thisRoute = this.$route;
    const { location: { origin } } = window;
    const { title } = document;

    // this.$gtag.pageview({
    //   page_path: thisRoute,
    // })

    // gtag('event', 'page_view', {
    //   page_title: title,
    //   page_location: origin + thisRoute,  // The full URL is required.
    //   send_to: 'GTM-MDD9SZM'
    // });

    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 500);
  }
}