<template>
    <v-btn
        block
        rounded="xl"
        variant="outlined"
        color="primary"
        prepend-icon="mdi-plus"
        @click="store.openCard"
    >{{ cardButtonText }}</v-btn>
</template>

<script setup lang="ts">
import { useAppStore } from '@/store/app';

const store = useAppStore()

defineProps<{
    cardButtonText: String,
}>()
</script>
