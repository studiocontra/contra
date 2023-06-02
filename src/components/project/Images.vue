<template>
  <div class="project__images js-project-images">
    <div class="container">
      <div
        v-for="(item, idx, i) in images"
        :key="idx"
        class="single-image"
        :class="`single-image--${item.size} ${item.alignment} ${(item.video) ? 'single-image--video' : ''}`">
        <div v-if="item.image && !item.video">
          <picture>
            <source :srcset="item.image.url" media="(min-width: 1320px)">
            <source :srcset="item.image.sizes.section" media="(min-width: 768px)">
            <source :srcset="item.image.sizes.card"  media="(min-width: 450px)">
            <LazyNuxtImg
              :src="item.image.sizes.small"
              :alt="item.image.alt"
              :width="item.image.width"
              :heght="item.image.height" 
              loading="lazy"
            />
          </picture>
        </div>

        <iframe
          v-if="item.video"
          :src="`https://player.vimeo.com/video/${item.video}?loop=1&autoplay=1&autopause=0&muted=1&title=0&byline=0&portrait=0&controls=1`" muted frameborder="0" allow="autoplay; fullscreen; picture-in-picture"></iframe>
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