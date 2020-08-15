<template>
  <div class="flex justify-center mt-24">
    <div class="w-full items-center max-w-md">
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h3 class="lg:text-3xl text-primary text-center">Create Proposal</h3>
        <div class="mb-4 mt-12">
          <input
            class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="product name"
          />
        </div>
        <div class="mb-4">
          <textarea
            class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="textarea"
            placeholder="description"
          />
        </div>
        <div class="mb-4">
          <p class="text-gray-700 font-semibold">Contract period</p>
          <div class="periode flex flex-wrap justify-between mt-2">
            <Button class="rounded-full" :size="'sm'">3 month</Button>
            <Button class="rounded-full" :size="'sm'">6 month</Button>
            <Button class="rounded-full" :size="'sm'">1 year</Button>
            <Button class="rounded-full" :size="'sm'">other</Button>
          </div>
        </div>
        <div class="mb-4 flex justify-between">
          <input
            class="appearance-none border rounded w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="price / unit"
          />
          <input
            class="appearance-none border w-12 rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            disabled
            placeholder="45"
          />
        </div>
        <div class="mb-4 flex justify-between">
          <p class="text-gray-700 font-semibold">total funding</p>
          <p class="text-gray-700 font-semibold">IDR 0.000.000</p>
        </div>
        <Button class="w-full">Send</Button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Proposals',
}
</script>
