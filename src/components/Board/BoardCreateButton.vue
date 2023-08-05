<template>
    <v-btn
        block
        rounded="xl"
        variant="outlined"
        color="primary"
        prepend-icon="mdi-plus"
        @click="store.openBoardCreationForm"
    >{{ buttonText }}</v-btn>
</template>

<script setup lang="ts">
import { useBoardStore } from '@/store/board';

const store = useBoardStore()

defineProps<{
    buttonText: String,
}>()
</script>
@/store/card