<template>
  <Container class="mt-24">
    <div class="flex flex-wrap">
      <div class="w-full mb-8">
        <n-link to="/dashboard">
          <div class="flex items-center space-x-4">
            <ChevronLeftIcon />
            <p class="font-medium text-lg">Go Back</p>
          </div>
        </n-link>
      </div>
      <div class="w-full">
        <MakeRequestForm />
      </div>
    </div>
  </Container>
</template>

<script>
import { ChevronLeftIcon } from 'vue-feather-icons'
import MakeRequestForm from '~/components/dashboard/perusahaan/MakeRequestForm'

export default {
  components: {
    ChevronLeftIcon,
    MakeRequestForm,
  },
}
</script>
