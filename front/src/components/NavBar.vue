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
                    <a href="/" class="flex items-center py-6 px-2">
                        <img class="h-fit w-12" src="../assets/logo2.png" />
                        <span class="text-[#EFC68A] font-semibold text-xl tracking-tight px-2">IF AMPARA</span>
                    </a>
                </div>
                <!-- FIM LOGO -->
                <!-- ENTRAR -->
                <div class="flex items-center py-4 px-2">

                    <a 
                        class="py-2 px-2 font-semibold text-[#EFC68A] rounded hover:bg-[#EFC68A] hover:text-[#15393C] transition duration-300"
                        href="/adote"
                    >
                        <span>Apoie</span>
                    </a>

                    <a
                        class="py-2 px-2 mr-12 ml-12 font-semibold text-[#EFC68A] rounded hover:bg-[#EFC68A] hover:text-[#15393C] transition duration-300"
                        href="/adote"
                    >
                        <span>Adote</span>
                    </a>

                    <a   
                    
                    class="py-2 px-2 mr-12 font-semibold text-[#EFC68A] rounded hover:bg-[#EFC68A] hover:text-[#15393C] transition duration-300"
                    v-if="isAuthenticated" href="/admin"
                    >
                    
                        <span>Painel de Controle</span>
                    </a >


                    <a  
                    class="py-2 px-2 font-semibold text-[#EFC68A] rounded hover:bg-[#EFC68A] hover:text-[#15393C] transition duration-300"
                    v-if="!isAuthenticated" @click="login()"
                    >

                        <span>Entrar</span>
                    </a >
                   
                    <a   
                    class="py-2 px-2 font-semibold text-[#EFC68A] rounded hover:bg-[#EFC68A] hover:text-[#15393C] transition duration-300"
                    v-if="isAuthenticated" @click="logout()"
                    >
                    
                        <span>Sair</span>
                    </a >
                </div>
                <!-- FIM ENTRAR -->
            </div>
        </div>
    </nav>
</template>

<script>
    import { useAuth0 } from '@auth0/auth0-vue';

  export default {
    setup() {
      const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

      return {
        login: () => {
          loginWithRedirect();
        },
        logout: () => {
          logout({ returnTo: window.location.origin });
        },

        isAuthenticated
      };
    }
  };
</script>
