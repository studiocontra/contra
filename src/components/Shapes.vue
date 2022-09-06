<template>
  <div class="shapes">
    <div class="container">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'bgShapes'
}
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/components/shapes";
</style>