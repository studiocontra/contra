<template>
  <div
    v-if="brief || solution || deliverables"
    class="project__content">
    <div class="container">
      <div class="row justify-between md-reverse">
        <div class="col-md-8">
          <div
            v-if="brief"
            class="content__group">
            <h2 class="title title--small">
              Contexto
            </h2>

            <div class="text">
              <p>{{ brief }}</p>
            </div>
          </div>

          <div
            v-if="solution"
            class="content__group">
            <h2 class="title title--small">
              La solución
            </h2>

            <div class="text">
              <p>{{ solution }}</p>
            </div>
          </div>
        </div>

        <div class="col-md-3">
          <div
            v-if="deliverables"
            class="content__group deliverables">
            <h2 class="title title--small">
              Servicios
            </h2>

            <div class="text">
              <template v-for="deliver in deliverables">
                <p>{{ deliver.deliverable }}</p>
              </template>
            </div>
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
      type: Array,
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