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
      <div class="flex flex-wrap items-center">
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
  data() {
    return {
      requests: [
        {
          id: 1,
          name: 'Kachang Ijo',
          bg: '008000',
          company: 'pt.kachang ijijo',
          stock: 27,
        },
        {
          id: 2,
          name: 'Kachang Merah',
          bg: 'ff0000',
          company: 'pt.kachang merah',
          stock: 11,
        },
        {
          id: 3,
          name: 'Kachang Putih',
          bg: 'fff',
          company: 'pt.kachang putih',
          stock: 57,
        },
        {
          id: 4,
          name: 'Kachang Hitam',
          bg: '000000',
          company: 'pt.kachang hitam',
          stock: 33,
        },
        {
          id: 5,
          name: 'Kachang Pink',
          bg: 'ffc0cb',
          company: 'pt.kachang pink',
          stock: 342,
        },
      ],
    }
  },
}
</script>

<style scoped>
.card {
  width: 16rem;
  height: auto;
}
</style>
