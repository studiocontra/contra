<template>
  <div class="project__images js-project-images">
    <div class="container">
      <div class="single-image single-image--full">
        <img src="https://picsum.photos/seed/123/1920/1080" alt="">
      </div>

      <div class="single-image single-image--75">
        <img src="https://picsum.photos/seed/124/1920/1080" alt="">
      </div>

      <div class="single-image single-image--small">
        <img src="https://picsum.photos/seed/125/1000/800" alt="">
      </div>

      <div class="single-image single-image--small">
        <img src="https://picsum.photos/seed/126/1000/700" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectImages'
}
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/project/images";
</style>