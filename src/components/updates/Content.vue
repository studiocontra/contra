<template>
  <div class="updates__content">
    <div class="container">
      <div class="row justify-center">
        <div class="col-11 col-sm-9 col-md-7">
          <div
            v-for="(node, idx) in data"
            :key="idx"
            class="block-content"
            :class="{
              'block-content--text': node.content,
              'block-content--image': node.media
            }">
            <template v-if="node.content">
              <p class="text">
                <template v-for="(children, idx) in node.content">
                  <br v-if="idx >= 1">
                  <br v-if="idx >= 1">
                  <template v-for="nodo in children">
                    <template v-for="element in nodo">
                      <b v-if="element.bold">{{element.text}}</b>
                      <span v-if="element.text && !element.bold">{{ element.text }}</span>
                      <a v-if="element.type === 'link'" :href="element.url" target="_blank">{{ element.children[0].text }}</a>
                    </template>
                  </template>
                </template>
              </p>
            </template>
            <template v-if="node.media">
              <LazyNuxtImg
                :src="`https://raw.githubusercontent.com/studiocontra/contra-cms/master${node.media.url}`"
                :alt="node.media.alt"
                :width="node.media.width"
                :heght="node.media.height" 
                loading="lazy"
              />
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