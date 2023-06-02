<template>
  <div
    class="project"
    :class="{'project--full': full}">
    <NuxtLink :to="link" :aria-label="`Conoce más de nuestro pryecto ${name}`">
      <div class="project__img">
        <div class="project__tags">
          <template v-if="tags.length > 0">
            <div
              v-for="(tag, idx) in tags"
              :key="idx"
              class="tag">
              <span v-html="tag.name"></span>
            </div>
          </template>
        </div>

        <template v-if="image">
          <div v-if="full">
            <LazyNuxtPicture v-if="((image.title) === 'bt-studio-2')">
              <LazyNuxtImg 
                :src="image.url"
                :alt="image.alt"
                :width="image.width"
                :heght="image.height" />
            </LazyNuxtPicture>
            <LazyNuxtPicture v-else>
              <source :srcset="image.url" media="(min-width: 1600px)">
              <source :srcset="image.url['half-page']" media="(min-width: 1400px)">
              <source :srcset="image.sizes.section" media="(min-width: 768px)">
              <source :srcset="image.sizes.card"  media="(min-width: 450px)">
              <source :srcset="image.sizes.small">
              <LazyNuxtImg
                :src="image.sizes.small"
                :alt="image.alt"
                :width="image.width"
                :heght="image.height" 
                lazy="loading"/>
            </LazyNuxtPicture>
          </div >
          <div v-else>
            <LazyNuxtPicture>
              <source :srcset="image.url" media="(min-width: 1600px)">
              <source :srcset="image.url['half-page']" media="(min-width: 1400px)">
              <source :srcset="image.sizes.section" media="(min-width: 768px)">
              <source :srcset="image.sizes.card"  media="(min-width: 450px)">
              <LazyNuxtImg
                :src="image.sizes.small"
                :alt="image.alt"
                :width="image.sizes.small['small-width']"
                :heght="image.sizes.small['small-height']" 
                lazy="loading"/>
            </LazyNuxtPicture>
          </div >
        </template>
        <div class="marquee">
          <div class="content">
            <span v-for="i in 10" :key="i">
              Ver caso de estudio //
            </span>
          </div>
        </div>
      </div>

      <div class="project__content" :class="{'project__content--full': full}">
        <div class="row">
          <div :class="(full) ? 'col-md-6' : 'col-12'">
            <h3 class="title title--small" v-html="name"></h3>
          </div>
          <div :class="(full) ? 'col-md-6' : 'col-12'">
            <div class="text text--big" v-html="description"></div>
          </div>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script>
import { LazyNuxtImg } from '../../.nuxt/components';

export default {
    name: "ProjectCard",
    props: {
        full: {
            type: Boolean,
        },
        name: {
            type: String,
        },
        description: {
            type: String,
        },
        image: {
            type: [Object, Boolean],
            default: false
        },
        link: {
            type: String,
        },
        tags: {
            type: Array,
            default: () => []
        },
    },
    components: { LazyNuxtImg }
}
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/components/project-card";
</style>
