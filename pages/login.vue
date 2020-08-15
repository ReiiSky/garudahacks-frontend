<template>
  <div class="flex justify-center mt-32">
    <div class="w-full max-w-sm">
      <form
        class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        @submit.prevent="login"
      >
        <h3 class="font-medium text-center text-2xl md:text-4xl mb-12">
          Sign in to
          <span class="font-bold">
            microfund<span class="text-primary">.</span>
          </span>
        </h3>
        <div class="mb-4 mt-12">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="email"
            >Email</label
          >
          <input
            id="fullname"
            v-model="email"
            class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:border-gray-700"
            type="text"
            placeholder="example@email.com"
          />
        </div>
        <div class="mb-6">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="password"
            >Password</label
          >
          <input
            id="password"
            v-model="password"
            class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:border-gray-700"
            type="password"
            placeholder="************"
          />
          <!-- <p class="text-red-500 text-xs italic">Please choose a password.</p> -->
        </div>
        <div class="flex items-center justify-between">
          <Button class="w-full">Sign in</Button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data: () => ({
    email: '',
    password: '',
  }),
  methods: {
    async login() {
      const response = await this.$auth.loginWith('local', {
        data: { email: this.email, password: this.password },
      })

      if (response.status === 200) {
        this.$router.push('/dashboard')
      }
    },
  },
}
</script>
