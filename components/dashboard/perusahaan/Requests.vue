<template>
  <div class="flex flex-wrap">
    <div class="w-full">
      <n-link to="/dashboard/create-request">
        <Button>
          <div class="flex justify-between space-x-4">
            <PlusIcon /> <span>Submit a new Request</span>
          </div>
        </Button>
      </n-link>
    </div>
    <div class="w-full mt-12">
      <div v-if="!$fetchState.pending" class="flex flex-wrap items-center">
        <div
          v-for="request in requests"
          :key="request.id"
          class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mb-8 px-2"
        >
          <RequestItem :request="request" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { PlusIcon } from 'vue-feather-icons'
import RequestItem from '~/components/dashboard/perusahaan/partials/RequestItem'

export default {
  name: 'Requests',
  components: {
    PlusIcon,
    RequestItem,
  },
  async fetch() {
    const {
      data: { RequestList: list },
    } = await this.$axios.post('/api/v1/com/request/list')

    this.requests = list
  },
  data: () => ({
    requests: [],
  }),
}
</script>
