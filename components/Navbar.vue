<template>
  <div
    v-click-outside="forceClose"
    class="w-full fixed z-50 top-0 py-2 bg-white border-b"
  >
    <Container>
      <div class="flex justify-between items-center">
        <n-link to="/">
          <h1 class="font-bold text-xl lg:text-2xl">
            {{ $config.appName }}<span class="text-primary">.</span>
          </h1>
        </n-link>
        <Fragment v-if="!$auth.loggedIn">
          <div
            class="hidden md:flex md:justify-between md:items-center md:space-x-6"
          >
            <n-link to="/login">Sign In</n-link>
            <n-link to="/roles">
              <Button>Join</Button>
            </n-link>
          </div>
        </Fragment>
        <Fragment v-else>
          <div
            class="hidden md:flex md:justify-between md:items-center md:space-x-6"
          >
            <n-link to="/dashboard">
              <h1 class="font-medium">Dashboard</h1>
            </n-link>
            <n-link to="/marketplace">
              <h1 class="font-medium">Marketplace</h1>
            </n-link>
            <Button
              bg-color="bg-danger"
              :bg-color-hover="false"
              text-color="text-white"
              shadow="shadow-danger"
              @click="logout"
            >
              <h1 class="font-medium">Logout</h1>
            </Button>
          </div>
        </Fragment>
        <div class="block md:hidden">
          <button @click="changeNavState">
            <MenuIcon />
          </button>
        </div>
      </div>
      <div class="md:hidden" :class="isOpened ? 'block' : 'hidden'">
        <Fragment v-if="!$auth.loggedIn">
          <div class="flex flex-col space-y-4 mt-2">
            <n-link to="/login">Sign In</n-link>
            <n-link to="/register">
              <Button>Join</Button>
            </n-link>
          </div>
        </Fragment>
        <Fragment v-else>
          <div class="flex flex-col space-y-4 mt-2">
            <n-link to="/dashboard">
              <h1 class="font-medium">Dashboard</h1>
            </n-link>
            <n-link to="/marketplace">
              <h1 class="font-medium">Marketplace</h1>
            </n-link>
            <Button
              bg-color="bg-danger"
              :bg-color-hover="false"
              text-color="text-white"
              shadow="shadow-danger"
              @click="logout"
            >
              <h1 class="font-medium">Logout</h1>
            </Button>
          </div>
        </Fragment>
      </div>
    </Container>
  </div>
</template>

<script>
import { Fragment } from 'vue-fragment'
import { MenuIcon } from 'vue-feather-icons'

export default {
  name: 'Navbar',
  components: {
    Fragment,
    MenuIcon,
  },
  data: () => ({
    isOpened: false,
  }),
  methods: {
    async logout() {
      await this.$auth.logout()
    },
    changeNavState() {
      this.isOpened = !this.isOpened
    },
    forceClose() {
      if (this.isOpened) {
        this.isOpened = false
      }
    },
  },
}
</script>
