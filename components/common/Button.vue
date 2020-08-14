<template>
  <button
    class="rounded-md font-medium duration-75 focus:outline-none focus:border-transparent"
    :class="[textColor, bgColor, `hover:${bgColorHover}`, btnSize, shadow]"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    size: {
      type: String,
      validator(value) {
        return ['sm', 'normal', 'md', 'lg', 'xl'].includes(value)
      },
      default: 'normal',
    },
    bgColor: {
      type: String,
      default: 'bg-primary',
    },
    bgColorHover: {
      type: String,
      default: 'bg-primaryDark',
    },
    textColor: {
      type: String,
      default: 'text-white',
    },
    shadow: {
      type: String,
      default: 'shadow-primary',
    },
  },
  computed: {
    btnSize() {
      if (this.size === 'sm') {
        return 'px-4 py-1'
      }
      if (this.size === 'md') {
        return 'px-8 py-3'
      }
      if (this.size === 'lg') {
        return 'px-10 py-4'
      }
      if (this.size === 'xl') {
        return 'px-12 py-5'
      }

      return 'px-6 py-2'
    },
  },
}
</script>
