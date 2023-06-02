<template>
  <div class="updates__headline">
    <div class="container">
      <h1 class="title">
        {{ headline }}
      </h1>

      <div class="date">
        <span>
          Publicado el {{date}}
        </span>
      </div>
      <div class="main__image">
        <picture v-if="image">
          <source :srcset="image.url" media="(min-width: 1320px)">
          <source :srcset="image.sizes.section" media="(min-width: 768px)">
          <source :srcset="image.sizes.card"  media="(min-width: 450px)">
          <LazyNuxtImg
            :src="image.sizes.small"
            :alt="image.alt"
            :width="image.width"
            :heght="image.height" 
            loading="lazy"/>
        </picture>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UpdatesHeadline',
   props: {
    headline: {
      type: String,
    },
    date: {
      type: String,
      default: '#',
    },
    image: {
      type: [Object, Boolean],
      default: false
    },
  }
}
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/updates/headline";
</style>