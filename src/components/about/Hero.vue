<template>
  <div class="about-hero">
    <Shapes>
      <div class="shape red"></div>
      <div class="shape red red--2"></div>
    </Shapes>

    <div class="container">
      <div class="row">
        <div class="col-md-10 col-lg-9">
          <h1 class="title title--big">
            Contra Studio is an end-to-end creative office that works with innovative clients to bring impactful digital ideas to life.
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutHero'
}
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/about/hero";
</style>