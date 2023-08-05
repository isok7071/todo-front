<template>
    <v-card>
        <v-tabs v-model="boardsList">

            <v-tab
                v-for="board in  boardsList "
                :key="board"
                :value="board"
            >
                {{ board.name }}
            </v-tab>
        </v-tabs>
        <v-card-text class="text-center">
            <!-- <v-btn
                :disabled="!length"
                variant="text"
                @click="length--"
            >
                Remove Tab
            </v-btn>
            <v-divider
                class="mx-4"
                vertical
            ></v-divider>
            <v-btn
                variant="text"
                @click="length++"
            >
                Add Tab
            </v-btn> -->
        </v-card-text>
    </v-card>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useBoardStore } from '@/store/board';

const store = useBoardStore()
const { boardsList } = storeToRefs(store)
</script>