<template>
  <div
    class="flex flex-col py-5 grid grid-rows-1 grid-flow-col gap-10 sm:flex-row justify-center"
  >
    <div v-for="card in cards.data" :key="card.index">
      <div class="flex justify-start px-7 mb-8">
        <div class="rounded-lg shadow-lg bg-[#15393c] max-w-sm">
          <a href="/">
            <!-- colocar imagens no banco amanhã -->
            <img
              class="rounded-t-lg h-96"
              :src="card.photo"
              alt=""
              width="410"
            />
          </a>
          <div class="p-6">
            <div class="flex justify-between">
              <h5 class="text-[#EFC68A] text-xl font-medium mb-2">
                {{ card.name }}
              </h5>
              <h5 class="text-[#EFC68A] text-xl font-medium mb-2">
                {{ card.age }} Anos
              </h5>
            </div>

            <p class="text-white text-base mb-4 h-20">
              {{ card.description }}
            </p>
            <div class="flex justify-between px-8">
              <a
                type="button"
                class="inline-block px-6 py-2.5 bg-[#EFC68A] text-[#050205] font-semibold text-xs leading-tight uppercase rounded shadow-md"
                >Comentar</a
              >
              <a
                type="button"
                class="inline-block px-6 py-2.5 bg-[#EFC68A] text-[#050205] font-semibold text-xs leading-tight uppercase rounded shadow-md"
                >Galeria</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["cards"],
};
</script>
