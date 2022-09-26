<template>
  <div class="about-hero">
    <Shapes>
      <div class="shape red"></div>
      <div class="shape red red--2"></div>
    </Shapes>

    <div class="container">
      <div class="row">
        <div class="col-md-10 col-lg-9">
          <h1 class="title title--big" v-html="text"></h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutHero',
  props: {
    text: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/about/hero";
</style>