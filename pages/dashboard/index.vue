<template>
  <Container class="mt-24">
    <Fragment v-if="$auth.user.profile.role === role.SBO">
      <Umkm />
    </Fragment>
    <Fragment v-if="$auth.user.profile.role === role.COMPANY">
      <Perusahaan />
    </Fragment>
  </Container>
</template>

<script>
import { Fragment } from 'vue-fragment'

import Umkm from '~/components/dashboard/umkm/Umkm'
import Perusahaan from '~/components/dashboard/perusahaan/Perusahaan'

import { ROLES } from '~/types/roles'

export default {
  middleware: 'auth',
  components: {
    Fragment,
    Umkm,
    Perusahaan,
  },
  data: () => ({
    role: ROLES,
  }),
}
</script>
