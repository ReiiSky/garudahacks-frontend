<template>
  <div class="bg-white rounded-lg overflow-hidden shadow-lg">
    <img
      class="w-full h-full md:h-64 object-cover"
      :src="`https://source.unsplash.com/random?tag=${request.name}`"
    />
    <div class="px-6 py-4 text-center">
      <h1 class="font-bold text-xl mb-2">{{ request.productName }}</h1>
      <h4 class="font-medium text-lg text-gray-700 mb-2">
        {{ $auth.user.profile.organizationName }}
      </h4>
      <div class="flex flex-wrap">
        <div class="w-full md:w-1/2">
          <p class="font-medium text-lg">Stock</p>
        </div>
        <div class="w-full md:w-1/2">
          <p class="font-medium text-lg">{{ request.totalStock }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  import: 'RequestItem',
  props: {
    request: {
      type: Object,
      required: true,
    },
  },
}
</script>
