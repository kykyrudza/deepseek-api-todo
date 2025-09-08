<script setup>
import { RouterLink } from 'vue-router'
import {computed} from "vue";

const props = defineProps({
  to: {
    type: [String, Object],
    required: true
  },
  variant: {
    type: String,
    default: 'button', // варианты: button | none | link | ghost ...
  },
  activeClass: {
    type: String,
    default: ''
  },
  replace: Boolean
})

// Базовые классы для вариантов
const variants = {
  button: 'py-2 px-4 bg-[#a89cf2] text-white font-semibold rounded-md hover:bg-[#8d7ae9]',
  link: 'text-blue-600 hover:underline',
  ghost: 'px-2 py-1 rounded-md hover:bg-gray-100',
  none: '' // без стилей
}

const getClasses = computed(() => variants[props.variant] || variants.none)
</script>

<template>
  <RouterLink
      v-bind="$attrs"
      :to="to"
      :replace="replace"
      :active-class="activeClass"
      :class="getClasses"
  >
    <slot />
  </RouterLink>
</template>