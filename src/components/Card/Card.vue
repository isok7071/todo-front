<template>
    <v-dialog
        v-model="card.isOpened"
        width="1024"
        persistent
    >
        <v-card>
            <v-card-title>
                <v-container>
                    <v-col>
                        <v-text-field
                            placeholder="Заголовок"
                            variant="plain"
                            required
                            v-model="card.title"
                        ></v-text-field>
                    </v-col>
                </v-container>
                <v-divider />
            </v-card-title>

            <v-card-text>
                <v-container>
                    <v-row>
                        <v-col>
                            <v-textarea v-model="card.content"></v-textarea>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card-text>

            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    color="blue-darken-1"
                    variant="outlined"
                    rounded="xl"
                    @click="dialog = true"
                >
                    Закрыть
                </v-btn>
                <v-btn
                    color="blue-darken-1"
                    variant="outlined"
                    rounded="xl"
                    @click="store.closeCard"
                >
                    Сохранить
                </v-btn>
                <v-dialog
                    v-model="dialog"
                    width="300"
                >
                    <v-card>
                        <v-card-text>
                            <h2> Вы уверены?</h2>
                            Введенные данные не сохранятся
                        </v-card-text>
                        <v-card-actions>
                            <v-btn
                                color="primary"
                                block
                                variant="outlined"
                                rounded="xl"
                                @click="() => {
                                    store.closeCard();
                                    dialog = false;
                                }"
                            >Закрыть</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script setup lang="ts">
import { useCardStore } from '@/store/card';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';

const store = useCardStore()
const { card } = storeToRefs(store)
const dialog = ref(false)

</script>

<style>
.v-card-title input {
    font-size: 2rem;
    font-weight: bold;
}
</style>@/store/card