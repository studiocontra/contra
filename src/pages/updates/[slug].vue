<template>
  <div
    v-if="project"
    class="single-updates">
    <Head>
      <Title>
        {{project.title}} | Contra Studio
      </Title>
      <Meta name="description" :content="description" />
    </Head>

    <Header theme="dark" />
    <main>
      <UpdatesHeadline
        :headline="project.title" 
        :date="date"
        :image="project.layout[0].media" />

      <!--<UpdatesIntro
        :data="updateData.acf.intro" />

      <UpdatesContent
        :data="updateData.acf.content" /> />-->
    </main>

    <!--<Updates
      v-if="moreContent"
      theme="dark"
      :data="mainUpdates"
      :moreData="moreUpdates">--> 

    <Footer theme="dark" />
  </div>
</template>

<script>
import mixins from '@/assets/js/mixins';

export default {
  name: 'ProjectPage',
  mixins: [mixins],
  async setup() {
    const {
      currentRoute: {
        value: {
          params: {
            slug
          }
        }
      }
    } = useRouter();

    const { PAYLOAD_PUBLIC_URL } = useRuntimeConfig();
    const project = await $fetch(`${PAYLOAD_PUBLIC_URL}/updates?where[slug][equals]=${slug}`);
    const description = project.docs[0].layout[1].intro[0].children[0].text

    return {
      project: project.docs[0],
      description,

    }
  },
  computed: {
    date() {
      if(this.project.id === '648b0f0daff359208cf319a6') {
        return '23.01.2023'
      }
      if(this.project.id === '648b1228aff359208cf31a08') {
        return '31.01.2023'
      }
      if(this.project.id === '648b15b0aff359208cf31b62') {
        return '06.06.2023'
      }
    },  
    mainUpdates() {
      return this.moreContent.slice(0, 3);
    },
    moreUpdates() {
      return this.moreContent.slice(3, this.moreContent.length);
    }
  }
}
</script>

<style lang="scss" scoped>
  .single-updates {
    background-color: $white;

    main {
      padding-bottom: 120px;

      :deep(.container) {
        max-width: 1200px;
        padding: 0 24px;

        @include m768 {
          padding: 0 32px;
        }
      }
    }

  }
</style>
