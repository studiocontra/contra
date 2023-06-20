<template>
  <div class="container">
    <div class="home-projects">
      <div class="intro">
        <div class="row">
          <div class="col-md-6">
            <h2 class="title">
              {{ projectsContent.headline }}
            </h2>
          </div>
          <div class="col-md-6">
            <div class="text">
              <p v-html="projectsContent.content[0].children[0].text">
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="wrap-proyects">
        <div class="row">
          <template v-for="(project, idx) in projects" :key="idx">
            <template v-if="project.width === 'full'">
              <div class="col-12">
                <ProjectCard
                  full
                  :name="project.title"
                  :description="project.extract"
                  :link="`/proyectos/${project.slug}`"
                  :image="project.preview"
                  :tags="project.categories"
                />
              </div>
            </template>
            <template v-else>
              <div class="col-md-6">
                <ProjectCard
                  :name="project.title"
                  :description="project.extract"
                  :link="`/proyectos/${project.slug}`"
                  :image="project.preview"
                  :tags="project.categories"
                />
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
    projects: {
      type: Object,
      default: () => {}
    },
    projectsContent: {
      type: Object,
      default: () => {}
    },
  },
}
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/home/projects";
</style>