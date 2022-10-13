<template>
  <template v-if="link.indexOf('://') < 0">
    <NuxtLink
      class="link"
      :class="[`link--${theme}`, {
        'link--small': small
      }]"
      :to="link">
      <span>
        {{ text }}
      </span>

      <div class="icon">
        <svg viewBox="0 0 18 15">
          <path d="M9.59961 1.2L15.9996 7.6L9.59961 14" />
          <path d="M0 7.59979L10.5143 7.59979" />
        </svg>
      </div>
    </NuxtLink>
  </template>
  <template v-else>
    <a
      class="link"
      :class="[`link--${theme}`, {
        'link--small': small
      }]"
      :href="link">
      {{ text }}
      <div class="icon">
        <svg viewBox="0 0 18 15">
          <path d="M9.59961 1.2L15.9996 7.6L9.59961 14" />
          <path d="M0 7.59979L10.5143 7.59979" />
        </svg>
      </div>
    </a>
  </template>
</template>

<script>
export default {
  name: 'MainLink',
  props: {
    text: {
      type: String,
      default: 'Learn More'
    },
    link: {
      type: String,
      default: '#'
    },
    theme: {
      type: String,
      default: 'light'
    },
    small: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/components/link";
</style>
