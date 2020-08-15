<template>
  <div>
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
          <div class="subhead text-center">
            <h3 class="lg:text-2xl text-gray-700 font-semibold">
              {{ product.name }}
            </h3>
            <p class="text-primary">{{ product.pt }}</p>
          </div>
          <p class="px-2 py-3 text-center text-gray-700 text-base">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Exercitationem nostrum minus hic sunt tempore aspernatur tempora
            quis atque.
          </p>
          <div class="text-center">
            <p class="text-gray-700 text-base">Stock</p>
            <p class="text-gray-700 font-semibold">{{ product.stock }}</p>
          </div>
          <Button class="w-full mt-3">
            <a href="#" class="w-full px-12 py-2">requested</a>
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Requests',
  data() {
    return {
      requested: [
        {
          id: 1,
          name: 'Kachang Ijo',
          bg: '008000',
          pt: 'pt.kachang ijijo',
          stock: 27,
        },
        {
          id: 2,
          name: 'Kachang Merah',
          bg: 'ff0000',
          pt: 'pt.kachang merah',
          stock: 11,
        },
        {
          id: 3,
          name: 'Kachang Putih',
          bg: 'fff',
          pt: 'pt.kachang putih',
          stock: 57,
        },
        {
          id: 4,
          name: 'Kachang Hitam',
          bg: '000000',
          pt: 'pt.kachang hitam',
          stock: 33,
        },
        {
          id: 5,
          name: 'Kachang Pink',
          bg: 'ffc0cb',
          pt: 'pt.kachang pink',
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
