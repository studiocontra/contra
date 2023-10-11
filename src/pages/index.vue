<template>
  <div
    v-if="homeData"
    class="page-home">
    <Head>
      <Title>Contra Studio</Title>
      <Meta name="description" :content="homeData.intro" />
    </Head>

    <Header
      isHome/>
    <HomeHero
      :data="homeData"/>
    <HomeProjects
      v-if="projects"
      :projects="projects"
      :projectsContent="projectsContent" />
    <AboutAwards
      :data="awards" />
    <Updates
      theme="light"
      :updates="updates"
      :updatesAddon="updatesAddon" />
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
      updates: null,
      updatesAddon: null,
    };
  },
  async setup() {
    const { PAYLOAD_PUBLIC_URL } = useRuntimeConfig();
    let page = await $fetch(`${PAYLOAD_PUBLIC_URL}/pages/648cb65ba4fe9b50847f9f25`);
    return {
      homeData: page,
      projectsContent: page.Layout[1],
      projects: page.Layout[2].featuredProjects,
      awards: page.Layout[3],
    };
  },
  async created() {
    const { PAYLOAD_PUBLIC_URL } = useRuntimeConfig()
    let updates = await $fetch(`${PAYLOAD_PUBLIC_URL}/updates/`);

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
