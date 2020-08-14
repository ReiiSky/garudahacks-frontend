<template>
  <div class="bg-white rounded overflow-hidden shadow-lg">
    <img
      class="w-full h-full md:h-64 object-cover"
      :src="`https://source.unsplash.com/random?tag=${index}`"
    />
    <div class="px-6 py-4 text-center">
      <div class="font-bold text-xl mb-2">Produk {{ index }}</div>
      <div class="mb-2">
        <p class="text-gray-700 text-base">Harga</p>
        <p class="text-gray-700 font-semibold">Rp 2,000,000</p>
      </div>
      <div class="mb-2">
        <p class="text-gray-700 text-base">Bagi Hasil</p>
        <p class="text-gray-700 font-semibold">7% Per tahun</p>
      </div>
      <div class="mb-2">
        <p class="text-gray-700 text-base">Periode Kontrak</p>
        <p class="text-gray-700 font-semibold">6 Bulan</p>
      </div>
      <div class="mb-4">
        <p class="text-gray-700 text-base">Stok</p>
        <p class="text-gray-700 font-semibold">4</p>
      </div>
      <n-link class="mb-2" :to="`/dashboard/${index}/details`">
        <Button class="w-full mb-4">Details</Button>
      </n-link>
      <n-link :to="`/dashboard/${index}/details`">
        <Button
          bg-color="bg-success"
          bg-color-hover="bg-successDark"
          shadow="success"
          hover="shadow-successDark"
          class="w-full"
          >Edit</Button
        >
      </n-link>
    </div>
  </div>
</template>

<script>
export default {
  import: 'ProductCard',
  props: {
    index: {
      type: Number,
      required: true,
    },
  },
}
</script>
