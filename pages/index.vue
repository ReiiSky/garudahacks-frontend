/* eslint-disable prettier/prettier */
<template>
  <div>
    <div class="mt-12">
      <carousel
        :per-page="1"
        :mouse-drag="false"
        :pagination-color="'#c5c5c5'"
        :pagination-position="'bottom-overlay'"
        :pagination-active-color="'#00aff5'"
      >
        <slide>
          <img src="~/assets/images/lan_umkm-1.jpg" class="carousel-image" />
        </slide>
        <slide>
          <img src="~/assets/images/lan_umkm-1.jpg" class="carousel-image" />
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
  </div>
</template>

<script>
import Hero from '~/components/home/Hero'

export default {
  components: {
    Hero,
  },
}
</script>

<style scoped>
.carousel-image {
  width: 100%;
  height: 35em !important;
}
</style>
