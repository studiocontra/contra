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
      <div class="main__image" v-if="image">
        <LazyNuxtImg
          :src="`https://raw.githubusercontent.com/studiocontra/contra-cms/master/media/${image.filename}`"
          :alt="image.alt"
          :width="image.width"
          :heght="image.height"
          :v-if="image"
          loading="lazy"/>
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
    },
  }
}
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/updates/headline";
</style>