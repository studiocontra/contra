<template>
  <div class="page-work">
    <Head>
      <Title>Our Work</Title>
    </Head>

    <Header />
    <WorkHero />
    <transition-group name="fade">
      <Loader v-if="!mainProjects && !additionalProjects" />
      <WorkMainProjects
        v-if="mainProjects"
        :projects="mainProjects"
        :categories="allCategories" />
      <WorkMoreProjects
        v-if="additionalProjects"
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
    };
  },
  async created() {
    const { API_BASE_URL } = useRuntimeConfig();

    const [allData] = await $fetch(`${API_BASE_URL}/pages/?slug=work`);

    const allCategories = await $fetch(`${API_BASE_URL}/categories`);

    const mainProjects = await Promise.all(allData.acf['main_projects'].map(async (item) => {
      if(!item.project)
        return console.error('Empty Item inside Wordpress page');
      const data = await $fetch(`${API_BASE_URL}/projects/${item.project}`);

      return {
        'data': data,
        'size': item.size
      }
    }));

    const additionalProjects = await Promise.all(allData.acf['additional_projects'].map(async (item) => {
      if(!item.project)
        return console.error('Empty Item inside Wordpress page');
      const data = await $fetch(`${API_BASE_URL}/projects/${item.project}`);

      return data;
    }));

    // return {
    //   allCategories,
    //   mainProjects,
    //   additionalProjects
    // }

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
