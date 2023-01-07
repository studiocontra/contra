<template>
  <div
    class="updates-card"
    :class="[`updates-card--${theme}`, {
      'updates-card--small': small
    }]">
    <a
      v-if="!customName"
      :href="`/updates/${link}`">
      <div
        v-if="!small"
        class="updates-card__img">
        <img
          v-if="image"
          :src="image"
        />
      </div>

      <div class="updates-card__content">
        <div
          v-if="customName"
          class="title title--small"
          v-html="customName"></div>
        <div
          v-else
          class="title title--small"
          v-html="name"></div>

        <div class="text text--small" v-html="description"></div>
      </div>
    </a>
    <template v-else>
      <div
        v-if="!small"
        class="updates-card__img">
        <img
          v-if="image"
          :src="image"
        />
      </div>

      <div class="updates-card__content">
        <div
          v-if="customName"
          class="title title--small"
          v-html="customName"></div>
        <div
          v-else
          class="title title--small"
          v-html="name"></div>

        <div class="text text--small" v-html="description"></div>
      </div>
    </template>
  </div>
</template>

<script>
import VLazyImage from "v-lazy-image";

export default {
  components: {
    VLazyImage,
  },
  props: {
    small: {
      type: Boolean,
      default: false,
    },
    theme: {
      type: String,
      default: 'light',
    },
    name: {
      type: String,
    },
    customName: {
      type: String,
    },
    description: {
      type: String,
    },
    image: {
      type: String,
      default: ''
    },
    link: {
      type: [String, Object],
      default: () => {}
    },
  }
}
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/components/updates-card";
</style>
