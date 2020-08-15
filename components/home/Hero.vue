<template>
  <Fragment>
    <h1 class="font-bold text-6xl text-primary text-center">How it Works</h1>
    <div class="flex flex-wrap justify-between mt-5">
      <div class="w-full md:w-1/4 break-words px-4">
        <div class="p-6 bg-white rounded-lg shadow-lg">
          <h1 class="font-bold text-2xl">Find your business partner</h1>
        </div>
      </div>
      <div class="w-full md:w-1/4 break-words px-4">
        <div class="p-6 bg-white rounded-lg shadow-lg">
          <h1 class="font-bold text-2xl">
            Wait for them to accept your partnership request
          </h1>
        </div>
      </div>
      <div class="w-full md:w-1/4 break-words px-4">
        <div class="p-6 bg-white rounded-lg shadow-lg">
          <h1 class="font-bold text-2xl">Make a deal about the product</h1>
        </div>
      </div>
      <div class="w-full md:w-1/4 break-words px-4">
        <div class="p-6 bg-white rounded-lg shadow-lg">
          <h1 class="font-bold text-2xl">Get the benefits</h1>
        </div>
      </div>
    </div>
  </Fragment>
</template>

<script>
import { Fragment } from 'vue-fragment'

export default {
  name: 'Hero',
  components: {
    Fragment,
  },
}
</script>

<style scoped>
.procedure {
  /* border: 1px solid black; */
  width: 14rem;
  border-radius: 6px;
}
</style>
