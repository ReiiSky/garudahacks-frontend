<template>
  <Fragment>
    <div
      v-if="hideActiveProposal"
      class="px-8 py-6 bg-success bg-opacity-50 shadow-success rounded-lg"
    >
      <h1 class="font-bold text-successDark text-2xl md:text-4xl">
        Transaction Completed!
      </h1>
    </div>
    <div
      class="px-8 py-6 bg-white shadow-lg rounded-lg"
      :class="{ hidden: hideActiveProposal }"
    >
      <h1 class="font-bold text-primary text-2xl md:text-4xl">
        {{ productName }}
      </h1>
      <h4 class="font-medium text-gray-600 text-lg md:text-xl">
        {{ companyName }}
      </h4>
      <hr class="my-4 md:my-8 border-gray-400 rounded-md" />
      <div class="flex flex-wrap">
        <div class="w-1/2">
          <p class="text-lg md:text-xl">Stock</p>
          <p class="text-lg md:text-xl">Price / unit</p>
        </div>
        <div class="w-1/2">
          <p class="font-bold text-lg md:text-xl">{{ initialStocks }}</p>
          <p class="font-bold text-base md:text-xl">
            {{ $currency.format(pricePerUnit) }}
          </p>
          <hr class="my-2" />
          <p class="font-bold text-base md:text-xl">
            {{ $currency.format(totalFunding) }}
            <small class="font-normal text-gray-700">Total Funding</small>
          </p>
        </div>
      </div>
      <hr class="my-4 md:my-8 border-gray-400 rounded-md" />
      <div class="flex flex-wrap">
        <div class="w-full md:w-1/2 md:pr-6">
          <h1 class="font-bold text-2xl md:text-3xl mb-6">Report</h1>
          <textarea
            id="report-text"
            class="w-full bg-gray-200 rounded-md p-2"
            name="report-text"
            placeholder="Report Text..."
          ></textarea>
        </div>
        <div class="w-full md:w-1/2">
          <div class="flex flex-col justify-center">
            <h1 class="font-medium text-2xl mb-6">Current Stocks</h1>
            <div class="flex justify-center items-center space-x-6 select-none">
              <div
                class="bg-primary p-4 rounded-full shadow-primary cursor-pointer duration-75 hover:bg-primaryDark"
                @click="increaseStocks"
              >
                <PlusIcon class="text-white" />
              </div>
              <h1 class="font-medium text-8xl">{{ stocks }}</h1>
              <div
                class="bg-primary p-4 rounded-full shadow-primary cursor-pointer duration-75 hover:bg-primaryDark"
                @click="decreaseStocks"
              >
                <MinusIcon class="text-white" />
              </div>
            </div>
          </div>
          <Button size="full" @click="finishProgress">Submit Report</Button>
        </div>
      </div>
      <hr class="my-4 md:my-8 border-gray-400 rounded-md" />
      <div class="w-full">
        <h1 class="font-bold text-2xl md:text-3xl mb-6">Progress</h1>
        <h1 class="font-medium text-lg md:text-xl mb-6">
          Products successfully produced
        </h1>
        <div class="flex flex-wrap">
          <div class="w-full md:w-4/5 bg-gray-400 rounded-full">
            <div
              class="py-2 bg-primary shadow-primary rounded-full text-white text-center duration-200"
              :style="{ width: `${progress}%` }"
            >
              &nbsp;
            </div>
          </div>
          <div class="w-full mt-6 md:w-1/5 md:mt-0 md:pl-6">
            <Button v-if="!progressFinished" size="full" disabled
              >Finish</Button
            >
            <Button v-else size="full" @click="hideActiveProposal = true"
              >Finish</Button
            >
          </div>
        </div>
      </div>
    </div>
  </Fragment>
</template>

<script>
import { Fragment } from 'vue-fragment'
import { PlusIcon, MinusIcon } from 'vue-feather-icons'

export default {
  name: 'ActiveProposals',
  components: {
    Fragment,
    PlusIcon,
    MinusIcon,
  },
  data: () => ({
    productName: 'Potato',
    companyName: 'PT Sumber Solusindo Pratama',
    initialStocks: 24,
    stocks: 24,
    pricePerUnit: 2000000,
    progressFinished: false,
    progress: 75,
    hideActiveProposal: false,
  }),
  computed: {
    totalFunding() {
      return this.pricePerUnit * this.initialStocks
    },
  },
  methods: {
    increaseStocks() {
      this.stocks++
    },
    decreaseStocks() {
      if (this.stocks < 1) {
        return
      }
      this.stocks--
    },
    finishProgress() {
      this.progress = 100
      this.progressFinished = true
    },
  },
}
</script>
