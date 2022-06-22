<template>
  <footer class="border-t bg-[#15393C]">
    <div
      class="
        container
        flex flex-col flex-wrap
        px-4
        py-12
        mx-auto
        md:items-center
        lg:items-center
        md:flex-row md:flex-nowrap
      "
    >
      <div class="flex-shrink-0 w-64 mx-auto text-center md:mx-16 md:text-left">
        <a
          class="
            flex
            items-center
            justify-center
            text-2xl
            font-bold
            text-white
            md:justify-start
          "
        >
          <img class="h-fit w-12" src="../assets/logo3.png" />
          <span class="text-white font-semibold text-xl tracking-tight px-2"
            >IF ACOLHE</span
          >
        </a>
        <p class="mt-6 text-l text-justify text-white">
          O IF Acolhe é um projeto realizado pelos estudantes da 3info3 que tem
          como objetivo controlar os animais que circulam no Campus.
        </p>

        <div class="flex justify-center mt-4 lg:mt-2">
          <br />
          <p class="text-white">Rede social</p>
          <a class="ml-3" href="https://www.instagram.com/ifacolhe/">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-6 h-6 text-pink-400"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path
                d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"
              ></path>
            </svg>
          </a>
        </div>
      </div>
      <div class="justify-between w-full mt-4 text-center lg:flex">
        <div class="w-full px-4 lg:w-1/3 md:w-1/2">
          <h2 class="text-white mb-6 font-semibold text-xl tracking-tight px-2">
            LINKS ÚTEIS
          </h2>
          <ul class="mb-6 space-y-2 text-l list-none">
            <li>
              <a class="text-white" href="/">Home</a>
            </li>
            <li>
              <a class="text-white" href="/adote">Adote</a>
            </li>
            <li>
              <a class="text-white" href="/apoie">Apoie</a>
            </li>
            <li>
              <a class="text-white" href="/">Galeria</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style>
</style>