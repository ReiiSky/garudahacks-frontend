<template>
  <div class="flex justify-center mt-32">
    <div class="w-full max-w-sm">
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h3 class="lg:text-3xl text-primary text-center">Masuk</h3>
        <div class="mb-4 mt-12">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="email"
            >Email</label
          >
          <input
            id="fullname"
            class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="email"
          />
        </div>
        <div class="mb-6">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="password"
            >Kata sandi</label
          >
          <input
            id="password"
            class="appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            placeholder="************"
          />
          <!-- <p class="text-red-500 text-xs italic">Please choose a password.</p> -->
        </div>
        <div class="flex items-center justify-between">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            type="button"
          >
            Masuk
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
}
</script>
