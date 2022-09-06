<template>
  <div class="work-projects">
    <div class="container">
      <div class="work__filters">
        <h2 class="title title--small">
          Filter
        </h2>

        <div class="filters">
          <span
            class="single-filter"
            :class="{'active': currentFilter === 'all'}"
            role="button"
            @click="toggleFilters(); filterProjects('all')">
            All
          </span>

          <span
            v-for="(cat, idx) in categories"
            :key="idx"
            class="single-filter"
            :class="{'active': currentFilter === cat.id}"
            role="button"
            @click="toggleFilters(); filterProjects(cat.id)">
            {{ cat.name }}
          </span>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="wrap-proyects">
        <div class="row">
          <transition-group name="fade">
            <template v-for="(project, idx) in filteredProjects" :key="idx">
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
          </transition-group>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WorkMainProjects',
  props: {
    projects: {
      type: Object,
      default: () => {}
    },
    categories: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      currentFilter: 'all',
      areFiltersOpen: false,
    };
  },
  methods: {
    toggleFilters() {
      if(window.innerWidth < 600) {
        this.areFiltersOpen = !this.areFiltersOpen;
      }
    },
    filterProjects(payload) {
      this.currentFilter = payload;
    },
  },
  computed: {
    filteredProjects() {
      if(this.currentFilter === 'all') {
        return this.projects;
      }

      return this.projects.filter((item) => item.data.categories.some(cat => cat === this.currentFilter));
    },
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
  @import "@/assets/scss/work/main-projects";
</style>