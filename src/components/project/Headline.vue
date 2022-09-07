<template>
  <div class="project__headline">
    <div class="container">
      <div class="row">
        <div class="col-md-10 col-lg-8">
          <h1 class="title" v-html="headline">
          </h1>

          <div class="project__data">
            <div v-if="logo.sizes" class="logo">
              <img :src="logo.sizes['small']" alt="logo.alt">
            </div>

            <h2 class="title title--small">
              {{ client }}
            </h2>
          </div>
        </div>
      </div>
    </div>

    <div class="main__image">
      <picture>
        <source :srcset="image.sizes['full-page']" media="(min-width: 1200px)">
        <source :srcset="image.sizes['half-page']" media="(min-width: 992px)">
        <source :srcset="image.sizes['card']">
        <img :src="image.sizes['full-page']" :alt="image.alt">
      </picture>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectHeadline',
   props: {
    headline: {
      type: String,
    },
    client: {
      type: String,
    },
    logo: {
      type: Object,
      default: () => {}
    },
    image: {
      type: Object,
      default: () => {}
    },
  }
}
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/project/headline";
</style>