<template>
  <button
    class="rounded-md font-medium duration-75 focus:outline-none focus:border-transparent"
    :class="[btnSize, ...btnClasses]"
    :disabled="disabled"
    @click="$emit('click')"
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
        return ['sm', 'normal', 'md', 'lg', 'xl', 'full'].includes(value)
      },
      default: 'normal',
    },
    bgColor: {
      type: String,
      default: 'bg-primary',
    },
    bgColorHover: {
      type: [String, Boolean],
      default: 'bg-primaryDark',
    },
    hover: {
      type: String,
      default: null,
    },
    textColor: {
      type: String,
      default: 'text-white',
    },
    shadow: {
      type: [String, Boolean],
      default: 'shadow-primary',
    },
    disabled: {
      type: Boolean,
      default: false,
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
      if (this.size === 'full') {
        return 'py-2 w-full'
      }

      return 'px-6 py-2'
    },
    btnClasses() {
      if (this.disabled) {
        return ['bg-gray-400', 'text-gray-600', 'cursor-not-allowed']
      }

      return [
        this.textColor,
        this.bgColor,
        this.shadow,
        `hover:${this.bgColorHover}`,
        this.hover ? `hover:${this.hover}` : null,
      ]
    },
  },
}
</script>
