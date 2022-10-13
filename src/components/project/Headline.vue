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

            <h2 class="text text--small">
              {{ client }}
            </h2>
          </div>
        </div>
      </div>
    </div>

    <div class="main__image">
      <v-lazy-image
        v-if="image && !videoId"
        :src="image.sizes['full-page']"
        :src-placeholder="image.sizes['small']"
      />

      <iframe
        v-if="videoId"
        :src="`https://player.vimeo.com/video/${videoId}?autoplay=1&loop=1&muted=1&title=0&byline=0&portrait=0&controls=1`" muted frameborder="0" allow="autoplay; fullscreen; picture-in-picture"></iframe>
    </div>
  </div>
</template>

<script>
import VLazyImage from "v-lazy-image";

export default {
  name: 'ProjectHeadline',
  components: {
    VLazyImage,
  },
   props: {
    headline: {
      type: String,
    },
    client: {
      type: String,
    },
    logo: {
      type: [Object, Boolean],
      default: false
    },
    image: {
      type: [Object, Boolean],
      default: false
    },
    videoId: {
      type: String,
      default: ''
    },
  }
}
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/project/headline";
</style>