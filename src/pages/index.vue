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
// import axios from 'axios'
import mixins from '@/assets/js/mixins';

export default {
  name: 'HomePage',
  mixins: [mixins],
  async setup() {
    const { data: { value: homeData } } = await useFetch('http://contra.local/wp-json/wp/v2/pages/2');
    const { data: { value: allCategories } } = await useFetch('http://contra.local/wp-json/wp/v2/categories');

    const allProjects = await Promise.all(homeData.acf.projects.map(async (item) => {
      const data = await $fetch(`http://contra.local/wp-json/wp/v2/projects/${item.project}`);

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
