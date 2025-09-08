<template>
  <AppLayout>
    <RouterView/>
    <ToastHost/>
  </AppLayout>
</template>

<script setup>
import ToastHost from '@/shared/ui/toast/ui/ToastHost.vue'
import AppLayout from "@/pages/layout/app/AppLayout.vue";
</script>
