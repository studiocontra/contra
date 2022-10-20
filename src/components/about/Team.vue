<template>
  <div class="container">
    <div class="about-team">
      <div class="team__intro">
        <div class="row">
          <div class="col-md-4 col-lg-6">
            <h4 class="title">
              {{ data.headline }}
            </h4>
          </div>
          <div class="col-md-8 col-lg-6">
            <div class="title title--medium" v-html="data.introduction"></div>
          </div>
        </div>
      </div>

      <div
        v-if="hasTeamMembers"
        class="team__grid">
        <div class="row">
          <template
            v-for="(person, idx) in data.team_members"
            :key="idx">
            <!-- Main Team -->
            <div
              v-if="person.featured"
              class="col-md-6 col-lg-4">
              <div class="main-team-card">
                <div 
                  v-if="person.image"
                  class="main-team-card__image">
                  <img :src="person.image.sizes.medium" :alt="person.image.alt">
                </div>

                <div class="main-team-card__content">
                  <h5 class="text text--big">
                    {{ person.name }}
                  </h5>
                  <h6 class="role">
                    {{ person.role }}
                  </h6>

                  <div class="main-team-card__description">
                    <div class="text" v-html="person.description"></div>
                  </div>
                </div>
              </div>
            </div>

            <!-- All team -->
            <div
              v-else
              class="col-sm-6 col-md-3">
              <div class="team-card">
                <h6 class="title title--small">
                  {{ person.name }}
                </h6>
                <p>
                  {{ person.role }}
                </p>

                <div
                  v-if="person.image"
                  class="team-card__image">
                  <img :src="person.image.url" :alt="person.image.alt">
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutTeam',
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  },
   computed: {
    hasTeamMembers() {
      return this.data.team_members.length > 0;
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/about/team";
</style>