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
        <img
          v-if="image"
          :src="image.sizes['full-page'] || image.url"
        />
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