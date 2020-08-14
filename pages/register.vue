<template>
  <div class="flex justify-center mt-32">
    <div class="register-role-info w-1/4">
      <h3 class="lg:text-3xl">Anda Mendaftar Sebagai {{ register_as }}</h3>
      <div class="roles ml-12">
        <ul v-for="data in datas.roles" :key="data.id">
          <li>{{ data }}</li>
        </ul>
      </div>
    </div>
    <div class="w-full max-w-sm">
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h3 class="lg:text-3xl text-primary text-center">Daftar</h3>
        <div class="mb-4 mt-12">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="fullname"
            >Nama Anda</label
          >
          <input
            id="fullname"
            class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="nama anda"
          />
        </div>
        <div class="mb-4">
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
          <Button :size="'full'">Daftar</Button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data() {
    return {
      register_as: '',
      datas: '',
    }
  },
  mounted() {
    // eslint-disable-next-line no-console
    this.register_as = this.$route.query.as
    this.registerAs(this.register_as)
  },
  methods: {
    registerAs(as) {
      // eslint-disable-next-line eqeqeq
      switch (as) {
        case 'company':
          this.datas = {
            as: 'Company',
            roles: {
              one: 'Beli hasil tanam, lalu jual',
              two: 'Beli hasil tanam, lalu jual',
              three: 'Beli hasil tanam, lalu jual',
            },
          }
          break
        case 'investor':
          this.datas = {
            as: 'Investor',
            roles: {
              one: 'Modalin yg UMKM',
              two: 'Modalin yg UMKM',
              three: 'Modalin yg UMKM',
            },
          }
          break
        case 'umkm':
          this.datas = {
            as: 'UMKM',
            roles: {
              one: 'KERJA KERJA KERJA',
              two: 'Cari modal dari investor',
              three: 'Cari perusahaan yg mau jual',
            },
          }
          break
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
