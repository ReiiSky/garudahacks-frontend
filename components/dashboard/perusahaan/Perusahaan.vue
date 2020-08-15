<template>
  <Fragment>
    <div class="w-full mb-6">
      <div class="flex flex-col sm:flex-row sm:items-center sm:space-x-12">
        <button
          v-for="item in tabItems"
          :key="item.label"
          :to="item.link"
          class="px-6 py-2 md:mr-6 rounded-md focus:outline-none"
          :class="isCurrentTab(item) ? 'bg-primary bg-opacity-25' : null"
          @click="changeTab(item.component)"
        >
          <h1
            class="font-medium text-xl"
            :class="isCurrentTab(item) ? 'text-primaryDark' : null"
          >
            {{ item.label }}
          </h1>
        </button>
      </div>
      <hr class="mt-4 border border-gray-400 rounded-md" />
    </div>
    <keep-alive>
      <component :is="currentComponent"></component>
    </keep-alive>
  </Fragment>
</template>

<script>
import { Fragment } from 'vue-fragment'
import Statistics from '~/components/dashboard/perusahaan/Statistics'
import Requests from '~/components/dashboard/perusahaan/Requests'
import SentProposals from '~/components/dashboard/perusahaan/SentProposals'

export default {
  name: 'Perusahaan',
  components: {
    Fragment,
    Statistics,
    Requests,
    SentProposals,
  },
  data: () => ({
    currentComponent: Statistics.name,
    tabItems: [
      {
        label: 'Statistics',
        component: Statistics.name,
      },
      {
        label: 'Requests',
        component: Requests.name,
      },
      {
        label: 'Sent Proposals',
        component: SentProposals.name,
      },
    ],
  }),
  methods: {
    changeTab(tab) {
      this.currentComponent = tab
    },
    isCurrentTab(tab) {
      return this.currentComponent === tab.component
    },
  },
}
</script>
