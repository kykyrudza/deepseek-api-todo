<template>
  <div class="p-6 space-y-4">
    <button @click="ping" class="px-4 py-2 rounded-xl border">Ping API</button>
    <pre v-if="payload">{{ payload }}</pre>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { http } from '@/shared/api/http'

const payload = ref(null)

async function ping() {
  const { data } = await http.get('/ping') // вернёт ваш envelope
  payload.value = data
}
</script>
