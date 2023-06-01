<template>
  <div class="project__next">
    <div v-if="image">
      <NuxtImg
        class="next__bg"
        :src="image.url" 
        :sizes="`
          xs:${image.sizes.small['small-width']}
          sm:${image.sizes.small['small-width']}
          md:${image.sizes.card['card-width']}
          lg:${image.sizes['half-page-width']}
          xl:${image.sizes['full-page-width']}
        `"
        :alt="image.alt"
      />
    </div>

    <NuxtLink :to="`/proyectos/${slug}`">
      <div class="container">
        <div class="next__headline">
          <p>
            Siguiente proyecto
          </p>

          <svg viewBox="0 0 18 15" class="icon">
            <path d="M9.59961 1.2L15.9996 7.6L9.59961 14" />
            <path d="M0 7.59979L10.5143 7.59979" />
          </svg>
        </div>
      </div>

      <div class="next__marquee">
        <div class="content">
          <span v-for="i in 10" :key="i">
            {{ name }} //
          </span>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  name: 'NextProject',
  props: {
    image: {
      type: [Object, Boolean],
      default: false
    },
    name: {
      type: String,
      default: ''
    },
    slug: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/project/next-project";
</style>