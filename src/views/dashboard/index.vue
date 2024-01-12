<template>
    <v-row>
        <v-col cols="12">
            <v-row>
                <span>Dashboard</span>
                <br><br>
                <span>{{ meStore.user }}</span>
                <br><br>
                <span>Você está logado {{ meStore.isLoggedIn }}</span>
            </v-row>
        </v-col>
    </v-row>
</template>
<script setup>
import { useMeStore } from '@/store/me';

const meStore = useMeStore();
</script>