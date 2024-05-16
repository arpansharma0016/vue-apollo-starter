<template>
    <v-app>
        <div class="flex h-screen bg-gray-50 dark:bg-gray-900">
            <sideBar></sideBar>
            <div class="flex flex-col flex-1 w-full">
                <headerArea></headerArea>
                <router-view></router-view>
            </div>
        </div>
    </v-app>
</template>

<script>
    import headerArea from './headerArea.vue';
    import sideBar from './sideBar.vue';

    export default {
        name: "inApp",
        components: {
            sideBar, headerArea
        }
    }
</script>
