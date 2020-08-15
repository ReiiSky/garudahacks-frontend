<template>
  <Fragment>
    <div class="mt-12">
      <carousel :per-page="1" :auto-play="true" :pagination-enabled="false">
        <slide>
          <img
            src="~/assets/images/lan_umkm-1.jpg"
            class="w-full carousel-image object-cover"
          />
        </slide>
        <slide>
          <img
            src="~/assets/images/lan_umkm-1.jpg"
            class="w-full carousel-image object-cover"
          />
        </slide>
      </carousel>
    </div>
    <Container class="mt-24 mb-24">
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

<style scoped>
.carousel-image {
  height: 36em !important;
}
</style>
