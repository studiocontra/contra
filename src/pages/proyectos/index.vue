<template>
  <div class="page-work">
    <Head>
      <Title>Nuestro trabajo</Title>
      <Meta name="description" content="Algunos de nuestros proyectos de diseño, tecnología e innovación más destacados." />
    </Head>

    <Header />
    <WorkHero />
    <transition-group name="fade">
      <Loader v-if="!mainProjects && !additionalProjects" />
      <WorkMainProjects
        v-if="mainProjects"
        :projects="mainProjects"
        :categories="allCategories"
        @hideAccordion="isAccordionVisible = false"
        @showAccordion="isAccordionVisible = true" />
      <WorkMoreProjects
        v-if="additionalProjects && isAccordionVisible"
        :data="additionalProjects" />
    </transition-group>
    <Footer />
  </div>
</template>

<script>
import mixins from '@/assets/js/mixins';

export default {
  name: 'WorkPage',
  mixins: [mixins],
  data() {
    return {
      allCategories: null,
      mainProjects: null,
      additionalProjects: null,
      isAccordionVisible: true,
    };
  },
  async created() {
    const { API_BASE_URL } = useRuntimeConfig();

    // const [allData] = await $fetch(`${API_BASE_URL}/pages/?slug=work`);
    // const allCategories = await $fetch(`${API_BASE_URL}/categories?per_page=100`);

    let [[allData], allCategories] = await Promise.all([
      $fetch(`${API_BASE_URL}/pages/?slug=work`),
      $fetch(`${API_BASE_URL}/categories?per_page=100&_fields=id,name`)
    ]);

    let [mainProjects, additionalProjects] = await Promise.all([
      Promise.all(allData.acf['main_projects'].map(async (item) => {
        if(!item.project)
          return console.error('Empty Item inside Wordpress page');
        const data = await $fetch(`${API_BASE_URL}/projects/${item.project}?_fields=acf,categories,excerpt,slug,title&acf_format=standard`);
        return {
          'data': data,
          'size': item.size
        }
      })),
      Promise.all(allData.acf['additional_projects'].map(async (item) => {
        if(!item.project)
          return console.error('Empty Item inside Wordpress page');

        const data = await $fetch(`${API_BASE_URL}/projects/${item.project}?_fields=acf.images,acf.project_link,categories,excerpt,title&acf_format=standard`);

        return data;
      }))
    ]);

    this.allCategories = allCategories;
    this.mainProjects = mainProjects;
    this.additionalProjects = additionalProjects;
  },
}
</script>

<style lang="scss" scoped>
  .page-work {
    background-color: $blue;
  }
</style>
