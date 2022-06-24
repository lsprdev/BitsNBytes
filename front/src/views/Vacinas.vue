<template>
    <div>
        <h1 class="flex justify-center py-9 text-4xl text-[#15393C] font-semibold">Vacinas</h1>
        <AddVacinas />
        <h1 class="flex justify-center py-9 text-4xl text-[#15393C] font-semibold">Histórico</h1>
    </div>
</template>

<script>
import AddVacinas from "@/components/AddVacinas.vue";
export default {
    components: {
        AddVacinas,
    }
}
</script>