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
              link="mailto:hello@contrastudio.co"
              text="Work with us"/>
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
                    Feel free to reach put if you want to work, collaborate with us, or just have a chat.
                  </p>
                </div>
              </div>
              <div class="col-sm-5">
                <a href="mailto:hello@contrastudio.co">
                  hello@contrastudio.co
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
                    Stay in tune with our work, processes and news, following our social media.
                  </p>
                </div>
              </div>
              <div class="col-sm-5">
                <a href="">
                  Instagram
                </a>
                <a href="">
                  Facebook
                </a>
                <a href="">
                  LinkedIn
                </a>
                <a href="">
                  Domestika
                </a>
              </div>
            </div>
          </div>

          <div class="contact__headline">
            <h2 class="text text--small custom-title">
              Be part of Contra Studio
            </h2>
          </div>

          <div class="contact__content">
            <div class="row justify-between">
              <div class="col-sm-6">
                <div class="text text--small">
                  <p>
                    We are always looking for new talent and freelance collaborators. Send us your CV and portfolio via email.
                  </p>
                </div>
              </div>
              <div class="col-sm-5">
                <a href="mailto:hello@contrastudio.co">
                  hello@contrastudio.co
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
