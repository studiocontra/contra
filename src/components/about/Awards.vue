<template>
  <div class="container">
    <div class="about-awards">
        <div class="row justify-between">
          <div class="col-md-5">
            <div class="about-awards__intro">
              <h4 class="title">
                {{ data.headline }}
              </h4>

              <div class="text" v-html="data.intro"></div>
            </div>
          </div>

          <div class="col-md-7 col-lg-6">
            <div
              v-for="(cat, idx) in data.awards"
              :key="idx"
              class="awards__group">
              <div class="awards__headline">
                <h5 class="title title--small">
                  {{ cat.title }}
                </h5>
                <span>
                  X{{ cat.awards.length }}
                </span>
              </div>

              <div class="awards__list">
                <div
                  v-for="(award, idx2) in cat.awards"
                  :key="idx2"
                  class="single-award">
                  <h6>
                    {{ award.project }}
                  </h6>
                  <p>
                    {{ award.award }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutAwards',
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  },
}
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/about/awards";
</style>