<template>
    <v-dialog
        v-model="boardForm.isOpened"
        width="1024"
        persistent
    >
        <v-card
            class="rounded-xl"
            v-if="boardForm.isOpened"
        >
            <v-card-title>
                <v-container>
                    <v-col>
                        Создать доску
                        <v-text-field
                            placeholder="Название доски"
                            variant="plain"
                            required
                            v-model="boardForm.data.name"
                            maxlength="20"
                        ></v-text-field>
                    </v-col>
                </v-container>
            </v-card-title>

            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    color="blue-darken-1"
                    variant="outlined"
                    rounded="xl"
                    @click="boardForm.isOpened = false"
                >
                    Закрыть
                </v-btn>
                <v-btn
                    color="blue-darken-1"
                    variant="outlined"
                    rounded="xl"
                    @click="store.sendBoardForm()"
                >
                    Сохранить
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script setup lang="ts">
import { useBoardStore } from '@/store/board';
import { storeToRefs } from 'pinia';

const store = useBoardStore()
const { boardForm } = storeToRefs(store)

</script>
