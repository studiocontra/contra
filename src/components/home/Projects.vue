<template>
  <div class="container">
    <div class="home-projects">
      <div class="intro">
        <div class="row">
          <div class="col-md-6">
            <h2 class="title">
              Our Work
            </h2>
          </div>
          <div class="col-md-6">
            <div class="text">
              <p>
                Our clients constantly trust in us to help them to craft experiences where digital interfaces play a key role. Our solutions and services have been implemented in different sectors, such: Art, fintech, news, food, hospitality an technology.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="wrap-proyects">
        <div class="row">
          <template v-for="(project, idx) in projectsData" :key="idx">
            <template v-if="project.size === 'full'">
              <div class="col-12">
                <ProjectCard
                  full
                  :name="project.data.title.rendered"
                  :description="project.data.excerpt.rendered"
                  :link="`/work/${project.data.slug}`"
                  :image="project.data.acf.preview_image"
                  :tags="projectCategories(project.data.categories)" />
              </div>
            </template>
            <template v-else>
              <div class="col-md-6">
                <ProjectCard
                  :name="project.data.title.rendered"
                  :description="project.data.excerpt.rendered"
                  :link="`/work/${project.data.slug}`"
                  :image="project.data.acf.preview_image"
                  :tags="projectCategories(project.data.categories)" />
              </div>
            </template>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeProjects',
  props: {
    projectsData: {
      type: Object,
      default: () => {}
    },
    categories: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    projectCategories() {
      return (arr) => {
        return arr.map(
          thisCat => this.categories.filter(
            cat => cat.id === thisCat
          )[0]
        );
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/home/projects";
</style>