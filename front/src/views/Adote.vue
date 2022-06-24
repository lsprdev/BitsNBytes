<template>
    <h1 class="flex justify-center py-10 text-5xl text-[#15393C] font-semibold"> Cães para adoção</h1>
    <AdoteCards></AdoteCards>
    <div class="py-5">
        <h1 class="flex justify-center py-3 text-2xl text-[#15393C] font-semibold">Deseja adotar? Nos envie um email para mais informações.</h1>
        <h1 class="flex justify-center text-2xl text-[#15393C] font-semibold">ifacolhe@proton.me</h1>
    </div>
    <div class="mb-7"></div>
</template>

<script>
import AdoteCards from "../components/AdoteCards.vue";
export default {
    components: {
        AdoteCards,
    },
};
</script>

<style></style>
