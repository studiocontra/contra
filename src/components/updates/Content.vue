<template>
  <div class="updates__content">
    <div class="container">
      <div class="row justify-center">
        <div class="col-11 col-sm-9 col-md-7">
          <!-- {{data}} -->
          <div
            v-for="(row, idx) in data"
            :key="idx"
            class="block-content"
            :class="{
              'block-content--text': row.acf_fc_layout === 'text',
              'block-content--image': row.acf_fc_layout === 'image'
            }">
            <template
              v-if=" row.acf_fc_layout === 'text'">
              <div
                v-if="row.text"
                class="text"
                v-html="row.text"></div>
            </template>

            <template
              v-if=" row.acf_fc_layout === 'image'">
              <picture v-if="row.image">
                <source :srcset="row.image.sizes.card"  media="(min-width: 450px)">
                <LazyNuxtImg
                  :src="row.image.sizes.small"
                  :alt="row.image.alt"
                  :width="row.image.width"
                  :heght="row.image.height" 
                  loading="lazy"/>
              </picture>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UpdatesContent',
  props: {
    data: {
      type: [Array, Boolean],
      default: () => [],
    },
  }
}
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/updates/content";
</style>