<template>
  <div class="page-home">
    <Head>
      <Title>Contra Studio</Title>
    </Head>

    <Header isHome />
    <HomeHero
      :data="homeData.hero"/>
    <HomeProjects
      v-if="allProjects"
      :projects-data="allProjects"
      :categories="allCategories" />
    <AboutAwards
      :data="homeData.awards" />
    <News theme="light" />
    <Footer />
  </div>
</template>

<script>
import mixins from '@/assets/js/mixins';

export default {
  name: 'HomePage',
  mixins: [mixins],
  async setup() {
    const { API_BASE_URL } = useRuntimeConfig();

    const { acf } = await $fetch(`${API_BASE_URL}/pages/2`);
    const allCategories = await $fetch(`${API_BASE_URL}/categories`);

    const allProjects = await Promise.all(acf.our_work.projects.map(async (item) => {
      const data = await $fetch(`${API_BASE_URL}/projects/${item.project}`);

      return {
        'data': data,
        'size': item.size
      }
    }));

    console.log(acf);

    return {
      allCategories,
      allProjects,
      homeData: acf,
    }
  },
}
</script>

<style lang="scss" scoped>
  .page-home {
    background-color: $blue;
  }
</style>
