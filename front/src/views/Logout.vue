<template>
    <div>logout</div>
</template>

<script>
import {useAuth0} from "@auth0/auth0-vue";
export default {
    setup() {
        const {logout} = useAuth0();

        return {
            logout: () => {
                logout({returnTo: window.location.origin});
                this.$router.push({name: "Home"});
            },
        };
    },
    mounted() {
        this.logout();
    },
};
</script>

<style></style>
