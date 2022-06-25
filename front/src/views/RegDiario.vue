<template>
    <h1 class="flex justify-center py-9 text-4xl text-[#15393C] font-semibold">Registro Diário</h1>
    <AddDiario />
     <h1 class="flex justify-center py-5 text-4xl text-[#15393C] font-semibold">Histórico</h1>
    <HistDiario />
</template>

<script>
import AddDiario from '@/components/AddDiario.vue'
import HistDiario from '@/components/HistDiario.vue'
export default {
    components: {
        AddDiario,
        HistDiario
    },
}
</script>