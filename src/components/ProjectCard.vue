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
              <span>{{ tag.name }}</span>
            </div>
          </template>
        </div>
        <template v-if="image">
          <div v-if="full">
            <LazyNuxtImg
              :src="`https://raw.githubusercontent.com/studiocontra/contra-cms/master/media/${image.filename}`"
              :alt="image.alt"
              :width="image.width"
              :heght="image.height" 
              loading="lazy"/>
          </div >
          <div v-else>
            <LazyNuxtImg
              :src="`https://raw.githubusercontent.com/studiocontra/contra-cms/master/media/${image.filename}`"
              :alt="image.alt"
              :width="image.width"
              :heght="image.height" 
              loading="lazy"/>
          </div >
        </template>
        <div class="marquee">
          <div class="content">
            <span v-for="i in 10" :key="i">
              {{en ? 'See case study // ' : 'Ver caso de estudio // ' }}
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
        en: {
          type: Boolean,
          default: false
        }
    },
}
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/components/project-card";
</style>
