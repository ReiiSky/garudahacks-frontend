<template>
  <Container class="mt-24">
    <div class="flex flex-wrap">
      <div class="w-full mb-8">
        <n-link to="/dashboard">
          <div class="flex items-center space-x-4">
            <ChevronLeftIcon />
            <p class="font-medium text-lg">Go Back</p>
          </div>
        </n-link>
      </div>
      <div class="w-full md:w-1/2">
        <img
          class="w-full h-full object-cover rounded-md select-none"
          src="https://source.unsplash.com/random"
        />
      </div>
      <div class="w-full md:w-1/2 md:pl-4">
        <h1 class="font-medium text-6xl">
          Product {{ $route.params.productId }}
        </h1>
        <div class="mb-2">
          <p class="text-gray-700 text-base">Price</p>
          <p class="text-gray-700 font-semibold">
            {{ $currency.format(2000000) }}
          </p>
        </div>
        <div class="mb-2">
          <p class="text-gray-700 text-base">Return Rate</p>
          <p class="text-gray-700 font-semibold">7% Per tahun</p>
        </div>
        <div class="mb-2">
          <p class="text-gray-700 text-base">Contract Duration</p>
          <p class="text-gray-700 font-semibold">6 Bulan</p>
        </div>
        <div class="mb-2">
          <p class="text-gray-700 text-base">Stock</p>
          <p class="text-gray-700 font-semibold">4</p>
        </div>
      </div>
    </div>
  </Container>
</template>

<script>
import { ChevronLeftIcon } from 'vue-feather-icons'
export default {
  components: {
    ChevronLeftIcon,
  },
}
</script>
