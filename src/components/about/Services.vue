<template>
  <div class="container">
    <div class="about-services">
      <div class="row justify-between">
        <div class="col-md-4">
          <div class="services__headline">
            <h2 class="title">
              {{ data.headline }}
            </h2>

            <div class="text" v-html="data.intro"></div>

            <Link
              :small="true"
              theme="dark"
              text="Crea un proyecto con nosotros"
              link="/contact" />
          </div>
        </div>

        <div class="col-md-6">
          <div class="services-accordion">
            <div
              v-for="(item, id) in data.servicesItems"
              :key="id"
              class="single-accordion">
              <div class="accordion__headline js-services-accordion"
              :class="{'active': id === 0}">
                <h3 class="title title--small">
                  {{ item.title }}
                </h3>

                <div class="icon"></div>
              </div>

              <div class="accordion__content">
                <div class="text">
                  <div>
                    {{ item.content[0].children[0].text }}
                  </div>

                  <div>
                    <ul>
                      <template v-for="li in item.content[1].children">
                        <li v-if="li.type === 'li'">
                          {{li.children[0].text}}
                        </li>
                      </template>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import accordion from '@/assets/js/accordion';

export default {
  name: 'AboutServices',
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  },
  mounted() {
    setTimeout(() => {
      accordion('.js-services-accordion', true);
    }, 750);
  }
}
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/about/services";
</style>