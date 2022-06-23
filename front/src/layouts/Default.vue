<template>
    <div class="bg-[#F8F7F2]">
        <NavBar class="drop-shadow-md" v-if="!mobile" />
        <mobileNavbar v-if="mobile" />
        <router-view></router-view>
        <Footer />
    </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";
import mobileNavbar from "../components/mobileNavbar.vue";
export default {
    data() {
        return {
            mobile: false,
        };
    },
    mounted() {
        if (window.screen.width < 800) {
            this.mobile = true;
        }
    },
    components: {
        NavBar,
        Footer,
        mobileNavbar,
    },
};
</script>

<style></style>
