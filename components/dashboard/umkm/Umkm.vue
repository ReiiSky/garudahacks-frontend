<template>
  <Fragment>
    <div class="w-full mb-6">
      <div class="flex flex-col sm:flex-row sm:items-center sm:space-x-12">
        <button
          v-for="item in tabItems"
          :key="item.label"
          :to="item.link"
          class="focus:outline-none"
          @click="changeTab(item.component)"
        >
          <h1
            class="font-medium text-xl"
            :class="currentComponent == item.component ? 'font-bold' : null"
          >
            {{ item.label }}
          </h1>
        </button>
      </div>
      <hr class="mt-4 border border-gray-400 rounded-md" />
    </div>
    <component :is="currentComponent"></component>
  </Fragment>
</template>

<script>
import { Fragment } from 'vue-fragment'
import Statistics from '~/components/dashboard/umkm/Statistics'
import Proposals from '~/components/dashboard/umkm/Proposals'

export default {
  name: 'Umkm',
  components: {
    Fragment,
    Statistics,
    Proposals,
  },
  data: () => ({
    currentComponent: Statistics,
    tabItems: [
      {
        label: 'Statistics',
        component: Statistics,
      },
      {
        label: 'Proposals',
        component: Proposals,
      },
    ],
  }),
  methods: {
    changeTab(tab) {
      this.currentComponent = tab
    },
  },
}
</script>
