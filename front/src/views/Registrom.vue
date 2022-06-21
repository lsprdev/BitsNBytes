<template>
   <div>
       <h1 class="flex justify-center py-9 text-4xl text-[#15393C] font-semibold">Registro Médico</h1>
       <AddRegm />
   </div>
    
</template>

<script>
import AddRegm from '@/components/AddRegm.vue'
export default {
    components: {
        AddRegm
    },
}
</script>