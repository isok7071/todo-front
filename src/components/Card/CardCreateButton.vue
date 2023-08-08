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
import { useCardStore } from '@/store/card';

const store = useCardStore()

defineProps<{
    cardButtonText: String,
}>()
</script>
