<template>
  <div
    class="updates-card"
    :class="[`updates-card--${theme}`, {
      'updates-card--small': small
    }]">
    <a
      v-if="!content && !small"
      :href="en ? `/en/updates/${link}` : `/updates/${link}`"
      :aria-label="`Lee más sobre ${name}`">
      <div
        class="updates-card__img">
        <LazyNuxtImg 
          v-if="image"
          :src="`https://raw.githubusercontent.com/studiocontra/contra-cms/master/media/${image}`"
          :alt="name"
          width="300px"
          height="300px"
          loading="lazy"
        />
      </div>
      <div class="updates-card__content">
        <div class="title title--small" v-html="name"></div>
        <div class="text text--small" v-html="description"></div>
      </div>
    </a>

    <div v-else-if="content && !small">
      <div
        class="updates-card__img">
        <LazyNuxtImg 
          v-if="image"
          :src="`https://raw.githubusercontent.com/studiocontra/contra-cms/master/media/${image}`"
          :alt="name"
          width="300px"
          height="300px"
          loading="lazy"
        />
      </div>
      <div class="updates-card__content">
        <div class="title title--small">
          <template v-for="node in content"> 
            <span v-if="node.text">{{ node.text }}</span>
            <a v-if="node.type === 'link'" :href="node.url">{{ node.children[0].text }}</a>
          </template>
        </div>
      </div>
    </div>

    <div v-else>
      <div class="updates-card__content">
        <div class="title title--small">
          <p v-if="content">
            <a :href="en ? `/en/updates/${link}` : `/updates/${link}`" v-if="(typeof content === 'string')">
              {{ content }} 
            </a>
            <template v-else v-for="node in content"> 
              <span v-if="node.text">{{ node.text }}</span>
              <a v-if="node.type === 'link'" :href="node.url">{{ node.children[0].text }}</a>
            </template>
          </p>
          <p v-else>
            {name}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        small: {
            type: Boolean,
            default: false,
        },
        theme: {
            type: String,
            default: "light",
        },
        name: {
            type: String,
        },
        content: {
            type: [String, Array],
        },
        description: {
            type: String,
        },
        image: {
            type: String,
            default: ""
        },
        link: {
            type: [String, Object],
            default: () => { }
        },
        en: {
          type: Boolean,
          default: false
        }
    },
}
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/components/updates-card";
</style>
