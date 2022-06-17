<template>
    <div>
        <NavBar class="drop-shadow-md" />
        <router-view></router-view>
    </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";

export default {
    components: {
        NavBar,
    },
};
</script>

<style></style>
