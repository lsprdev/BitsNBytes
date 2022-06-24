<template>
        
      <div class="flex justify-center max-w-6xl mx-auto">
          
        <div class="w-full h-full ">
            
            <form class="bg-[#15393C] rounded px-14 pt-8 pb-8 mb-8" v-bind:action="'http://localhost:7777/api/regmAdd/'+dog.id" method="post">
                
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

                <div class="mb-4">
                    <label class="block text-white text-sm font-bold mb-2" for="username">
                        Queixa Principal
                    </label>
                    <input 
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Queixa Principal" name="queixa"
                    >
                </div>

                <div class="mb-4">
                    <label class="block text-white text-sm font-bold mb-2" for="username">
                        Aparência Geral
                    </label>
                    <input 
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Aparência Geral" name="aparencia"
                    >
                </div>

                <div class="mb-4">
                    <label class="block text-white text-sm font-bold mb-2" for="username">
                        Estado de Hidratação
                    </label>
                    <input 
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Estado de Hidratação" name="hidratacao"
                    >
                </div>

                <div class="mb-4">
                    <label class="block text-white text-sm font-bold mb-2" for="username">
                        Suspeita
                    </label>
                    <input 
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Suspeita" name="suspeita"
                    >
                </div>
                <div class="flex">
                    <div class="mb-4">
                        <label class="block text-white text-sm font-bold mb-2" for="username">
                            Peso
                        </label>
                        <input 
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Peso" name="peso"
                        >
                    </div>

                    <div class="mb-4 ml-5">
                        <label class="block text-white text-sm font-bold mb-2" for="username">
                            Temperatura
                        </label>
                        <input 
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Temperatura" name="temperatura"
                        >
                    </div>
                </div>
                 <div class="mb-4">
                    <label class="block text-white text-sm font-bold mb-2" for="username">
                        Anotações
                    </label>
                    <input 
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Anotações" name="anotacoes"
                    >
                </div>

                 <div class="mb-4">
                    <label class="block text-white text-sm font-bold mb-2" for="username">
                        Diagnóstico
                    </label>
                    <input 
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Diagnóstico" name="diagnostico"
                    >
                </div>

                <div class="mb-4">
                    <label class="block text-white text-sm font-bold mb-2" for="username">
                        Médico
                    </label>
                    <input 
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Médico" name="medico"
                    >
                </div>
                
                <div class="flex">
                    <div class="mb-4">
                        <label class="block text-white text-sm font-bold mb-2" for="username">
                            Data
                        </label>
                        <input 
                        class="shadow appearance-none border rounded w-15 py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline" type="date" placeholder="Data" name="data"
                        >
                    </div>

                    <div class="mb-4 ml-5">
                        <label class="block text-white text-sm font-bold mb-2" for="username">
                            Hora
                        </label>
                        <input 
                        class="shadow appearance-none border rounded w-15 py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline" type="time" placeholder="Hora" name="hora"
                        >
                    </div>

                </div>

                 <div class="mb-4">
                    <label class="block text-white text-sm font-bold mb-2" for="username">
                        Orçamento
                    </label>
                    <input 
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Orçamento" name="orcamento"
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
