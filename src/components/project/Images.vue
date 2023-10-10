<template>
  <div class="project__images js-project-images">
    <div class="container">
      <div
        v-for="(item, idx, i) in images"
        :key="idx"
        class="single-image"
        :class="`single-image--${item.width} ${item.alignment} ${(item.isVimeo) ? 'single-image--video' : ''}`">
        <div v-if="!item.isVimeo">
          <LazyNuxtImg
            :src="`https://raw.githubusercontent.com/studiocontra/contra-cms/master/media/${item.image.filename}`"
            :alt="item.image.alt"
            :width="item.image.width"
            :heght="item.image.height" 
            loading="lazy"
          />
        </div>
        <iframe
          v-else
          :src="`https://player.vimeo.com/video/${item.vimeo}?background=1`" frameborder="0"></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectImages',
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