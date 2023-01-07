<template>
  <div
    v-if="updateData"
    class="single-updates">
    <Head>
      <Title>
        {{updateData.title.rendered}} | Contra Studio
      </Title>
    </Head>

    <Header theme="dark" />

    <main>
      <UpdatesHeadline
        :headline="updateData.title.rendered"
        :date="formattedDate"
        :image="updateData.acf.main_image" />

      <UpdatesIntro
        :data="updateData.acf.intro" />

      <UpdatesContent
        :data="updateData.acf.content" />
    </main>

    <Updates
      v-if="moreContent"
      theme="dark"
      :data="mainUpdates"
      :moreData="moreUpdates" />

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

    const { API_BASE_URL } = useRuntimeConfig();

    const [updateData] = await $fetch(`${API_BASE_URL}/updates/?slug=${slug}&_embed=wp:featuredmedia&acf_format=standard`);

    const moreContent = await $fetch(`${API_BASE_URL}/updates/?exclude=${updateData.id}&per_page=7&_embed=wp:featuredmedia&acf_format=standard`);

    return {
      updateData,
      moreContent
    }
  },
  computed: {
    formattedDate() {
      const zeroPad = (num, places) => String(num).padStart(places, '0');
      const dt = new Date(this.updateData.date);

      const day = zeroPad(dt.getDay(), 2);
      const month = zeroPad(dt.getMonth() + 1, 2);
      const year = dt.getFullYear();

      return `${day}.${month}.${year}`
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
