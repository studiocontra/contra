<template>
  <div
    v-if="projectData"
    class="single-work">
    <Header theme="dark" />
    <ProjectHeadline
      :headline="projectData.excerpt.rendered"
      :client="projectData.acf.client_name"
      :logo="projectData.acf.client_logo || {}"
      :project-link="projectData.acf.project_link.url"
      :image="projectData.acf.main_image"
      :video-id="projectData.acf.main_video" />
    <ProjectContent
      :deliverables="projectData.acf.deliverables"
      :brief="projectData.acf.brief"
      :solution="projectData.acf.solution" />
    <ProjectImages
      class="js-toggle-bg"
      :images="projectData.acf.images" />
    <ProjectNextProject
      v-if="nextProjectData"
      :name="nextProjectData.title.rendered"
      :slug="nextProjectData.slug"
      :image="nextProjectData.acf.main_image" />
    <Footer />
  </div>
</template>

<script>
import mixins from '@/assets/js/mixins';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'ProjectPage',
  mixins: [mixins],
  data() {
    return {
      changeBgDark: null,
    };
  },
  async setup() {
    const {
      currentRoute: {
        value: {
          params: {
            slug
          }
        }
      }
    } = useRouter();


    const { API_BASE_URL } = useRuntimeConfig();

    const [projectData] = await $fetch(`${API_BASE_URL}/projects/?slug=${slug}&acf_format=standard`);
    const [nextId] = projectData.acf.next_project;
    let nextProjectData = false;

    if (nextId) {
      nextProjectData = await $fetch(`${API_BASE_URL}/projects/${nextId.ID}?acf_format=standard`);
    }

    return {
      projectData,
      nextProjectData
    }
  },
  mounted() {
    setTimeout(() => {
      this.changeBgDark = gsap.timeline({
        scrollTrigger: {
          trigger: '.js-toggle-bg',
          start: 'top 50%',
          end: '+=500',
          scrub: true,
        }
      })
      .to('.single-work', {
        backgroundColor: '#00001A',
      });
    }, 750);

    window.addEventListener('resize', () => this.changeBgDark.scrollTrigger.refresh())
  },
  watch: {
    // nextProjectData(newVal) {
    //   this.changeBgDark.restart();
    // }
  }
}
</script>

<style lang="scss" scoped>
  .single-work {
    background-color: $white;
  }
</style>
