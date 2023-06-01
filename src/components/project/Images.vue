<template>
  <div class="project__images js-project-images">
    <div class="container">
      <div
        v-for="(item, idx, i) in images"
        :key="idx"
        class="single-image"
        :class="`single-image--${item.size} ${item.alignment} ${(item.video) ? 'single-image--video' : ''}`">
        <div v-if="item.image && !item.video">
          <NuxtImg 
            :src="item.image.url" 
            :sizes="`
              xs:${item.image.sizes.small['small-width']}
              sm:${item.image.sizes.small['small-width']}
              md:${item.image.sizes.card['card-width']}
              lg:${item.image.sizes['half-page-width']}
              xl:${item.image.sizes['full-page-width']}
            `"
            :alt="item.image.title"
          />
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