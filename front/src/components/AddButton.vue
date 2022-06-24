<template>
    <div class="flex items-center py-5 px-7">    
        <router-link  to="/admin/add" class="font-semibold text-white rounded-lg bg-[#15393C] py-1 px-3">
        <span><span class="text-lg">+ </span>Adicionar Animal</span>
      </router-link>
      <div class="flex ml-5">
        <a href="" class="font-semibold text-white rounded-lg bg-[#15393C] py-1 px-3">
            <span><span class="text-lg">+ </span>Adicionar Responsável</span>
        </a>
      </div>
   </div>
</template>

<script>
export default {
    name: "AddButton",
};
</script>