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
            <div class="title title--medium" v-html="data.intro"></div>
          </div>
        </div>
      </div>

      <div
        class="team__grid">
        <div class="row">
          <template
            v-for="(member, idx) in data.team"
            :key="idx">
            <div
              class="col-md-6 col-lg-4">
              <div class="main-team-card">
                <div 
                  class="main-team-card__image">
                  <NuxtImg :src="member.image.url" :alt="member.image.alt" />
                </div>

                <div class="main-team-card__content">
                  <h5 class="text text--big">
                    {{ member.name }}
                  </h5>
                  <h6 class="role">
                    {{ member.role }}
                  </h6>

                  <div class="main-team-card__description">
                    <div class="text" v-html="member.description"></div>
                  </div>
                </div>
              </div>
            </div>
          </template>
          <template 
            v-for="(member, idx) in data.membersNotFeatured"
            :key="idx">
            <div
              class="col-sm-6 col-md-3">
              <div class="team-card">
                <h6 class="title title--small">
                  {{ member.name }}
                </h6>
                <p>
                  {{ member.role }}
                </p>
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