<template>
  <Fragment>
    <div class="mt-12">
      <carousel :per-page="1" :auto-play="true" :pagination-enabled="false">
        <slide>
          <img src="~/assets/images/lan_umkm-1.jpg" class="carousel-img" />
        </slide>
        <slide>
          <img src="~/assets/images/lan_umkm-1.jpg" class="carousel-img" />
        </slide>
      </carousel>
    </div>
    <Container class="my-24">
      <div class="flex flex-wrap">
        <div class="w-full">
          <Hero />
        </div>
      </div>
    </Container>
  </Fragment>
</template>

<script>
import { Fragment } from 'vue-fragment'
import Hero from '~/components/home/Hero'

export default {
  components: {
    Fragment,
    Hero,
  },
}
</script>

<style lang="scss" scoped>
.carousel-img {
  height: 36rem;

  @media (max-width: 768px) {
    height: 16rem;
  }

  @apply w-full;
  @apply object-cover;
}
</style>
