<template>
    <h1 class="flex justify-center py-9 text-4xl text-[#15393C] font-semibold">Registro Diário</h1>
    <AddDiario />
    <h1 class="flex justify-center py- text-4xl text-[#15393C] font-semibold">Histórico</h1>
</template>

<script>
import AddDiario from '@/components/AddDiario.vue'
export default {
    components: {
        AddDiario
    },
}
</script>