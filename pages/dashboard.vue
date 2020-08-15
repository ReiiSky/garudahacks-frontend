<template>
  <Container class="mt-24">
    <div class="flex flex-wrap">
      <div v-if="$store.state.user.role === role.UMKM" class="w-full">
        <Umkm />
      </div>
      <div v-if="$store.state.user.role === role.PERUSAHAAN" class="w-full">
        <Perusahaan />
      </div>
    </div>
  </Container>
</template>

<script>
import Umkm from '~/components/dashboard/umkm/Umkm'
import Perusahaan from '~/components/dashboard/perusahaan/Perusahaan'

import { ROLE } from '~/store/user'

export default {
  components: {
    Umkm,
    Perusahaan,
  },
  data: () => ({
    role: ROLE,
  }),
}
</script>
