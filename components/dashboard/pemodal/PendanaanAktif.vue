<template>
  <div class="flex flex-wrap">
    <div v-for="item in items" :key="item.productName" class="w-full">
      <ItemPendanaanAktif
        :product-name="item.productName"
        :return-rate="item.returnRate"
        :contract-duration="item.contractDuration"
        :price-per-unit="item.pricePerUnit"
        :stock-amount="item.stockAmount"
      />
    </div>
  </div>
</template>

<script>
import ItemPendanaanAktif from './ItemPendanaanAktif'
export default {
  name: 'PendanaanAktif',
  components: {
    ItemPendanaanAktif,
  },
  data: () => ({
    items: [
      {
        productName: 'Product ye',
        returnRate: Math.floor(Math.random() * 10),
        contractDuration: Math.floor(Math.random() * 10),
        pricePerUnit: 2000000,
        stockAmount: Math.floor(Math.random() * 50),
      },
      {
        productName: 'Product',
        returnRate: Math.floor(Math.random() * 10),
        contractDuration: Math.floor(Math.random() * 10),
        pricePerUnit: 2000000,
        stockAmount: Math.floor(Math.random() * 50),
      },
      {
        productName: 'Product 531',
        returnRate: Math.floor(Math.random() * 10),
        contractDuration: Math.floor(Math.random() * 10),
        pricePerUnit: 2000000,
        stockAmount: Math.floor(Math.random() * 50),
      },
      {
        productName: 'Product 765',
        returnRate: Math.floor(Math.random() * 10),
        contractDuration: Math.floor(Math.random() * 10),
        pricePerUnit: 2000000,
        stockAmount: Math.floor(Math.random() * 50),
      },
    ],
  }),
}
</script>
