<template>
  <div class="project__images js-project-images">
    <div class="container">
      <div
        v-for="(item, idx) in images"
        :key="idx"
        class="single-image"
        :class="`single-image--${item.size} ${item.alignment}`">
        <v-lazy-image
          :src="item.image.sizes['full-page']"
          :src-placeholder="item.image.sizes['pixel']" />
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