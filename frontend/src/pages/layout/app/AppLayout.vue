<template>
    <Header v-if="showHeader"/>
    <slot/>
</template>

<script setup>
import Header from "@/widgets/layout/ui/header/Header.vue";
import { useHeaderVisibility } from "@/widgets/layout/model/useHeaderVisibility.js";

const { showHeader } = useHeaderVisibility();
</script>