<template>
    <v-app>
        <v-app-bar
            app
            color="blue"
            dark
        >
            <div id="nav">
                <router-link to="/">
                    Home
                </router-link> |
                <router-link to="/about">
                    About
                </router-link>
            </div>
        </v-app-bar>

        <v-content>
            <router-view/>
        </v-content>
    </v-app>
</template>

<script>
export default {
    name: 'App',
};
</script>
