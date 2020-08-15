<template>
  <div>
    <Container class="mt-24">
      <div class="w-full mb-20">
        <div class="flex flex-col sm:flex-row sm:items-center sm:space-x-12">
          <button class="focus:outline-none">
            <h1 class="text-gray-700 font-semibold text-xl">
              Product Requests
            </h1>
          </button>
        </div>
        <hr class="mt-4 border border-gray-400 rounded-md" />
      </div>
      <div class="flex flex-wrap">
        <div
          v-for="product in requested"
          :key="product.id"
          class="card bg-white rounded-lg shadow-lg mx-3 mb-5"
        >
          <img
            :src="
              'http://fakeimg.pl/256x192/' +
              product.bg +
              '/ccc/?text=' +
              product.name
            "
            class="h-48 rounded-t-lg"
          />
          <div class="card-content p-3">
            <h3 class="lg:text-2xl text-center text-gray-700 font-semibold">
              {{ product.name }}
            </h3>
            <div class="px-2 mt-3 text-center">
              <p class="text-gray-700 text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit,
                Repellendus aut dignissimos excepturi.
              </p>
            </div>
            <div id="stock-info" class="text-center mt-4">
              <p class="text-gray-700 text-base">Stock</p>
              <p class="text-gray-700 font-semibold">{{ product.stock }}</p>
            </div>
            <Button class="w-full mt-3">
              <a href="#" class="w-full px-12 py-2">Detail</a>
            </Button>
          </div>
        </div>
      </div>
    </Container>
  </div>
</template>

<script>
export default {
  name: 'Proposals',
  data() {
    return {
      requested: [
        {
          id: 1,
          name: 'Kachang Ijo',
          bg: '008000',
          stock: 27,
        },
        {
          id: 2,
          name: 'Kachang Merah',
          bg: 'ff0000',
          stock: 11,
        },
        {
          id: 3,
          name: 'Kachang Putih',
          bg: 'fff',
          stock: 57,
        },
        {
          id: 4,
          name: 'Kachang Hitam',
          bg: '000000',
          stock: 33,
        },
        {
          id: 5,
          name: 'Kachang Pink',
          bg: 'ffc0cb',
          stock: 342,
        },
      ],
    }
  },
}
</script>

<style scoped>
.card {
  width: 16rem;
  height: auto;
}
</style>
