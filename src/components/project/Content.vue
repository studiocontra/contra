<template>
  <div class="project__content">
    <div class="container">
      <div class="row justify-between md-reverse">
        <div class="col-md-8">
          <div class="content__group">
            <h2 class="title title--small">
              Contexto
            </h2>

            <div class="text" v-html="brief"></div>
          </div>

          <div class="content__group">
            <h2 class="title title--small">
              La solución
            </h2>

            <div class="text" v-html="solution"></div>
          </div>
        </div>

        <div class="col-md-3">
          <div class="content__group deliverables">
            <h2 class="title title--small">
              Servicios
            </h2>

            <div class="text" v-html="deliverables"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectContent',
  props: {
    deliverables: {
      type: String,
      default: ''
    },
    brief: {
      type: String,
      default: ''
    },
    solution: {
      type: String,
      default: ''
    },
  }
}
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/project/content";
</style>