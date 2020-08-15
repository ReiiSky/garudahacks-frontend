<template>
  <div>
    <div
      class="p-6 bg-white shadow-md rounded-tl-lg rounded-tr-lg duration-75 cursor-pointer hover:bg-gray-100"
      :class="isExpanded ? 'rounded-tl-lg rounded-tr-lg' : 'rounded-lg mb-4'"
      @click="expand"
    >
      <div class="flex justify-between items-center">
        <h1 class="font-medium text-2xl">{{ productName }}</h1>
        <div :class="isExpanded ? 'transform rotate-180' : null">
          <ChevronDownIcon />
        </div>
      </div>
    </div>
    <div
      v-if="isExpanded"
      class="mb-12 p-6 bg-white shadow-md border-t rounded-bl-lg rounded-br-lg"
    >
      <div class="flex flex-wrap">
        <div class="w-full text-center md:mb-0 md:w-1/2 md:text-left">
          <h1 class="font-medium text-xl text-gray-700">Return Rate</h1>
        </div>
        <div class="w-full text-center mb-4 md:mb-0 md:w-1/2 md:text-left">
          <h1 class="font-bold text-xl">{{ returnRate }}%</h1>
        </div>
        <div class="w-full text-center md:mb-0 md:w-1/2 md:text-left">
          <h1 class="font-medium text-xl text-gray-700">Contract Duration</h1>
        </div>
        <div class="w-full text-center mb-4 md:mb-0 md:w-1/2 md:text-left">
          <h1 class="font-bold text-xl">{{ contractDuration }} Months</h1>
        </div>
        <div class="w-full text-center md:mb-0 md:w-1/2 md:text-left">
          <h1 class="font-medium text-xl text-gray-700">Price</h1>
        </div>
        <div class="w-full text-center mb-4 md:mb-0 md:w-1/2 md:text-left">
          <h1 class="font-bold text-xl">
            {{ $currency.format(pricePerUnit) }}
            <span class="text-success text-lg">/unit</span>
          </h1>
        </div>
        <div class="w-full text-center md:mb-0 md:w-1/2 md:text-left">
          <h1 class="font-medium text-xl text-gray-700">Stock Amount</h1>
        </div>
        <div class="w-full text-center mb-4 md:mb-0 md:w-1/2 md:text-left">
          <h1 class="font-bold text-xl">{{ stockAmount }}</h1>
        </div>
        <div class="w-full text-center md:mb-0 md:w-1/2 md:text-left">
          <h1 class="font-medium text-xl text-gray-700">Total Price</h1>
        </div>
        <div class="w-full text-center mb-4 md:mb-0 md:w-1/2 md:text-left">
          <h1 class="font-bold text-xl">{{ $currency.format(totalPrice) }}</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ChevronDownIcon } from 'vue-feather-icons'

export default {
  name: 'ItemPendanaanAktif',
  components: {
    ChevronDownIcon,
  },
  props: {
    productName: {
      type: String,
      required: true,
    },
    returnRate: {
      type: Number,
      required: true,
    },
    contractDuration: {
      type: Number,
      required: true,
    },
    pricePerUnit: {
      type: Number,
      default: 0,
      required: true,
    },
    stockAmount: {
      type: Number,
      default: 0,
      required: true,
    },
  },
  data: () => ({
    isExpanded: false,
  }),
  computed: {
    totalPrice() {
      return this.pricePerUnit * this.stockAmount
    },
  },
  methods: {
    expand() {
      this.isExpanded = !this.isExpanded
    },
  },
}
</script>
