<template>
  <div
    v-if="homeData"
    class="page-home">
    <Head>
      <Title>Contra Studio</Title>
      <Meta name="description" content="Somos un estudio digital especializado en diseño, innovación y tecnología. Proyectos globales." />
    </Head>

    <Header
      isHome />
    <HomeHero
      :data="homeData.hero"/>
    <HomeProjects
      v-if="allProjects"
      :projects-data="allProjects"
      :categories="allCategories" />
    <AboutAwards
      :data="homeData.awards" />
    <Updates
      theme="light"
      :data="allUpdatesMain"
      :moreData="allUpdatesAddon" />
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
      allUpdatesMain: null,
      allUpdatesAddon: null,
      allProjects: null,
    };
  },
  async setup() {
    const { API_BASE_URL } = useRuntimeConfig();

    let { acf } = await $fetch(`${API_BASE_URL}/pages/2?per_page=100&_fields=acf`);

    return {
      homeData: acf
    };
  },
  async created() {
    const { API_BASE_URL } = useRuntimeConfig();

    let [allCategories, allUpdates] = await Promise.all([
      $fetch(`${API_BASE_URL}/categories?per_page=100&_fields=id,name`),
      $fetch(`${API_BASE_URL}/updates?per_page=7&_embed=wp:featuredmedia&acf_format=standard`)
    ]);

    const allProjects = await Promise.all(this.homeData.our_work.projects.map(async (item) => {
      const data = await $fetch(`${API_BASE_URL}/projects/${item.project}?_fields=acf.preview_image,categories,excerpt,slug,title&acf_format=standard`);

      return {
        'data': data,
        'size': item.size
      }
    }));

    this.allCategories = allCategories;
    this.allUpdatesMain = allUpdates.slice(0, 3);
    this.allUpdatesAddon = allUpdates.slice(3, allUpdates.length);
    this.allProjects = allProjects;
  }
}
</script>

<style lang="scss" scoped>
  .page-home {
    background-color: $blue;
  }

  a{
    display: none;
  }
</style>
