<template>
  <header class="w-full h-16 p-4 bg-layout fixed top-0 left-0 z-50">
    <HeaderBody/>
  </header>
</template>

<script setup>

import {defineComponent} from "vue";
import HeaderBody from "@/widgets/layout/ui/header/HeaderBody.vue";

defineComponent({
  components: {HeaderBody}
})
</script>