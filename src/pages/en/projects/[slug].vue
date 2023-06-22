<template>
  <div
    v-if="project"
    class="single-work">
    <Head>
      <Title> {{ project.title }} | Contra Studio</Title>
      <Meta name="description" :content="project.extract"/>
    </Head>

    <Header theme="dark" :en="true" />
    <ProjectHeadline
      :headline="project.extract"
      :client="project.title"
      :logo="project.link.logo.url"
      :logoAlt="project.link.logo.alt"
      :project-link="project.link.url"
      :isVimeo="isVimeo"
      :image="project.projectContent.layout[0].image"
      :video-id="isVimeo ? project.projectContent.layout[0].vimeo : false "/>
    <ProjectContent
      :deliverables="project.projectContent.layout[0].deliverables"
      :brief="project.projectContent.layout[0].brief"
      :solution="project.projectContent.layout[0].solution" />
    <ProjectImages
      class="js-toggle-bg"
      :images="images" />
    <ProjectNextProject
      :name="nextName"
      :image="nextImage"
      :slug="nextSlug"
    />
    <Footer :en="true"/>
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

    const { PAYLOAD_PUBLIC_URL } = useRuntimeConfig();
    const project = await $fetch(`${PAYLOAD_PUBLIC_URL}/projects?where[slug][equals]=${slug}&locale=en`);
    const images = project.docs[0].projectContent.layout.slice(1, project.docs[0].projectContent.layout.length)

    const id = project.docs[0].nextProject
    const nextProject =  await $fetch(`${PAYLOAD_PUBLIC_URL}/projects/${id}?locale=en`)
    const isVimeo = project.docs[0].projectContent.layout[0].isVimeo

    return{ 
      project: project.docs[0],
      images,
      isVimeo,
      nextName: nextProject.title,
      nextImage: nextProject.preview,
      nextSlug: nextProject.slug,
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
        backgroundColor: '#0f0f0f',
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
