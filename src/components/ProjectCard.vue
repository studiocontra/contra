<template>
  <div
    class="project"
    :class="{'project--full': full}">
    <NuxtLink :to="link">
      <div class="project__img">
        <div class="project__tags">
          <template v-if="tags.length > 0">
            <div
              v-for="(tag, idx) in tags"
              :key="idx"
              class="tag">
              {{ tag.name }}
            </div>
          </template>
        </div>

        <v-lazy-image
          v-if="full"
          :src="image.sizes['full-page']"
          :src-placeholder="image.sizes['pixel']"
        />
        <v-lazy-image
          v-if="!full"
          :src="image.sizes['half-page']"
          :src-placeholder="image.sizes['pixel']"
        />

        <div class="marquee">
          <div class="content">
            <span v-for="i in 10" :key="i">
              Explore Project //
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
import VLazyImage from "v-lazy-image";

export default {
  name: 'ProjectCard',
  components: {
    VLazyImage
  },
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
      type: Object,
      default: () => {}
    },
    link: {
      type: String,
    },
    tags: {
      type: Array,
      default: () => []
    },
  }
}
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/components/project-card";
</style>
