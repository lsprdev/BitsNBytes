<template>
    <div>
        <NavBar />
        <router-view></router-view>

        <IndexCards :cards="info" />
    </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import axios from "axios";
import IndexCards from "../components/IndexCards.vue";

export default {
    name: "App",
    data() {
        return {
            info: [],
        };
    },
    mounted() {
        axios.get("http://localhost:7777/api/dogs").then((response) => (this.info = response));
    },
    components: {
        NavBar,
        IndexCards,
    },
};
</script>

<style></style>
