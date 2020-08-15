<template>
  <Fragment>
    <div class="px-8 py-6 bg-white shadow-lg rounded-lg">
      <h1 class="font-bold text-primary text-2xl md:text-4xl">
        {{ proposal.productName }}
      </h1>
      <h4 class="font-medium text-gray-600 text-lg md:text-xl">
        {{ proposal.companyName }}
      </h4>
      <hr class="my-4 md:my-8 border-gray-400 rounded-md" />
      <p class="text-lg break-words">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam dolorem
        voluptates sed maxime rem. Possimus eum reiciendis vitae eligendi
        dolores dolorum beatae numquam dignissimos, excepturi corporis
        perferendis quam quidem placeat.
      </p>
      <hr class="my-4 md:my-8 border-gray-400 rounded-md" />
      <div class="w-full">
        <div class="flex flex-wrap break-words">
          <div class="w-1/2">
            <p class="text-lg md:text-xl">Stock</p>
            <p class="text-lg md:text-xl">Price / unit</p>
          </div>
          <div class="w-1/2">
            <p class="font-bold text-lg md:text-xl">{{ proposal.stocks }}</p>
            <p class="font-bold text-base md:text-xl">
              {{ $currency.format(proposal.pricePerUnit) }}
            </p>
            <hr class="my-2" />
            <p class="font-bold text-base md:text-xl">
              {{ $currency.format(proposal.pricePerUnit * proposal.stocks) }}
              <small class="font-normal text-gray-700">Total Funding</small>
            </p>
            <Button size="full" class="mt-8">Accept Proposal</Button>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
</template>

<script>
import { Fragment } from 'vue-fragment'

export default {
  name: 'ActiveRequests',
  components: {
    Fragment,
  },
  props: {
    proposal: {
      type: Object,
      required: true,
    },
  },
}
</script>
