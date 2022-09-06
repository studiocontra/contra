<template>
  <div class="project__next">
    <img
      src="https://picsum.photos/seed/201/1920/600"
      alt=""
      class="next__bg">

    <NuxtLink to="/">
      <div class="container">
        <div class="next__headline">
          <p>
            Next project
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
            Marfala //
          </span>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  name: 'NextProject'
}
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/project/next-project";
</style>