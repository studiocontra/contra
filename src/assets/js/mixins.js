export default {
  mounted() {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 500);
  },
  computed: {
    getProductDataImg() {
      return (data, size) => {
        if(data['_embedded']['wp:featuredmedia'][0]['media_details']) {
          if(data['_embedded']['wp:featuredmedia'][0]['media_details'].sizes[size]) {
            return data['_embedded']['wp:featuredmedia'][0]['media_details'].sizes[size]['source_url'];
          }
          return data['_embedded']['wp:featuredmedia'][0]['source_url'];
        }
        return '/contra-placeholder.png';
      };
    }
  }
}