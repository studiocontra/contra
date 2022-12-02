<template>
  <div
    class="news-card"
    :class="`news-card--${theme}`">
    <a :href="link.url || 'javascript:void(0);'" :target="link.target">
      <div class="news-card__img">
        <img
          v-if="image"
          :src="image.sizes['small']"
        />
      </div>

      <div class="news-card__content" >
        <div class="title title--small">
          {{ name }}
        </div>
        <div class="text text--small" v-html="description"></div>
        <span class="date">
          {{ date }}
        </span>
      </div>
    </a>
  </div>
</template>

<script>
import VLazyImage from "v-lazy-image";

export default {
  components: {
    VLazyImage,
  },
  props: {
    theme: {
      type: String,
      default: 'light',
    },
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    date: {
      type: String,
      default: '29.02.2022',
    },
    image: {
      type: [Object, Boolean],
      default: false
    },
    link: {
      type: [String, Object],
      default: () => {}
    },
  }
}
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/components/news-card";
</style>
