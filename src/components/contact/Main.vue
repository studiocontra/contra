<template>
  <div class="main-contact">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="contact__intro">
            <h1 class="title title--big">
              {{intro}}
            </h1>

            <Link
              link="mailto:hi@studiocontra.co"
              text="Escríbenos un correo"/>
          </div>
        </div>

        <div class="col-lg-6">
          <div class="contact__headline">
            <h2 class="text text--small custom-title">
              {{layout[0].headline}}
            </h2>
          </div>

          <div class="contact__content">
            <div class="row justify-between">
              <div class="col-sm-6">
                <div class="text text--small">
                  <p>
                    {{layout[0].content[0].children[0].text}}
                  </p>
                </div>
              </div>
              <div class="col-sm-5">
                <a href="mailto:hi@studiocontra.co" aria-label="Escribenos a nuestro correo">
                  hi@studiocontra.co
                </a>
              </div>
            </div>
          </div>

          <div class="contact__headline">
            <h2 class="text text--small custom-title">
              {{layout[1].headline}}
            </h2>
          </div>

          <div class="contact__content">
            <div class="row justify-between">
              <div class="col-sm-6">
                <div class="text text--small">
                  <p>
                    {{layout[1].content[0].children[0].text}}
                  </p>
                </div>
              </div>
              <div class="col-sm-5">
                <a href="https://www.instagram.com/contra_studio_/" target="_blank" aria-label="Visita nuestro Instagram"> 
                  Instagram
                </a>
                <a href="https://www.awwwards.com/contrastudio/" target="_blank" aria-label="Visita nuestro perfil en Awwwards">
                  Awwwards
                </a>
                <a href="https://www.linkedin.com/company/contra-studio" target="_blank" aria-label="Visita nuestro perfil en LinkedIn">
                  LinkedIn
                </a>
              
              </div>
            </div>
          </div>

          <div class="contact__headline">
            <h2 class="text text--small custom-title">
              {{layout[2].headline}}
            </h2>
          </div>

          <div class="contact__content">
            <div class="row justify-between">
              <div class="col-sm-6">
                <div class="text text--small">
                  <p>
                    {{layout[2].content[0].children[0].text}}
                  </p>
                </div>
              </div>
              <div class="col-sm-5">
                <a href="mailto:hi@studiocontra.co">
                  hi@studiocontra.co
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainContact',
  props: {
    intro: {
      type: String
    },
    layout: {
      type: Array
    },
  }
}
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/contact/main";
</style>
