<template>
    <v-card>
        <v-tabs
            v-model="activeBoard.boardId"
            show-arrows
            center-active
        >

            <v-tab
                v-for="board in  boardsList"
                :key="board.boardId"
                :value="board"
            >
                {{ board.name }}
            </v-tab>
        </v-tabs>
        <v-window v-model="activeBoard.boardId">
            <v-window-item
                v-for="board in  boardsList"
                :key="board.boardId"
                :value="board"
            >
                <v-container fluid>
                    <v-row>
                        <v-col
                            cols="12"
                            md="4"
                        >
                            оливье
                        </v-col>
                    </v-row>
                </v-container>
            </v-window-item>
        </v-window>
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
const { boardsList, activeBoard } = storeToRefs(store)
// store.createBoard()
store.getBoardsList()

</script>