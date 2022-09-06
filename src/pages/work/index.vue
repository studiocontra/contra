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
      additionalProjects: null,
      allCategories: null,
      mainProjects: null,
    };
  },
  async created() {
    const { data: { _value: allData } } = await useFetch('https://contra.local/wp-json/wp/v2/pages/?slug=work');

    const { data: { _value: catData } } = await useFetch('https://contra.local/wp-json/wp/v2/categories');

    const mainProjects = await Promise.all(allData[0].acf['main_projects'].map(async (item) => {
      if(!item.project)
        return console.error('Empty Item inside Wordpress page');
      const data = await $fetch(`https://contra.local/wp-json/wp/v2/projects/${item.project}`);

      return {
        'data': data,
        'size': item.size
      }
    }));

    const additionalProjects = await Promise.all(allData[0].acf['additional_projects'].map(async (item) => {
      if(!item.project)
        return console.error('Empty Item inside Wordpress page');
      const data = await $fetch(`https://contra.local/wp-json/wp/v2/projects/${item.project}`);

      return data;
    }));

    this.allCategories = catData;
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
