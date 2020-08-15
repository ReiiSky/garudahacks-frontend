<template>
  <div class="bg-white rounded overflow-hidden shadow-lg">
    <img
      class="w-full h-full md:h-64 object-cover"
      :src="`https://source.unsplash.com/random?tag=${product.id}`"
    />
    <div class="px-6 py-4 text-center">
      <div class="font-bold text-xl mb-2">{{ product.productName }}</div>
      <div class="mb-2">
        <p class="text-gray-700 text-base">{{ product.description }}</p>
      </div>
      <div class="mb-4">
        <p class="text-gray-700 text-base">Stock</p>
        <p class="text-gray-700 font-semibold">{{ product.totalStock }}</p>
      </div>
      <n-link
        v-if="$auth.user.profile.role === role.SBO"
        class="mb-2"
        :to="`/marketplace/${product.id}/propose`"
      >
        <Button class="w-full mb-4">Submit Proposal</Button>
      </n-link>
    </div>
  </div>
</template>

<script>
import { ROLES } from '~/types/roles'

export default {
  import: 'ProductItem',
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    role: ROLES,
  }),
}
</script>
