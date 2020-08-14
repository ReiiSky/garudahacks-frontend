<template>
  <div class="flex flex-col sm:flex-row sm:items-center sm:space-x-12">
    <n-link v-for="item in items" :key="item.label" :to="item.link">
      <h1 class="font-medium text-xl">
        {{ item.label }}
      </h1>
    </n-link>
  </div>
</template>

<script>
export default {
  name: 'DashboardTabs',
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
}
</script>
