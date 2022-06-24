<template>
    <span>
        <!-- CORES -->
        <!-- BLACK [#050205] -->
        <!-- MAICON'S COLOR [#EFC68A] -->
        <!-- DARKER MAICON'S COLOR [#B9A997] -->
        <!-- BRIGHTER MAICON'S COLOR [#D2CBB4] -->
        <!-- GREY [#A09F9F] -->
        <nav class="bg-[#15393C] shadow-xl">
            <div class="max-w-6xl mx-auto px-4">
                <div class="flex justify-between">
                    <!-- LOGO -->
                    <div>
                        <!-- White: #f8fafc -->
                        <router-link to="/" class="flex items-center py-6 px-2">
                            <img class="h-fit w-12" src="../assets/logo3.png" />
                            <span class="text-white font-semibold text-2xl tracking-tight px-2 font">IF ACOLHE</span>
                        </router-link>
                    </div>
                    <!-- FIM LOGO -->
                    <!-- ENTRAR -->
                    <div class="flex items-center py-4 px-2" v-if="!showMenu">
                        
                        <router-link class="py-2 px-6 font-semibold text-white rounded hover:bg-[#ffffff11] transition duration-300 mx-1" to="/adote">
                            <span>Adote</span>
                        </router-link>

                        <router-link class="py-2 px-6 font-semibold text-white rounded hover:bg-[#ffffff11] transition duration-300 mx-1" to="/apoie">
                            <span>Apoie</span>
                        </router-link>

                        <router-link
                            class="py-2 px-6 font-semibold text-white rounded hover:bg-[#ffffff11] transition duration-300 mx-1"
                            to="/admin"
                            v-if="isAuthenticated"
                        >
                            <span>Painel de controle</span>
                        </router-link>

                        <router-link
                            class="py-2 px-6 font-semibold text-white rounded hover:bg-[#ffffff11] transition duration-300 mx-1"
                            to="/login"
                            v-if="!isAuthenticated"
                        >
                            <span>Entrar</span>
                        </router-link>

                        <router-link
                            class="py-2 px-6 font-semibold text-white rounded hover:bg-[#ffffff11] transition duration-300 mx-1"
                            to="/logout"
                            v-if="isAuthenticated"
                        >
                            <span>Sair</span>
                        </router-link>
                    </div>

                    <!-- FIM ENTRAR -->
                </div>
            </div>
        </nav>
    </span>
</template>

<script>
import {useAuth0} from "@auth0/auth0-vue";

export default {
    data() {
        return {
            showMenu: false,
        };
    },
    setup() {
        const {isAuthenticated} = useAuth0();

        return {
            isAuthenticated,
        };
    },
    methods: {
        showHamb() {
            if (window.screen.width < 800) {
                this.showMenu = true;
            } else {
                this.showMenu = true;
            }
        },
    },
    computed: {
        watch: function () {
            return this.showHamb();
        },
    },
};
</script>
