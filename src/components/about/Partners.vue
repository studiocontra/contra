<template>
  <div class="about-partners">
    <div class="container">
      <h4 class="title title--small">
        {{ data.headline }}
      </h4>

      <div class="logos-grid">
        <template
          v-for="(item, idx) in data.logos"
          :key="idx">
          <NuxtImg
            v-if="item.partner"
            :src="item.partner.sizes.medium"
            :alt="item.partner.alt"
            width="260"
            height="130" />
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutPartners',
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  },
}
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/about/partners";
</style>