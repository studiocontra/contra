<template>
  <div class="hero-work">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h1 class="title title--big">
            {{intro}}
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WorkHero',
  props: {
    intro: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/work/hero";
</style>
