<template>
  <div class="flex flex-wrap mb-12">
    <div class="w-full md:w-1/2 md:pr-6">
      <div
        class="px-8 py-6 bg-primary text-white shadow-md rounded-lg break-words"
      >
        <h1 class="font-medium text-2xl">Total Proposals</h1>
        <h1 class="font-bold text-2xl md:text-4xl">{{ totalProposals }}</h1>
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
      <h1 class="font-semibold text-2xl">Active Proposal</h1>
    </div>
    <div class="w-full mt-8">
      <ActiveProposal />
    </div>
  </div>
</template>

<script>
import ActiveProposal from '~/components/dashboard/umkm/partials/ActiveProposal'

export default {
  name: 'Statistics',
  components: {
    ActiveProposal,
  },
  data: () => ({
    totalProposals: 4,
    totalIncome: 1000000,
  }),
}
</script>
