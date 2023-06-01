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
              <span v-html="tag.name"></span>
            </div>
          </template>
        </div>

        <template v-if="image">
          {{ console.log(image) }}
          <div v-if="full">
            <NuxtImg v-if="((image.title) === 'bt-studio-2')" 
              src="https://admin.studiocontra.co/wp-content/uploads/2022/12/bt-studio-2.gif" 
              :sizes="`
                xs:${image.sizes.small['small-width']}
                sm:${image.sizes.small['small-width']}
                md:${image.sizes.card['card-width']}
                lg:${image.sizes['half-page-width']}
                xl:${image.sizes['full-page-width']}
              `"
              :alt="image.title"
              width="1920"
            />
            <NuxtImg v-else
              :src="image.url" 
              :sizes="`
                xs:${image.sizes.small['small-width']}
                sm:${image.sizes.small['small-width']}
                md:${image.sizes.card['card-width']}
                lg:${image.sizes['half-page-width']}
                xl:${image.sizes['full-page-width']}
              `"
              :alt="image.title"
            />
          </div >
          <div v-else>
            <NuxtImg 
              :src="image.url" 
              :sizes="`
                xs:${image.sizes.small['small-width']}
                sm:${image.sizes.small['small-width']}
                md:${image.sizes.card['card-width']}
                lg:${image.sizes['half-page-width']}
                xl:${image.sizes['full-page-width']}
              `"
              :alt="image.title"
            />
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
export default {
  name: 'ProjectCard',
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
  }
}
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/components/project-card";
</style>
