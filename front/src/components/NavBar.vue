<template>
  <nav class="bg-[#15393c] shadow-xl">
    <div class="max-w-6xl mx-auto px-4">
      <div class="flex justify-between">
        <!-- LOGO -->
        <div>
          <a href="/" class="flex items-center py-6 px-2">
            <img class="h-fit w-12" src="../assets/logo.png" />
            <span
              class="text-[#EFC68A] font-semibold text-xl tracking-tight px-2"
              >Portal Animal</span
            >
          </a>
        </div>
        <!-- FIM LOGO -->
        <!-- ENTRAR -->
        <div class="flex items-center py-4 px-2">
          <a
            href=""
            class="py-2 px-2 font-semibold text-[#EFC68A] rounded hover:bg-[#EFC68A] hover:text-[#050205] transition duration-300"
          >
            <span>Apoie</span>
          </a>
          <a
            href=""
            class="py-2 px-2 mr-12 ml-12 font-semibold text-[#EFC68A] rounded hover:bg-[#EFC68A] hover:text-[#050205] transition duration-300"
          >
            <span>Adote</span>
          </a>
          <button
            @click="login()"
            class="py-2 px-2 font-semibold text-[#EFC68A] rounded hover:bg-[#EFC68A] hover:text-[#050205] transition duration-300"
          >
            <span>Entrar</span>
          </button>
        </div>
        <!-- FIM ENTRAR -->
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    login() {
      this.$auth0.loginWithRedirect();
    },
    logout() {
      this.$auth0.logout({ returnTo: window.location.origin });
    },
  },
};
</script>
