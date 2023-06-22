<template>
  <div
    v-if="homeData"
    class="page-home">
    <Head>
      <Title>Contra Studio</Title>
      <Meta name="description" :content="homeData.intro" />
    </Head>

    <Header
      isHome
      :en="true" />
    <HomeHero
      :data="homeData"/>
    <HomeProjects
      v-if="projects"
      :en="true"
      :projects="projects"
      :projectsContent="projectsContent" />
    <AboutAwards
      :data="awards" />
    <Updates
      :en="true"
      theme="light"
      :updates="updates"
      :updatesAddon="updatesAddon" />
    <Footer :en="true"/>
  </div>
</template>

<script>
import mixins from '@/assets/js/mixins';

export default {
  name: 'HomePage',
  mixins: [mixins],
  data() {
    return {
      updates: null,
      updatesAddon: null,
    };
  },
  async setup() {
    const { PAYLOAD_PUBLIC_URL } = useRuntimeConfig();
    let page = await $fetch(`${PAYLOAD_PUBLIC_URL}/pages/648cb65ba4fe9b50847f9f25?locale=en`);
    return {
      homeData: page,
      projectsContent: page.Layout[1],
      projects: page.Layout[2].featuredProjects,
      awards: page.Layout[3],
    };
  },
  async created() {
    const { PAYLOAD_PUBLIC_URL } = useRuntimeConfig()
    let updates = await $fetch(`${PAYLOAD_PUBLIC_URL}/updates?locale=en/`);

    this.updates = updates.docs.filter(update => update.status !== 'draft').slice(0, 3)
    this.updatesAddon = updates.docs.slice(4, 8)
  }
}
</script>

<style lang="scss" scoped>
  .page-home {
    background-color: $blue;
  }
</style>
