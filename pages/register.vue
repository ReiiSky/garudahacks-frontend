<template>
  <Container class="mt-24">
    <div class="flex flex-wrap justify-center">
      <div class="w-full max-w-sm">
        <form
          class="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4"
          @submit.prevent="register"
        >
          <h3 class="font-medium text-center text-2xl md:text-4xl mb-12">
            Sign up to
            <span class="font-bold">
              microfund<span class="text-primary">.</span>
            </span>
          </h3>
          <div class="mb-4 mt-12">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="fullname"
              >Full Name</label
            >
            <input
              id="fullname"
              v-model="name"
              class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:border-gray-700"
              type="text"
              placeholder="fullname"
            />
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="email"
              >Email</label
            >
            <input
              id="email"
              v-model="email"
              class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:border-gray-700"
              type="text"
              placeholder="example@email.com"
            />
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="company-name"
              >Company Name</label
            >
            <input
              id="company-name"
              v-model="organizationName"
              class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:border-gray-700"
              type="text"
              placeholder="CV. Maju Jaya"
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
          </div>
          <div class="flex items-center justify-between">
            <Button class="w-full">Sign up</Button>
          </div>
        </form>
      </div>
    </div>
  </Container>
</template>

<script>
export default {
  name: 'Register',
  middleware({ store, redirect }) {
    if (!store.state.register.selectedRole) {
      redirect('/roles')
    }
  },
  data() {
    return {
      name: '',
      email: '',
      organizationName: '',
      password: '',
    }
  },
  methods: {
    async register() {
      const response = await this.$axios.post('/api/v1/signup', {
        name: this.name,
        email: this.email,
        organizationName: this.organizationName,
        password: this.password,
        role: this.$store.state.register.selectedRole,
      })

      if (response.status === 201) {
        this.$router.push('/login')
      }
    },
  },
}
</script>

<style scoped>
ul {
  display: block;
}
li {
  list-style-type: disc;
}
</style>
