<template>
  <div class="page-contact">
    <Head>
      <Title>Contacto</Title>
      <Meta name="description" content="Para hablar de nuevos proyectos, colaboraciones, o cualquier otro tema" />
    </Head>

    <Header theme="blue"/>
    <Shapes>
      <div class="shape red"></div>
    </Shapes>
    <ContactMain />
  </div>
</template>

<script>
import mixins from '@/assets/js/mixins';

export default {
  name: 'WorkPage',
  mixins: [mixins],
}
</script>

<style lang="scss" scoped>
  .page-contact {
    position: relative;
    background-color: $blue;
    min-height: 100vh;
    overflow: hidden;
  }

  .shapes {
    .red {
      top: 0;
      right: 20%;
      width: 150%;
      max-width: 1600px;
      transform: translateY(-25%);

      @include m600 {
        width: 100%;
      }
      @include m992 {
        width: 60%;
        right: 60%;
      }
      @include m1400 {
        transform: translateY(-5%);
      }
      @include m1800 {
        transform: translateY(-25%);
        width: 50%;
      }
    }
  }
</style>
