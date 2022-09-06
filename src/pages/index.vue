<template>
  <div class="page-home">
    <Head>
      <Title>Contra Studio</Title>
    </Head>

    <Header isHome />
    <HomeHero />
    <HomeProjects
      v-if="homeProjects"
      :projects-data="homeProjects"
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
      homeProjects: null,
      allCategories: null,
    };
  },
  async created() {
    const { data: { _value: homeData } } = await useFetch('http://contra.local/wp-json/wp/v2/pages/2');

    const { data: { _value: catData } } = await useFetch('http://contra.local/wp-json/wp/v2/categories');

    const allProjects = await Promise.all(homeData.acf.projects.map(async (item) => {
      const data = await $fetch(`http://contra.local/wp-json/wp/v2/projects/${item.project}?categories`);

      return {
        'data': data,
        'size': item.size
      }
    }));

    this.allCategories = catData;
    this.homeProjects = allProjects;
  }
}
</script>

<style lang="scss" scoped>
  .page-home {
    background-color: $blue;
  }
</style>
