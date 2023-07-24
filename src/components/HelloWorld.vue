<template>
    <v-main>
        <v-container>
            <CardCreateButton card-button-text="Создать" />
            <Card />
        </v-container>

    </v-main>
</template>

<script setup lang="ts">
import CardCreateButton from '@/components/CardCreateButton.vue';
import Card from '@/components/Card.vue';
</script>
