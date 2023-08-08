<template>
    <v-card>
        <BoardCreateButton button-text="Создать доску" />

        <v-tabs
            v-model="activeBoard.id"
            show-arrows
            center-active
        >
            <v-tab
                v-for="board in boardsList"
                :key="board?.id"
                :value="board"
            >
                <v-btn
                    icon="$delete"
                    variant="text"
                    size="x-small"
                    @click="store.deleteBoard(board?.id)"
                >
                </v-btn>
                {{ board?.name }}
            </v-tab>
        </v-tabs>
        <v-window v-model="activeBoard.id">
            <v-window-item
                v-for="board in  boardsList"
                :key="board?.id"
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
import BoardCreateButton from '@/components/Board/BoardCreateButton.vue';

const store = useBoardStore()
const { boardsList, activeBoard } = storeToRefs(store)

store.getBoardsList()
console.log(boardsList.value)
</script>