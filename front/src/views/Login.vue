<template>
    <div>Redirecionando...</div>
</template>

<script>
import {useAuth0} from "@auth0/auth0-vue";
export default {
    setup() {
        const {loginWithRedirect} = useAuth0();

        return {
            login: () => {
                loginWithRedirect();
            },
        };
    },
    mounted() {
        this.login();
    },
};
</script>

<style></style>
