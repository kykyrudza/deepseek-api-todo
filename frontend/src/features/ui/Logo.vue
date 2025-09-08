<script setup>
import Link from "@/shared/ui/components/Link.vue";
</script>

<template>
  <Link to="/" variant="none" class="flex items-center justify-between gap-3">
    <img class="size-10 flex " src="@/assets/img/logo.svg" alt="">
    <div class="text-white">
      <span class="font-symphony font-semibold text-3xl">Jet</span>
      <span class="font-pacifico text-lg">Note</span>
    </div>
  </Link>
</template>
