<template>
  <div class="flex justify-center items-center">
    <div class="w-full max-w-md">
      <form class="px-8 pt-6 pb-8 mb-4" @submit.prevent>
        <h3 class="font-bold text-xl md:text-4xl mb-12">Create Proposal</h3>
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
          />
        </div>
        <div class="mb-6">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="product-description"
            >Product Description</label
          >
          <textarea
            id="product-description"
            v-model="productDescription"
            class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:border-gray-700"
            type="textarea"
            placeholder="description"
          ></textarea>
        </div>
        <div class="mb-6">
          <p class="text-gray-700 font-semibold">Contract period</p>
          <div class="flex flex-wrap md:space-x-3 md:mt-2">
            <Button
              class="rounded-full"
              :class="
                contractPeriod === 3
                  ? 'border border-primary'
                  : 'border border-gray-700'
              "
              :bg-color="contractPeriod === 3 ? 'bg-primary' : 'bg-white'"
              :bg-color-hover="contractPeriod === 3 ? 'bg-primary' : null"
              :text-color="contractPeriod === 3 ? 'text-white' : 'text-black'"
              :shadow="contractPeriod === 3 ? 'shadow-primary' : false"
              size="sm"
              @click="setContractPeriod(3)"
              >3 month</Button
            >
            <Button
              class="rounded-full"
              :class="
                contractPeriod === 6
                  ? 'border border-primary'
                  : 'border border-gray-700'
              "
              :bg-color="contractPeriod === 6 ? 'bg-primary' : 'bg-white'"
              :bg-color-hover="contractPeriod === 6 ? 'bg-primary' : null"
              :text-color="contractPeriod === 6 ? 'text-white' : 'text-black'"
              :shadow="contractPeriod === 6 ? 'shadow-primary' : false"
              size="sm"
              @click="setContractPeriod(6)"
              >6 month</Button
            >
            <Button
              class="rounded-full"
              :class="
                contractPeriod === 12
                  ? 'border border-primary'
                  : 'border border-gray-700'
              "
              :bg-color="contractPeriod === 12 ? 'bg-primary' : 'bg-white'"
              :bg-color-hover="contractPeriod === 12 ? 'bg-primaryDark' : null"
              :text-color="contractPeriod === 12 ? 'text-white' : 'text-black'"
              :shadow="contractPeriod === 12 ? 'shadow-primary' : false"
              size="sm"
              @click="setContractPeriod(12)"
              >1 year</Button
            >
            <Button
              class="rounded-full"
              size="sm"
              @click="setShowOtherContractPeriodInput()"
              >other</Button
            >
          </div>
        </div>
        <div v-if="showOtherContractPeriodInput" class="mb-6">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="contract-period"
            >Contract Period</label
          >
          <input
            id="contract-period"
            v-model="contractPeriod"
            class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:border-gray-700"
            type="number"
          />
        </div>
        <div class="mb-6">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="price-per-unit"
            >Price per unit</label
          >
          <div class="flex justify-between">
            <input
              id="price-per-unit"
              v-model="pricePerUnit"
              class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:border-gray-700"
              type="number"
            />
            <input
              class="appearance-none border w-12 rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              disabled
              placeholder="45"
            />
          </div>
        </div>
        <div class="mb-6 flex justify-between">
          <p class="text-gray-700 font-semibold">total funding</p>
          <p class="text-gray-700 font-semibold">
            {{ $currency.format(1000000) }}
          </p>
        </div>
        <Button class="w-full">Send</Button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MakeProposalForm',
  data: () => ({
    productName: '',
    productDescription: '',
    pricePerUnit: 0,
    contractPeriod: 0,
    selectedContractPeriod: null,
    showOtherContractPeriodInput: false,
  }),
  methods: {
    setContractPeriod(contractPeriod) {
      this.contractPeriod = contractPeriod
      this.selectedContractPeriod = `contractPeriod${contractPeriod}`
      if (this.showOtherContractPeriodInput) {
        this.showOtherContractPeriodInput = false
      }
    },
    setShowOtherContractPeriodInput() {
      this.showOtherContractPeriodInput = true
    },
  },
}
</script>
