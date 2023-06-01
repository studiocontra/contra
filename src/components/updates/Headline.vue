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
        <div v-if="image">
          <NuxtImg 
            :src="image.url" 
            :sizes="`
              xs:${image.sizes.small['small-width']}
              sm:${image.sizes.card['card-width']}
              md:${image.sizes.section['section-width']}
              lg:${image.sizes['half-page-width']}
              xl:${image.sizes['full-page-width']}
            `"
            :alt="image.alt"
          />
        </div>
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