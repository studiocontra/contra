<template>
  <div class="project__images js-project-images">
    <div class="container">
      <div
        v-for="(item, idx) in images"
        :key="idx"
        class="single-image"
        :class="`single-image--${item.size} ${item.alignment} ${(item.video) ? 'single-image--video' : ''}`">
        <picture
          v-if="item.image && !item.video">
          <source :srcset="item.image.url" media="(min-width: 1920px)">
          <source :srcset="item.image.sizes['full-page']" media="(min-width: 1200px)">
          <source :srcset="item.image.sizes['half-page']" media="(min-width: 768px)">
          <source :srcset="item.image.sizes.card"  media="(min-width: 450px)">
          <img
            :src="item.image.sizes.small"
            :alt="item.image.alt"
            :width="item.image.sizes.small['small-width']"
            :heght="item.image.sizes.small['small-height']"
            loading="lazy">
        </picture>

        <iframe
          v-if="item.video"
          :src="`https://player.vimeo.com/video/${item.video}?loop=1&autoplay=1&autopause=0&muted=1&title=0&byline=0&portrait=0&controls=1`" muted frameborder="0" allow="autoplay; fullscreen; picture-in-picture"></iframe>
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