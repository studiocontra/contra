<template>
  <div class="updates__intro">
    <div class="container">
      <div class="row justify-center">
        <div class="col-11 col-sm-9 col-md-7">
          <div class="text text--big" v-html="data"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UpdatesIntro',
   props: {
    data: {
      type: String,
    },
  }
}
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/updates/intro";
</style>