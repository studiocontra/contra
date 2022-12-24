<template>
  <div class="container">
    <div class="home-projects">
      <div class="intro">
        <div class="row">
          <div class="col-md-6">
            <h2 class="title">
              Nuestro trabajo
            </h2>
          </div>
          <div class="col-md-6">
            <div class="text">
              <p>
                Nuestros clientes confían en nosotros para crear experiencias innovadoras en las que el diseño digital y la tecnología desempeñan un papel fundamental. Nuestras soluciones y servicios se han implementado en diversos sectores, como fintech, arte, periodismo, hotelería y tecnología. Somos expertos en la creación de experiencias digitales donde la creatividad es el punto de unión entre marcas y usuarios. Ofrecemos servicios de alta calidad en diseño y desarrollo web, además de consultoría digital y nuevas tecnologías como AR/VR e inteligencia artificial (AI).
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
                  :link="`/proyectos/${project.data.slug}`"
                  :image="project.data.acf.preview_image"
                  :tags="projectCategories(project.data.categories)" />
              </div>
            </template>
            <template v-else>
              <div class="col-md-6">
                <ProjectCard
                  :name="project.data.title.rendered"
                  :description="project.data.excerpt.rendered"
                  :link="`/proyectos/${project.data.slug}`"
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