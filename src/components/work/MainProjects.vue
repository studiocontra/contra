<template>
  <div class="work-projects">
    <div class="container">
      <div class="work__filters">
        <h2 class="title title--small">
          Filtro:
        </h2>

        <div class="filters--mobile">
          <span
            class="single-filter active">
            {{ currentFilter.name }}
          </span>

          <span
            class="single-filter single-filter--toggle"
            :class="{'open': areFiltersOpen}"
            @click="toggleFilters" >
            <svg
              v-if="!areFiltersOpen"
              viewBox="0 0 18 18"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M17 13.7778L9 13.7778" />
              <path d="M5.44444 13.7778L1 13.7778" />
              <path d="M16.9991 3.66672L12.5547 3.66672" />
              <path d="M9 3.66672L1 3.66672" />
              <path d="M5.44531 16.4445L5.44531 11.1111" />
              <path d="M12.5547 6.33334L12.5547 1.00001" />
            </svg>

            <svg
              v-if="areFiltersOpen"
              class="close"
              viewBox="0 0 23 23"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M16.9707 5.65689L5.65699 16.9706" />
              <path d="M16.9707 16.9705L5.657 5.65681" />
            </svg>

          </span>
        </div>

        <div
          class="filters"
          ref="filters"
          :class="{'active': areFiltersOpen}">
          <span
            class="single-filter"
            :class="{'active': currentFilter.id === 'all'}"
            role="button"
            @click="toggleFilters(); filterProjects({
              id: 'all',
              name: 'All'
            }); $emit('show-accordion')">
            All
          </span>

          <span
            v-for="(cat, idx) in categories"
            :key="idx"
            class="single-filter"
            :class="{'active': currentFilter.id === cat.id}"
            role="button"
            @click="toggleFilters(); filterProjects({
              id: cat.id,
              name: cat.name
            }); $emit('hide-accordion')"
            v-html="cat.name"></span>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="wrap-projects">
        <div class="row">
          <transition-group name="fade">
            <template v-for="(project, idx) in filteredProjects" :key="idx">
              <template v-if="project.size === 'full'">
                <div class="col-12">
                  {{project.data.slug}}
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
                  {{project.data.slug}}
                  <ProjectCard
                    :name="project.data.title.rendered"
                    :description="project.data.excerpt.rendered"
                    :link="`/proyectos/${project.data.slug}`"
                    :image="project.data.acf.preview_image"
                    :tags="projectCategories(project.data.categories)" />
                </div>
              </template>
            </template>
          </transition-group>

          <div
            v-if="filteredProjects.length === 0"
            class="error">
            <span>
              No hay proyectos en estas categorías.
            </span>
          </div>
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
      currentFilter: {
        id: 'all',
        name: 'All'
      },
      areFiltersOpen: false,
    };
  },
  methods: {
    toggleFilters() {
      if(window.innerWidth <= 1200) {
        const filtersHeight = this.$refs['filters'].scrollHeight + 32;

        if(!this.areFiltersOpen) {
          this.$refs['filters'].style.maxHeight = `${filtersHeight}px`;
        } else {
          this.$refs['filters'].style.maxHeight = 0;
        }

        this.areFiltersOpen = !this.areFiltersOpen;
      }
    },
    filterProjects(payload) {
      this.currentFilter = payload;
    },
  },
  computed: {
    filteredProjects() {
      if(this.currentFilter.id === 'all') {
        return this.projects;
      }

      return this.projects.filter((item) => item.data.categories.some(cat => cat === this.currentFilter.id));
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