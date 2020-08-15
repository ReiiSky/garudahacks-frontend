<template>
  <form enctype="multipart/form-data" @submit.prevent="submitRequest">
    <div class="flex flex-wrap">
      <div class="w-full md:w-1/2">
        <h3 class="font-bold text-xl md:text-4xl mb-12">
          Request a Product
        </h3>
        <div class="mb-6">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="product-name"
            >Product Name</label
          >
          <input
            id="product-name"
            v-model="productName"
            class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:border-gray-700"
            type="text"
            required
          />
        </div>
        <div class="mb-6">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="description"
            >Description</label
          >
          <textarea
            id="description"
            v-model="description"
            class="appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:border-gray-700"
            required
          ></textarea>
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="stock"
            >Stock Amount</label
          >
          <input
            id="stock"
            v-model="totalStock"
            type="number"
            class="appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:border-gray-700"
            required
          />
        </div>
      </div>
      <div class="w-full md:w-1/2 md:pl-6">
        <div
          class="relative p-6 min-h-full border-2 border-gray-500 border-dashed rounded-lg cursor-pointer"
        >
          <h1 class="font-medium text-center text-4xl">Upload an image</h1>
          <input
            type="file"
            name="image"
            accept="image/*"
            class="absolute opacity-0 top-0 left-0 w-full min-h-full cursor-pointer"
          />
        </div>
      </div>
    </div>
    <Button native-type="submit" class="w-full mt-12">Submit</Button>
  </form>
</template>

<script>
export default {
  name: 'MakeRequestForm',
  data: () => ({
    productName: '',
    description: '',
    totalStock: 0,
  }),
  methods: {
    async submitRequest() {
      const response = await this.$axios.post('/api/v1/com/request', {
        productName: this.productName,
        description: this.description,
        totalStock: Number(this.totalStock),
      })

      if (response.status === 201) {
        this.$router.push('/dashboard')
      }
    },
  },
}
</script>
