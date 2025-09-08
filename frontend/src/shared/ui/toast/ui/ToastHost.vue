<template>
  <div class="fixed top-4 right-4 z-50 space-y-2 w-[min(92vw,380px)]">
    <div
        v-for="t in toast.items"
        :key="t.id"
        class="rounded-2xl px-4 py-3 shadow-lg text-sm"
        :class="klass(t.type)"
    >
      <div class="flex items-start gap-2">
        <strong class="capitalize">{{ t.type }}</strong>
        <span class="opacity-80">{{ t.message }}</span>
        <button class="ml-auto opacity-60 hover:opacity-100" @click="toast.remove(t.id)">×</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useToastStore } from '../model'
const toast = useToastStore()

function klass(type) {
  switch (type) {
    case 'success': return 'bg-green-50 border border-green-200 text-green-900'
    case 'error':   return 'bg-red-50 border border-red-200 text-red-900'
    case 'info':    return 'bg-blue-50 border border-blue-200 text-blue-900'
    case 'warning': return 'bg-amber-50 border border-amber-200 text-amber-900'
    default:        return 'bg-gray-50 border border-gray-200 text-gray-900'
  }
}
</script>
