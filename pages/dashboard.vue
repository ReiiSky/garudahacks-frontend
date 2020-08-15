<template>
  <Container class="mt-24">
    <Fragment v-if="$store.state.user.role === role.UMKM">
      <Umkm />
    </Fragment>
    <Fragment v-if="$store.state.user.role === role.PERUSAHAAN">
      <Perusahaan />
    </Fragment>
  </Container>
</template>

<script>
import { Fragment } from 'vue-fragment'

import Umkm from '~/components/dashboard/umkm/Umkm'
import Perusahaan from '~/components/dashboard/perusahaan/Perusahaan'

import { ROLE } from '~/store/user'

export default {
  components: {
    Fragment,
    Umkm,
    Perusahaan,
  },
  data: () => ({
    role: ROLE,
  }),
}
</script>
