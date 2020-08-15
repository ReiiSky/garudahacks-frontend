<template>
  <div>
    <Container class="mt-24">
      <div class="flex flex-wrap">
        <div
          v-for="product in products"
          :key="product.id"
          class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mb-8 px-2"
        >
          <ProductItem :product="product" />
        </div>
      </div>
    </Container>
  </div>
</template>

<script>
import ProductItem from '~/components/marketplace/ProductItem'

export default {
  components: {
    ProductItem,
  },
  async asyncData({ $axios }) {
    const {
      data: { RequestList: list },
    } = await $axios.get('/api/v1/gen/marketplace')

    return {
      products: list,
    }
  },
}
</script>
