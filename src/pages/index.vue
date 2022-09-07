<template>
  <div class="page-home">
    <Head>
      <Title>Contra Studio</Title>
    </Head>

    <Header isHome />
    <HomeHero />
    <HomeProjects
      v-if="allProjects"
      :projects-data="allProjects"
      :categories="allCategories" />
    <AboutAwards />
    <News theme="light" />
    <Footer />
  </div>
</template>

<script>
import mixins from '@/assets/js/mixins';

export default {
  name: 'HomePage',
  mixins: [mixins],
  data() {
    return {
      allCategories: null,
      allProjects: null,
    };
  },
  async created() {
    const { API_BASE_URL } = useRuntimeConfig();

    const homeData = await $fetch(`${API_BASE_URL}/pages/2`);
    const allCategories = await $fetch(`${API_BASE_URL}/categories`);


    const allProjects = await Promise.all(homeData.acf.projects.map(async (item) => {
      const data = await $fetch(`${API_BASE_URL}/projects/${item.project}`);

      return {
        'data': data,
        'size': item.size
      }
    }));

    // return {
    //   allCategories,
    //   allProjects
    // }

    this.allCategories = allCategories;
    this.allProjects = allProjects;
  },
}
</script>

<style lang="scss" scoped>
  .page-home {
    background-color: $blue;
  }
</style>
