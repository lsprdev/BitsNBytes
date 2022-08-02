<template>
        
      <div class="flex justify-center max-w-6xl mx-auto">
          
        <div class="w-full h-full ">
            
            <form class="bg-[#15393C] rounded px-14 pt-8 pb-8 mb-8" v-bind:action="'https://if-acolhe-back.herokuapp.com/api/regdAdd/'+dog.id" method="post">
                
                <div class="flex justify-between mb-4 mr-2">
                    <div class="flex">

                        <router-link 
                            v-bind:to="'/admin/diario/'+ dog.id"
                            class="bg-white py-2 px-2 ml-2 font-semibold text-[#15393C] rounded"
                        >  
                            <span>Registro Diário</span>
                        </router-link>

                        <router-link
                            v-bind:to="'/admin/consultas/'+ dog.id"
                            class="bg-white py-2 px-2 ml-2 font-semibold text-[#15393C] rounded"
                        >
                            <span>Consultas</span>
                        </router-link>

                        <router-link
                            v-bind:to="'/admin/vacinas/'+ dog.id"
                            class="bg-white py-2 px-2 ml-2 font-semibold text-[#15393C] rounded"
                        >
                            <span>Vacinas</span>
                        </router-link>
                        <router-link
                            v-bind:to="'/admin/galeria/'+ dog.id"
                            class="bg-white py-2 px-2 ml-2 font-semibold text-[#15393C] rounded"
                        >
                            <span>Galeria</span>
                        </router-link>
                    </div>
                </div>

                <div class="mb-2">
                    <label class="block text-white text-sm font-bold mb-3" for="username">
                            Já foi alimentado hoje?
                    </label>
                        <input class="" type="radio" name="is_fed" value="true">
                        <span class="text-white ml-2 mr-2">Sim</span>
                        <input class="" type="radio" name="is_fed" value="false">
                        <span class="text-white ml-2 mr-2">Não</span>
                </div>
                
                <label class="block text-white text-sm font-bold mb-2" for="username">
                    Se sim, quantas vezes?
                </label>
                    <input
                        class="shadow appearance-none border rounded w-15 py-2 px-3 mb-2 text-black-900 leading-tight focus:outline-none focus:shadow-outline"
                        id="name" type="text" placeholder="Alimentação" name="qt_fed" >

                <div class="mb-4">
                    <label class="block text-white text-sm font-bold mb-2" for="username">
                        Observação
                    </label>
                    <input 
                    class="shadow appearance-none border rounded h-16 w-full py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Observação" name="obs"
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
        
        axios.get("https://if-acolhe-back.herokuapp.com/api/dog/" + this.$route.params.id)
            .then(response => {
                this.dog = response.data;
            })
    },
};
</script>
