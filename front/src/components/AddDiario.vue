<template>
        
      <div class="flex justify-center max-w-6xl mx-auto">
          
        <div class="w-full h-full ">
            
            <form class="bg-[#15393C] rounded px-14 pt-8 pb-8 mb-8" v-bind:action="'http://localhost:7777/api/regdAdd/'+dog.id" method="post">
                
                <div class="flex justify-between mb-4 mr-2">
                    <div class="flex">
                        <a
                            v-bind:href="'/admin/diario/'+ dog.id"
                            class="bg-white py-2 px-2 ml-2 font-semibold text-[#15393C] rounded"
                        >  
                            <span>Registro Diário</span>
                        </a>
                        <a
                            v-bind:href="'/admin/consultas/'+ dog.id"
                            class="bg-white py-2 px-2 ml-2 font-semibold text-[#15393C] rounded"
                            to="/admin/regm"
                        >
                            <span>Consultas</span>
                        </a>
                        <a
                            v-bind:href="'/admin/consultas/'+ dog.id"
                            class="bg-white py-2 px-2 ml-2 font-semibold text-[#15393C] rounded"
                            to="/admin/regm"
                        >
                            <span>Vacinas</span>
                        </a>
                    </div>
                </div>

                <div class="mb-4">
                    <label class="block text-white text-sm font-bold mb-2" for="username">
                        Nome do Animal
                    </label>
                    <input 
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="text" name="desc"
                    >
                </div>

                <!-- save button -->
                <div class="flex justify-center">
                    <a href="/admin" class="bg-white text-[#15393C] font-bold py-2 px-4 mr-2 rounded focus:outline-none focus:shadow-outline" type="button" value="Cancelar">Cancelar</a>
                    <input class="bg-white text-[#15393C] font-bold py-2 px-6 ml-2 rounded cursor-pointer focus:outline-none focus:shadow-outline" type="submit" value="Salvar">      
                </div>

            </form>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    data() {
        return {
            dog: [],
        };
    },
    mounted() {
        
        axios.get("http://localhost:7777/api/dog/" + this.$route.params.id)
            .then(response => {
                this.dog = response.data;
            })
    },
};
</script>
