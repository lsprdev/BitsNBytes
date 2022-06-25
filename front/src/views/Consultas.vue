<template>
    <h1 class="flex justify-center py-9 text-4xl text-[#15393C] font-semibold">Consultas</h1>
    <AddConsultas />
    <h1 class="flex justify-center py-4 text-4xl text-[#15393C] font-semibold">Histórico</h1>
    <HistConsulta />
</template>

<script>
import AddConsultas from '@/components/AddConsultas.vue'
import HistConsulta from '@/components/HistConsulta.vue'
export default {
    components: {
        AddConsultas,
        HistConsulta
    },
}
</script>