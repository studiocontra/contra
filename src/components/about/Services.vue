<template>
  <div class="about-services">
    <div class="container">
      <div class="row justify-between">
        <div class="col-md-4">
          <div class="services__headline">
            <h2 class="title">
              Services
            </h2>

            <div class="text">
              <p>
                Combining a multidisciplinary team, we have the skill-sets to create meaningful products through our services.
              </p>
            </div>

            <Link
              theme="dark"
              text="Work with Us"
              link="/contact" />
          </div>
        </div>

        <div class="col-md-6">
          <div class="services-accordion">
            <div class="single-accordion">
              <div class="accordion__headline js-services-accordion">
                <h3 class="title title--small">
                  Design
                </h3>

                <div class="icon"></div>
              </div>

              <div class="accordion__content">
                <div class="text">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                  </p>

                  <ul>
                    <li>
                      UX/UI Design
                    </li>
                    <li>
                      Prototyping y Wireframing
                    </li>
                    <li>
                      Design Systems
                    </li>
                    <li>
                      Motion Design
                    </li>
                    <li>
                      UX Content & Guidelines
                    </li>
                    <li>
                      Design Research
                    </li>
                    <li>
                      Apps & digital platforms design
                    </li>
                    <li>
                      Interactive & experiencial design
                    </li>
                    <li>
                      Product Design.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="single-accordion">
              <div class="accordion__headline js-services-accordion">
                <h3 class="title title--small">
                  Technology
                </h3>

                <div class="icon"></div>
              </div>

              <div class="accordion__content">
                <div class="text">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                  </p>
                </div>
              </div>
            </div>

            <div class="single-accordion">
              <div class="accordion__headline js-services-accordion">
                <h3 class="title title--small">
                  Digital Innovation
                </h3>

                <div class="icon"></div>
              </div>

              <div class="accordion__content">
                <div class="text">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                  </p>

                </div>
              </div>
            </div>

            <div class="single-accordion">
              <div class="accordion__headline js-services-accordion">
                <h3 class="title title--small">
                  Strategy
                </h3>

                <div class="icon"></div>
              </div>

              <div class="accordion__content">
                <div class="text">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                  </p>
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
  mounted() {
    setTimeout(() => {
      accordion('.js-services-accordion');
    }, 750);
  }
}
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/about/services";
</style>