<template>
    <span>
        <nav class="bg-[#15393C] shadow-xl">
            <div class="max-w-6xl mx-auto px-4">
                <div class="flex justify-between">
                    <div class="flex space-x-7">
                        <router-link to="/" class="flex items-center py-6 px-2">
                            <img class="h-fit w-12" src="../assets/logo3.png" />
                            <span class="text-white font-semibold text-xl tracking-tight px-2">IF ACOLHE</span>
                        </router-link>
                    </div>

                    <div class="flex items-center">
                        <button class="outline-none mobile-menu-button" @click="showHamb()">
                            <svg class="w-6 h-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="white">
                                <path d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div class="mobile-menu" :class="{hidden: !showMenu}">
                <ul class="">
                    <li>
                        <router-link class="text-white font-semibold block text-sm px-4 py-4 hover:bg-white-500 transition duration-300" to="/">
                            <span>Página inicial</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link class="text-white font-semibold block text-sm px-4 py-4 hover:bg-white-500 transition duration-300" to="/adote">
                            <span>Adote</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link class="text-white font-semibold block text-sm px-4 py-4 hover:bg-white-500 transition duration-300" to="/apoie">
                            <span>Apoie</span>
                        </router-link>
                    </li>

                    <li>
                        <router-link
                            class="text-white font-semibold block text-sm px-4 py-4 hover:bg-white-500 transition duration-300"
                            to="/admin"
                            v-if="isAuthenticated"
                        >
                            <span>Painel de controle</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link
                            class="text-white font-semibold block text-sm px-4 py-4 hover:bg-white-500 transition duration-300"
                            to="/login"
                            v-if="!isAuthenticated"
                        >
                            <span>Entrar</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link
                            class="text-white font-semibold block text-sm px-4 py-4 hover:bg-white-500 transition duration-300"
                            to="/logout"
                            v-if="isAuthenticated"
                        >
                            <span>Sair</span>
                        </router-link>
                    </li>
                </ul>
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
            this.showMenu = !this.showMenu;
        },
    },
};
</script>
