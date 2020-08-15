<template>
  <div class="flex flex-wrap">
    <div v-if="!$fetchState.pending" class="w-full mt-12">
      <div class="flex flex-wrap items-center">
        <div
          v-for="proposal in proposals"
          :key="proposal.id"
          class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mb-8 px-2"
        >
          <ProposalItem :proposal="proposal" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProposalItem from '~/components/dashboard/umkm/partials/ProposalItem'

export default {
  name: 'Proposals',
  components: {
    ProposalItem,
  },
  async fetch() {
    const { data } = await this.$axios.post('/api/v1/sbo/proposals')
    this.proposals = data.list
  },
  data: () => ({
    proposals: [],
  }),
}
</script>
