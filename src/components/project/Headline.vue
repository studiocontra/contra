<template>
  <div class="project__headline">
    <div class="container">
      <div class="row">
        <div class="col-md-10 col-lg-8">
          <h1 class="title" v-html="headline">
          </h1>

          <a
            class="project__data"
            :href="projectLink"
            target="_blank">
            <div v-if="logo.sizes" class="logo">
              <img :src="logo.sizes['small']" alt="logo.alt">
            </div>

            <h2 class="text text--small">
              {{ client }}
            </h2>
          </a>
        </div>
      </div>
    </div>

    <div class="main__image">
      <picture  v-if="image && !videoId">
        <source :srcset="image.url" media="(min-width: 1920px)">
        <source :srcset="image.sizes['full-page']" media="(min-width: 1200px)">
        <source :srcset="image.sizes['half-page']" media="(min-width: 768px)">
        <source :srcset="image.sizes.card"  media="(min-width: 450px)">
        <img
          :src="image.sizes.small"
          :alt="image.alt"
          :width="image.sizes['small-width']"
          :heght="image.sizes['small-width']">
      </picture>

      <iframe
        v-if="videoId"
        :src="`https://player.vimeo.com/video/${videoId}?loop=1&autoplay=1&autopause=0&muted=1&title=0&byline=0&portrait=0&controls=1`" muted frameborder="0" allow="autoplay; fullscreen; picture-in-picture"></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectHeadline',
   props: {
    headline: {
      type: String,
    },
    projectLink: {
      type: String,
      default: '#',
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