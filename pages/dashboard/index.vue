<template>
  <Container class="mt-24">
    <div class="flex flex-wrap">
      <div class="w-full mb-6">
        <DashboardTabs :items="tabItems" />
        <hr class="mt-4 border border-gray-400 rounded-md" />
      </div>
      <!-- UMKM Dashboard -->
      <Fragment v-if="$store.state.user.role === role.UMKM">
        <div class="w-full mb-6">
          <h1 class="font-medium text-2xl">10 Products</h1>
        </div>
        <div class="w-full">
          <div class="flex flex-wrap items-center">
            <div
              v-for="n in 10"
              :key="n"
              class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mb-8 px-2"
            >
              <UmkmProductCard :index="n" />
            </div>
          </div>
        </div>
      </Fragment>
      <!-- /UMKM Dashboard -->

      <!-- Pemodal Dashboard -->
      <Fragment v-if="$store.state.user.role === role.PEMODAL">
        <div class="w-full">
          <PendanaanAktif />
        </div>
      </Fragment>
      <!-- /Pemodal Dashboard -->
    </div>
  </Container>
</template>

<script>
import { Fragment } from 'vue-fragment'
import DashboardTabs from '~/components/dashboard/DashboardTabs'
import UmkmProductCard from '~/components/dashboard/umkm/ProductCard'
import PendanaanAktif from '~/components/dashboard/pemodal/PendanaanAktif'

import { ROLE } from '~/store/user'

export default {
  components: {
    Fragment,
    DashboardTabs,
    UmkmProductCard,
    PendanaanAktif,
  },
  data: () => ({
    tabItems: [],
    role: ROLE,
  }),
  created() {
    switch (this.$store.state.user.role) {
      case 'umkm':
        this.tabItems.push(
          ...[
            {
              label: 'Link 1',
              link: '/dashboard',
            },
            {
              label: 'Link 2',
              link: '/dashboard',
            },
            {
              label: 'Link 3',
              link: '/dashboard',
            },
          ]
        )
        break
      case 'pemodal':
        this.tabItems.push(
          ...[
            {
              label: 'Active Funding',
              link: '/dashboard',
            },
          ]
        )
        break

      default:
        break
    }
  },
}
</script>
