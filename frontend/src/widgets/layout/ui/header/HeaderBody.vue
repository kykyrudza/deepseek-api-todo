<template>
  <div class="flex items-center justify-between h-full">
    <Logo/>
    <Link to="/login" variant="button">Sign in</Link>
  </div>
</template>

<style scoped>

</style>
<script setup>
import Link from "@/shared/ui/components/Link.vue";
import Logo from "@/features/ui/Logo.vue";
import {defineComponent} from "vue";

defineComponent({
  components: {Logo, Link}
})
</script>