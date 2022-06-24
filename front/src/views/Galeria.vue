<template>
    <div>
        <h1 class="flex justify-center py-10 text-5xl text-[#15393C] font-semibold">Galeria</h1>
        <GaleriaCards />
    </div>
</template>

<script>
import GaleriaCards from "@/components/GaleriaCards.vue";

export default {
    components: {
        GaleriaCards,
    },
}



</script>