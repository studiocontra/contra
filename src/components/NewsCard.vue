<template>
  <div
    class="news-card"
    :class="`news-card--${theme}`">
    <a :href="link" taget="_blank">
      <div class="news-card__img">
        <img :src="image" alt="">
      </div>

      <div class="news-card__content" >
        <div class="title title--small">
           {{ name }}
        </div>
        <div class="text text--small">
          <p>
            {{ description }}
          </p>
        </div>
        <span class="date">
          {{ date }}
        </span>
      </div>
    </a>
  </div>
</template>

<script>
export default {
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
      type: String,
    },
    link: {
      type: String,
    },
  }
}
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/components/news-card";
</style>
