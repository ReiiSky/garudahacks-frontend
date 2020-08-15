<template>
  <div class="flex flex-wrap">
    <div class="w-full">
      <div v-for="(proposal, index) in proposals" :key="index" class="mb-8">
        <IncomingProposal
          :proposal="proposal"
          @delete-incoming-proposal="deleteIncomingProposal"
        />
      </div>
    </div>
  </div>
</template>

<script>
import IncomingProposal from '~/components/dashboard/perusahaan/partials/IncomingProposal'

export default {
  name: 'AvailableProposals',
  components: {
    IncomingProposal,
  },
  data: () => ({
    proposals: [
      {
        id: 1,
        productName: 'Sepatu',
        companyName: 'CV. Maju jaya',
        stocks: 7,
        pricePerUnit: 2000000,
        progressFinished: false,
      },
      {
        id: 2,
        productName: 'Mobil',
        companyName: 'CV. Mundur jaya',
        stocks: 2,
        pricePerUnit: 2000000,
        progressFinished: false,
      },
      {
        id: 3,
        productName: 'Kentang',
        companyName: 'CV. Bawah jaya',
        stocks: 12,
        pricePerUnit: 2000000,
        progressFinished: false,
      },
    ],
  }),
  methods: {
    deleteIncomingProposal(id) {
      this.proposals = this.proposals.filter((proposal) => proposal.id !== id)
    },
  },
}
</script>
