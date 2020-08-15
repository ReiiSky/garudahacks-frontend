<template>
  <div class="bg-white rounded-lg overflow-hidden shadow-lg">
    <img
      class="w-full h-full md:h-64 object-cover"
      :src="`https://source.unsplash.com/random?tag=${proposal.productName}`"
    />
    <div class="px-6 py-4 text-center break-words">
      <div class="font-bold text-xl mb-2">{{ proposal.productName }}</div>
      <div class="mb-2">
        <p class="text-gray-700 text-base">{{ proposal.description }}</p>
      </div>
      <div class="mb-4">
        <p class="text-gray-700 text-base">Contract period</p>
        <p class="text-gray-700 font-semibold">{{ proposal.contract }}</p>
      </div>
      <div class="mb-4">
        <p class="text-gray-700 text-base">Stock</p>
        <p class="text-gray-700 font-semibold">{{ proposal.stok }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  import: 'proposalItem',
  props: {
    proposal: {
      type: Object,
      required: true,
    },
  },
}
</script>
