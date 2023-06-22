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

    <Header theme="dark" :en="true" />
    <main>
      <UpdatesHeadline
        :headline="project.title" 
        :date="date"
        :image="project.layout[0].media" />

      <UpdatesIntro
        :data="description" />

     <UpdatesContent
        :data="content" />
    </main>

    <Updates
      :en="true"
      theme="dark"
      :updates="updates" 
      :updatesAddon="updatesAddon"/>

    <Footer theme="dark" :en="true"/>
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
    const project = await $fetch(`${PAYLOAD_PUBLIC_URL}/updates?where[slug][equals]=${slug}&locale=en`);
    const description = project.docs[0].layout[1].intro[0].children[0].text
    const content = project.docs[0].layout.slice(2, project.docs[0].layout.length)
    let updatesData = await $fetch(`${PAYLOAD_PUBLIC_URL}/updates?locale=en`);


    const updates = updatesData.docs
                      .filter(update => update.status !== 'draft')
                      .filter(update => update.id !== project.docs[0].id)
                      .slice(0, 3)

    const updatesAddon = updatesData.docs
                          .filter(update => update.id !== project.docs[0].id)
                          .slice(4, 8)

    return {
      project: project.docs[0],
      description,
      content,
      updates,
      updatesAddon
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
