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
  async setup() {
    const { API_BASE_URL } = useRuntimeConfig();

    const homeData = await $fetch(`${API_BASE_URL}/pages/2`, {
      mode: 'no-cors'
    });
    const allCategories = await $fetch(`${API_BASE_URL}/categories`, {
      mode: 'no-cors'
    });


    const allProjects = await Promise.all(homeData.acf.projects.map(async (item) => {
      const data = await $fetch(`${API_BASE_URL}/projects/${item.project}`, {
        mode: 'no-cors'
      });

      return {
        'data': data,
        'size': item.size
      }
    }));

    return {
      allCategories,
      allProjects
    }
  },
}
</script>

<style lang="scss" scoped>
  .page-home {
    background-color: $blue;
  }
</style>
