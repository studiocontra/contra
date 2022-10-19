<template>
  <div class="main-contact">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="contact__intro">
            <h1 class="title title--big">
              We would love to hear from you.
            </h1>

            <Link
              link="mailto:hi@studiocontra.co"
              text="Collaborate with us"/>
          </div>
        </div>

        <div class="col-lg-6">
          <div class="contact__headline">
            <h2 class="text text--small custom-title">
              Contact Us
            </h2>
          </div>

          <div class="contact__content">
            <div class="row justify-between">
              <div class="col-sm-6">
                <div class="text text--small">
                  <p>
                    Let's start a discussion about new projects and  collaborations, contact us through our emails or social networks.
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

          <div class="contact__headline">
            <h2 class="text text--small custom-title">
              Follow Us
            </h2>
          </div>

          <div class="contact__content">
            <div class="row justify-between">
              <div class="col-sm-6">
                <div class="text text--small">
                  <p>
                    Stay in tune with our work, careers, updates and more.
                  </p>
                </div>
              </div>
              <div class="col-sm-5">
                <a href="https://www.instagram.com/contra_studio_/" target="_blank">
                  Instagram
                </a>
                <a href="https://www.awwwards.com/contrastudio/" target="_blank">
                  Awwwards
                </a>
                <a href="https://www.linkedin.com/company/contra-studio" target="_blank">
                  LinkedIn
                </a>
              
              </div>
            </div>
          </div>

          <div class="contact__headline">
            <h2 class="text text--small custom-title">
              Be a part of Contra Studio
            </h2>
          </div>

          <div class="contact__content">
            <div class="row justify-between">
              <div class="col-sm-6">
                <div class="text text--small">
                  <p>
                    We are always looking for new talent and freelance collaborators. Send us your portfolio via email.
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
