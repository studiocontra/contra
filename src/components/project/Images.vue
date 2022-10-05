<template>
  <div class="project__images js-project-images">
    <div class="container">
      <div
        v-for="(item, idx) in images"
        :key="idx"
        class="single-image"
        :class="`single-image--${item.size} ${item.alignment} ${(item.video) ? 'single-image--video' : ''}`">
        <v-lazy-image
          v-if="item.image && !item.video"
          :src="item.image.sizes['full-page']"
          :src-placeholder="item.image.sizes['pixel']" />

        <iframe
          v-if="item.video"
          :src="`https://player.vimeo.com/video/${item.video}?loop=1&muted=1&title=0&byline=0&portrait=0&controls=1`" muted frameborder="0" allow="autoplay; fullscreen; picture-in-picture"></iframe>
      </div>
    </div>
  </div>
</template>

<script>
import VLazyImage from "v-lazy-image";

export default {
  name: 'ProjectImages',
   components: {
    VLazyImage
  },
  props: {
    images: {
      type: Object,
      default: () => []
    },
  }
}
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/project/images";
</style>