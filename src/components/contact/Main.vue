<template>
  <div class="main-contact">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="contact__intro">
            <h1 class="title title--big">
              Nos encantaría saber más sobre tí.
            </h1>

            <Link
              link="mailto:hi@studiocontra.co"
              text="Escríbenos un correo"/>
          </div>
        </div>

        <div class="col-lg-6">
          <div class="contact__headline">
            <h2 class="text text--small custom-title">
              Contacto
            </h2>
          </div>

          <div class="contact__content">
            <div class="row justify-between">
              <div class="col-sm-6">
                <div class="text text--small">
                  <p>
                    Para hablar de nuevos proyectos, colaboraciones, o cualquier otro tema, ponte en contacto con nosotros a través de nuestros correos o redes sociales.
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
              Síguenos
            </h2>
          </div>

          <div class="contact__content">
            <div class="row justify-between">
              <div class="col-sm-6">
                <div class="text text--small">
                  <p>
                    Sigue de cerca nuestro trabajo, actualizaciones, vacantes y mucho más:
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
              ¿Quieres ser parte de Contra Studio?
            </h2>
          </div>

          <div class="contact__content">
            <div class="row justify-between">
              <div class="col-sm-6">
                <div class="text text--small">
                  <p>
                    Siempre estamos buscando nuevos talentos y colaboradores freelance. Envíanos tu portafolio por correo electrónico.
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
  name: 'MainContact'
}
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/contact/main";
</style>
