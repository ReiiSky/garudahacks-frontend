<template>
  <div class="bg-white rounded-lg overflow-hidden shadow-lg">
    <img
      class="w-full h-full md:h-64 object-cover"
      :src="`https://source.unsplash.com/random?tag=${proposal.name}`"
    />
    <div class="px-6 py-4 text-center">
      <h1 class="font-bold text-xl mb-2">{{ proposal.name }}</h1>
      <div class="my-4">
        <p class="text-gray-700 text-base">Price</p>
        <p class="font-bold text-gray-700 text-base">
          {{ $currency.format(proposal.price) }}
        </p>
      </div>
      <div class="my-4">
        <p class="font-medium text-gray-700 text-base">Profit Sharing</p>
        <p class="font-bold text-gray-700 text-base">
          {{ proposal.profit_sharing }}%
        </p>
      </div>
      <div class="my-4">
        <p class="font-medium text-gray-700 text-base">Contract Period</p>
        <p class="font-bold text-gray-700 text-base">
          {{ proposal.contract_period }}
        </p>
      </div>
      <div class="my-4">
        <p class="font-medium text-gray-700 text-base">Stock</p>
        <p class="font-bold text-gray-700 text-base">{{ proposal.stock }}</p>
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
