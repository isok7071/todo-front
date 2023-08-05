<template>
    <v-main>
        <v-container>
            <BoardTabs />
            <BoardCreateButton button-text="Создать доску" />
            <!-- <CardCreateButton card-button-text="Создать карточку" /> -->
            <!-- <Card /> -->
        </v-container>

    </v-main>
</template>

<script setup lang="ts">
import CardCreateButton from '@/components/Card/CardCreateButton.vue';
import Card from '@/components/Card/Card.vue';
import BoardCreateButton from '@/components/Board/BoardCreateButton.vue';
import BoardTabs from './Board/BoardTabs.vue';

</script>
