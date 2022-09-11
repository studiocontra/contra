<template>
  <div class="project__headline">
    <div class="container">
      <div class="row">
        <div class="col-md-10 col-lg-8">
          <h1 class="title" v-html="headline">
          </h1>

          <div class="project__data">
            <div v-if="logo.sizes" class="logo">
              <img :src="logo.sizes['small']" alt="logo.alt">
            </div>

            <h2 class="title title--small">
              {{ client }}
            </h2>
          </div>
        </div>
      </div>
    </div>

    <div class="main__image">
      <v-lazy-image
        :src="image.sizes['full-page']"
        :src-placeholder="image.sizes['small']"
      />
    </div>
  </div>
</template>

<script>
import VLazyImage from "v-lazy-image";

export default {
  name: 'ProjectHeadline',
  components: {
    VLazyImage
  },
   props: {
    headline: {
      type: String,
    },
    client: {
      type: String,
    },
    logo: {
      type: Object,
      default: () => {}
    },
    image: {
      type: Object,
      default: () => {}
    },
  }
}
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/project/headline";
</style>