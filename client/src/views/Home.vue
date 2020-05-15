<template>
    <v-container>
        <img alt="Vue logo" src="../assets/logo.png">
        <ToDo msg="Welcome to Your Vue.js App"/>
    </v-container>
</template>

<script>
// @ is an alias to /src
import ToDo from '@/components/ToDo.vue';

export default {
    name: 'Home',
    components: {
        ToDo,
    },
};
</script>
