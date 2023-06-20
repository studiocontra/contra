<template>
  <div class="project__headline">
    <div class="container">
      <div class="row">
        <div class="col-md-10 col-lg-8">
          <h1 class="title" v-html="headline">
          </h1>

          <a
            class="project__data"
            :href="projectLink"
            target="_blank"
            aria-label="Visita el proyecto">
            <div class="logo">
              <img :src="logo" :alt="logoAlt">
            </div>

            <h2 class="text text--small">
              {{ client }}
            </h2>
          </a>
        </div>
      </div>
    </div>
    {{ console.log(isVimeo) }}
    <div class="main__image">
      <div v-if="!isVimeo">
        <picture>
          <LazyNuxtImg
            :src="image.url"
            :alt="image.alt"
            :width="image.width"
            :heght="image.height" 
          />
        </picture>
      </div>
      <iframe
        v-else
        :src="`https://player.vimeo.com/video/${videoId}?loop=1&autoplay=1&autopause=0&muted=1&title=0&byline=0&portrait=0&controls=1`" muted frameborder="0" allow="autoplay; fullscreen; picture-in-picture"></iframe>
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
    projectLink: {
      type: String,
      default: '#',
    },
    client: {
      type: String,
    },
    logo: {
      type: String,
      default: false
    },
    logoAlt: {
      type: String,
      default: false
    },
    isVimeo: {
      type: Boolean,
      default: false
    },
    image: {
      type: Object,
    },
    videoId: {
      type: [String, Boolean],
      default: ''
    },
  }
}
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/project/headline";
</style>