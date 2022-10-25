<template>
  <div
    v-if="homeData"
    class="page-home">
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
    <News
      theme="light"
      :data="allNews" />
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
      allNews: null,
      allProjects: null,
    };
  },
  async setup() {
    const { API_BASE_URL } = useRuntimeConfig();

    let { acf } = await $fetch(`${API_BASE_URL}/pages/2?per_page=100`);

    return {
      homeData: acf
    };
  },
  async created() {
    const { API_BASE_URL } = useRuntimeConfig();

    let [allCategories, allNews] = await Promise.all([
      $fetch(`${API_BASE_URL}/categories?per_page=100&_fields=id,name`),
      $fetch(`${API_BASE_URL}/news?per_page=100&_fields=acf,title&acf_format=standard`)
    ]);

    const allProjects = await Promise.all(this.homeData.our_work.projects.map(async (item) => {
      const data = await $fetch(`${API_BASE_URL}/projects/${item.project}?_fields=acf.preview_image,categories,excerpt,slug,title&acf_format=standard`);

      return {
        'data': data,
        'size': item.size
      }
    }));

    this.allCategories = allCategories;
    this.allNews = allNews;
    this.allProjects = allProjects;
  },
}
</script>

<style lang="scss" scoped>
  .page-home {
    background-color: $blue;
  }
</style>
