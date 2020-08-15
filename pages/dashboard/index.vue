<template>
  <Container class="mt-24">
    <div class="flex flex-wrap">
      <div class="w-full mb-6">
        <DashboardTabs :items="tabItems" />
        <hr class="mt-4 border border-gray-400 rounded-md" />
      </div>
      <div v-if="$store.state.user.role === role.UMKM" class="w-full">
        <!-- UMKM -->
      </div>
      <div v-if="$store.state.user.role === role.PERUSAHAAN" class="w-full">
        <!-- PERUSAHAAN -->
      </div>
    </div>
  </Container>
</template>

<script>
import DashboardTabs from '~/components/dashboard/DashboardTabs'

import { ROLE } from '~/store/user'

export default {
  components: {
    DashboardTabs,
  },
  data: () => ({
    tabItems: [],
    role: ROLE,
  }),
  created() {
    switch (this.$store.state.user.role) {
      case this.role.UMKM:
        this.tabItems.push(
          ...[
            {
              label: 'Statistics',
              link: '/dashboard',
            },
            {
              label: 'Proposals',
              link: '/dashboard/proposals',
            },
          ]
        )
        break
      case this.role.PERUSAHAAN:
        this.tabItems.push(
          ...[
            {
              label: 'Statistics',
              link: '/dashboard',
            },
            {
              label: 'Requests',
              link: '/dashboard/requests',
            },
            {
              label: 'Sent Proposals',
              link: '/dashboard/sent-proposals',
            },
          ]
        )
        break
    }
  },
}
</script>
