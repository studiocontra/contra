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
              <img :src="`https://raw.githubusercontent.com/studiocontra/contra-cms/master/media/${logo}`" :alt="logoAlt">
            </div>

            {{ console.log(logo) }}

            <h2 class="text text--small">
              {{ client }}
            </h2>
          </a>
        </div>
      </div>
    </div>
    <div class="main__image">
      <div v-if="!isVimeo">
        <picture>
          <LazyNuxtImg
            :src="`https://raw.githubusercontent.com/studiocontra/contra-cms/master/media/${image.filename}`"
            :alt="image.alt"
            :width="image.width"
            :height="image.height" 
          />
        </picture>
      </div>
      <iframe
        v-else
        :src="`https://player.vimeo.com/video/${videoId}?background=1`" frameborder="0"></iframe>
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