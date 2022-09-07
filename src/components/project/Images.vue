<template>
  <div class="project__images js-project-images">
    <div class="container">
      <div
        v-for="(item, idx) in images"
        :key="idx"
        class="single-image"
        :class="`single-image--${item.size} ${item.alignment}`">
        <picture>
          <source :srcset="item.image.sizes['full-page']" media="(min-width: 1200px)">
          <source :srcset="item.image.sizes['half-page']" media="(min-width: 992px)">
          <source :srcset="item.image.sizes['card']">
          <img :src="item.image.sizes['full-page']" :alt="item.image.alt">
        </picture>
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