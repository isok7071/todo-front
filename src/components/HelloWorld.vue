<template>
    <v-main>
        <template>
            <div class="text-center">
                <v-overlay
                    :model-value="store.isOverlay"
                    class="align-center justify-center"
                    persistent
                >
                    <v-progress-circular
                        color="primary"
                        indeterminate
                        size="64"
                    ></v-progress-circular>
                </v-overlay>
            </div>
        </template>
        <v-container>
            <BoardTabs />
            <!-- <CardCreateButton card-button-text="Создать карточку" /> -->
            <!-- <Card /> -->
            <BoardCreationForm />
        </v-container>
        <!-- <v-container v-if="isBoardListLoading == true">
            <v-progress-circular
                :size="50"
                color="primary"
                indeterminate
                v-if="isBoardListLoading == true"
            ></v-progress-circular>
        </v-container> -->
    </v-main>
</template>

<script setup lang="ts">
import CardCreateButton from '@/components/Card/CardCreateButton.vue';
import Card from '@/components/Card/Card.vue';
import BoardTabs from '@/components/Board/BoardTabs.vue';
import BoardCreationForm from '@/components/Board/BoardCreationForm.vue';
import { useAppStore } from '@/store/app';
import { storeToRefs } from 'pinia';

const store = useAppStore()


</script>
