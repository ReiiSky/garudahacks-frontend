<template>
  <Fragment>
    <div class="px-8 py-6 bg-white shadow-lg rounded-lg">
      <h1 class="font-bold text-primary text-2xl md:text-4xl">
        {{ productName }}
      </h1>
      <h4 class="font-medium text-gray-600 text-lg md:text-xl">
        {{ companyName }}
      </h4>
      <hr class="my-8 border-gray-400 rounded-md" />
      <div class="flex flex-wrap">
        <div class="w-1/2">
          <p class="text-lg md:text-xl">Stock</p>
          <p class="text-lg md:text-xl">Price / unit</p>
        </div>
        <div class="w-1/2">
          <p class="font-bold text-lg md:text-xl">{{ stocks }}</p>
          <p class="font-bold text-lg md:text-xl">
            {{ $currency.format(pricePerUnit) }}
          </p>
          <hr class="my-2" />
          <p class="font-bold text-lg md:text-xl">
            {{ $currency.format(totalFunding) }}
            <small class="font-normal text-gray-700">Total Funding</small>
          </p>
        </div>
      </div>
      <hr class="my-8 border-gray-400 rounded-md" />
      <div class="w-full">
        <h1 class="font-bold text-2xl md:text-3xl mb-6">Progress</h1>
        <h1 class="font-medium text-lg md:text-xl mb-6">
          Products successfully produced
        </h1>
        <div class="flex flex-wrap">
          <div class="w-full md:w-4/5 bg-gray-400 shadow-md rounded-full">
            <div
              class="py-2 bg-primary shadow-primary rounded-tl-full rounded-bl-full text-white text-center"
              style="width: 50%;"
            >
              2 / 4
            </div>
          </div>
          <div class="w-full mt-6 md:w-1/5 md:mt-0 md:pl-6">
            <Button v-if="!progressFinished" size="full" disabled
              >Finish</Button
            >
            <Button v-else size="full">Finish</Button>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
</template>

<script>
import { Fragment } from 'vue-fragment'

export default {
  name: 'ActiveRequests',
  components: {
    Fragment,
  },
  data: () => ({
    productName: 'Cakwe',
    companyName: 'PT Sumber Solusindo Pratama',
    stocks: 2,
    pricePerUnit: 2000000,
    progressFinished: false,
  }),
  computed: {
    totalFunding() {
      return this.pricePerUnit * this.stocks
    },
  },
}
</script>
