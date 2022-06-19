<template>
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
                    <router-link to="/" class="flex items-center py-6 px-2">
                        <img class="h-fit w-12" src="../assets/logo2.png" />
                        <span class="text-[#EFC68A] font-semibold text-xl tracking-tight px-2">IF ACOLHE</span>
                    </router-link>
                </div>
                <!-- FIM LOGO -->
                <!-- ENTRAR -->
                <div class="flex items-center py-4 px-2">
                    <router-link
                        class="py-2 px-2 font-semibold text-[#EFC68A] rounded hover:bg-[#EFC68A] hover:text-[#15393C] transition duration-300"
                        to="/adote"
                    >
                        <span>Adote</span>
                    </router-link>

                    <router-link
                        class="py-2 px-2 font-semibold text-[#EFC68A] rounded hover:bg-[#EFC68A] hover:text-[#15393C] transition duration-300"
                        to="/apoie"
                    >
                        <span>Apoie</span>
                    </router-link>

                    <router-link
                        class="py-2 px-2 font-semibold text-[#EFC68A] rounded hover:bg-[#EFC68A] hover:text-[#15393C] transition duration-300"
                        to="/admin"
                        v-if="isAuthenticated"
                    >
                        <span>Painel de controle</span>
                    </router-link>

                    <router-link
                        class="py-2 px-2 font-semibold text-[#EFC68A] rounded hover:bg-[#EFC68A] hover:text-[#15393C] transition duration-300"
                        to="/login"
                        v-if="!isAuthenticated"
                    >
                        <span>Entrar</span>
                    </router-link>

                    <router-link
                        class="py-2 px-2 font-semibold text-[#EFC68A] rounded hover:bg-[#EFC68A] hover:text-[#15393C] transition duration-300"
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
</template>

<script>
import {useAuth0} from "@auth0/auth0-vue";

export default {
    setup() {
        const {isAuthenticated} = useAuth0();

        return {
            isAuthenticated,
        };
    },
};
</script>
