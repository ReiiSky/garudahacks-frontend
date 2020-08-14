<template>
  <div>
    <Carousel />
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
import Carousel from '~/components/home/Carousel'

export default {
  components: {
    Hero,
    Carousel,
  },
}
</script>
