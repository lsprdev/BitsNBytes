<template>
    <div class="bg-[#F8F7F2]">
        <NavBar class="drop-shadow-md" />
        <router-view></router-view>
        <Footer />
    </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";
export default {
    components: {
        NavBar,
        Footer,
    },
};
</script>

<style></style>
