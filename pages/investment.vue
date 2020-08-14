<template>
  <Container class="mt-24 mb-24">
    <div class="flex flex-wrap">
      <div class="description max-w-xl">
        <h3 class="xl:text-3xl">Bibit Kacang Ijo</h3>
        <p class="mr-16 mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          expedita dolore odio soluta nemo neque aperiam praesentium itaque nisi
          sint quibusdam reiciendis ut voluptatum sunt omnis, officiis,
          reprehenderit nostrum sit.
        </p>
        <p class="mr-16 mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          expedita dolore odio soluta nemo neque aperiam praesentium itaque nisi
          sint quibusdam reiciendis ut voluptatum sunt omnis, officiis,
          reprehenderit nostrum sit.
        </p>
      </div>
      <div class="form-invest" style="width: 24rem;">
        <form class="rounded px-8 pb-8 mb-4">
          <h3 class="lg:text-3xl text-primary text-center">Investment</h3>
          <div class="mb-4 mt-12">
            <input
              id="input1"
              class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="input 1"
            />
          </div>
          <div class="mb-4">
            <div class="relative">
              <select
                id="grid-state"
                class="block appearance-none w-full bg-white border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              >
                <option value="value1">value 1</option>
                <option value="value2">value 2</option>
                <option value="value3">value 3</option>
              </select>
              <div
                class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
              >
                <svg
                  class="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div id="info-total" class="flex justify-between mt-8">
            <p>Total Harga</p>
            <p class="font-bold text-right">Rp 200.000,00-</p>
          </div>
          <div class="flex items-center justify-between mt-3">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="button"
            >
              Invest Now
            </button>
          </div>
        </form>
      </div>
    </div>
  </Container>
</template>

<script>
export default {
  name: 'Investment',
}
</script>
