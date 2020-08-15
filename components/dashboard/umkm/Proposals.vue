<template>
  <div class="flex flex-wrap">
    <div class="w-full">
      <n-link to="/dashboard/create-proposal">
        <Button>
          <div class="flex justify-between space-x-4">
            <PlusIcon /> <span>Submit a new Proposal</span>
          </div>
        </Button>
      </n-link>
    </div>
    <div class="w-full mt-12">
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
import { PlusIcon } from 'vue-feather-icons'
import ProposalItem from '~/components/dashboard/umkm/partials/ProposalItem'

export default {
  name: 'Proposals',
  components: {
    PlusIcon,
    ProposalItem,
  },
  data() {
    return {
      proposals: [
        {
          id: 1,
          name: 'Kachang Ijo',
          price: 1000000,
          profit_sharing: 30,
          contract_period: 4,
          stock: 27,
        },
        {
          id: 2,
          name: 'Kachang Merah',
          price: 1000000,
          profit_sharing: 17,
          contract_period: 6,
          stock: 11,
        },
        {
          id: 3,
          name: 'Kachang Putih',
          price: 1000000,
          profit_sharing: 27,
          contract_period: 8,
          stock: 57,
        },
        {
          id: 4,
          name: 'Kachang Hitam',
          price: 1000000,
          profit_sharing: 10,
          contract_period: 4,
          stock: 33,
        },
        {
          id: 5,
          name: 'Kachang Pink',
          price: 1000000,
          profit_sharing: 40,
          contract_period: 12,
          stock: 342,
        },
      ],
    }
  },
}
</script>
