<template>
  <div>
    <div class="proposals-info my-4">
      <h3 class="font-bold lg:text-3xl">Total {{ requested.length }}</h3>
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
          <div class="px-2 mt-3 text-center border-b">
            <p class="text-gray-700 text-base">Price</p>
            <p class="text-gray-700 font-semibold">Rp {{ product.price }}</p>
          </div>
          <div class="px-2 mt-3 text-center border-b">
            <p class="text-gray-700 text-base">Profit sharing</p>
            <p class="text-gray-700 font-semibold">
              {{ product.profit_sharing }}% / 1thn
            </p>
          </div>
          <div class="px-2 mt-3 text-center border-b">
            <p class="text-gray-700 text-base">Contract period</p>
            <p class="text-gray-700 font-semibold">
              {{ product.contract_period }} bulan
            </p>
          </div>
          <div id="stock-info" class="text-center mt-4">
            <p class="text-gray-700 text-base">Stock</p>
            <p class="text-gray-700 font-semibold">{{ product.stock }}</p>
          </div>
          <Button class="w-full mt-3">
            <a href="#" class="w-full px-12 py-2">propose</a>
          </Button>
        </div>
      </div>
    </div>
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
          price: '500.000',
          profit_sharing: 30,
          contract_period: 4,
          stock: 27,
        },
        {
          id: 2,
          name: 'Kachang Merah',
          bg: 'ff0000',
          price: '420.000',
          profit_sharing: 17,
          contract_period: 6,
          stock: 11,
        },
        {
          id: 3,
          name: 'Kachang Putih',
          bg: 'fff',
          price: '700.000',
          profit_sharing: 27,
          contract_period: 8,
          stock: 57,
        },
        {
          id: 4,
          name: 'Kachang Hitam',
          bg: '000000',
          price: '120.000',
          profit_sharing: 10,
          contract_period: 4,
          stock: 33,
        },
        {
          id: 5,
          name: 'Kachang Pink',
          bg: 'ffc0cb',
          price: '1.200.000',
          profit_sharing: 40,
          contract_period: 12,
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
