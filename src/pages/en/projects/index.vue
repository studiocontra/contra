<template>
  <div class="page-work">
    <Head v-if="title && intro">
      <Title>{{title}} | Contra Studio</Title>
      <Meta name="description" :content="intro" />
    </Head>

    <Header :en="true"/>
    <WorkHero :intro="intro"/>
    <transition-group name="fade">
      <Loader v-if="!projects && !projectsAddon" />
      <WorkMainProjects
        v-if="projects"
        :en="true"
        :projects="projects"
        :categories="categories"
        @hideAccordion="isAccordionVisible = false"
        @showAccordion="isAccordionVisible = true" />
      <WorkMoreProjects
        v-if="projectsAddon && isAccordionVisible"
        :projects="projectsAddon" />
    </transition-group>
    <Footer :en="true"/>
  </div>
</template>

<script>
import mixins from '@/assets/js/mixins';

export default {
  name: 'WorkPage',
  mixins: [mixins],
  data() {
    return {
      title: null,
      description: null,
      categories: null,
      projects: null,
      projectsAddon: null,
      isAccordionVisible: true,
    };
  },
  async created() {
    const { PAYLOAD_PUBLIC_URL } = useRuntimeConfig();
    let page = await $fetch(`${PAYLOAD_PUBLIC_URL}/pages/648cbaf4a72df9ea402fa049?locale=en`);
    let categories = await $fetch(`${PAYLOAD_PUBLIC_URL}/categories?locale=en`);

    console.log(page)

    this.projects = page.Layout[0].featuredProjects
    this.projectsAddon = page.Layout[0].notFeaturedProjects
    this.categories = categories.docs.reverse()
    this.title = page.title
    this.intro = page.intro
  },
}
</script>

<style lang="scss" scoped>
  .page-work {
    background-color: $blue;
  }
</style>
