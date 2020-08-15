<template>
  <div class="flex flex-wrap mb-12">
    <div class="w-full md:w-1/2 md:pr-6">
      <div
        class="px-8 py-6 bg-primary text-white shadow-md rounded-lg break-words"
      >
        <h1 class="font-medium text-2xl">Total Requests</h1>
        <h1 class="font-bold text-2xl md:text-4xl">{{ totalRequests }}</h1>
      </div>
    </div>
    <div class="w-full mt-8 md:w-1/2 md:mt-0 md:pl-6">
      <div
        class="px-8 py-6 bg-success text-white shadow-md rounded-lg break-words"
      >
        <h1 class="font-medium text-2xl">Total Income</h1>
        <h1 class="font-bold text-2xl md:text-4xl">
          {{ $currency.format(totalIncome) }}
        </h1>
      </div>
    </div>
    <div class="w-full mt-24">
      <h1 class="font-semibold text-2xl">Active Requests (3)</h1>
    </div>
    <div class="w-full mt-8">
      <div v-for="(request, index) in requests" :key="index" class="mb-8">
        <ActiveRequests :request="request" />
      </div>
    </div>
  </div>
</template>

<script>
import ActiveRequests from '~/components/dashboard/perusahaan/partials/ActiveRequests'

export default {
  name: 'Statistics',
  components: {
    ActiveRequests,
  },
  data: () => ({
    totalRequests: 4,
    totalIncome: 1000000,
    requests: [
      {
        productName: 'Cakwe',
        companyName: 'PT Sumber Solusindo Pratama',
        stocks: 2,
        pricePerUnit: 2000000,
        progressFinished: false,
      },
      {
        productName: 'Cakwe',
        companyName: 'PT Sumber Solusindo Pratama',
        stocks: 2,
        pricePerUnit: 2000000,
        progressFinished: true,
      },
      {
        productName: 'Cakwe',
        companyName: 'PT Sumber Solusindo Pratama',
        stocks: 2,
        pricePerUnit: 2000000,
        progressFinished: false,
      },
    ],
  }),
}
</script>
