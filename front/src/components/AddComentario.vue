<template>
        
      <div class="flex justify-center max-w-6xl mx-auto">
          
        <div class="w-full h-full ">
            
            <form class="bg-[#15393C] rounded px-14 pt-8 pb-8 mb-8" v-bind:action="'http://localhost:7777/api/regdAdd/'+dog.id" method="post">

                <div class="mb-4">
                    <label class="block text-white text-sm font-bold mb-2" for="username">
                        Comentário
                    </label>
                    <input 
                    class="shadow appearance-none border rounded h-16 w-full py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Comentário" name="obs"
                    >
                </div>

                 <div class="mb-4">
                    <label class="block text-white text-sm font-bold mb-2" for="username">
                        Nome Completo
                    </label>
                    <input 
                    class="shadow appearance-none border rounded w-full py-2 px-3 mb-2 text-black-900 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Nome Completo" name="obs"
                    >
                </div>

                <div class="flex justify-between mb-5">
                   <div>
                        <label class="block text-white text-sm font-bold mb-2" for="username">
                            Qual sua turma?
                        </label>

                        <select class="form-select appearance-none
                                block
                                w-full
                                px-3
                                py-2
                                text-base
                                font-normal
                                text-black
                                bg-white 
                                rounded" name="doggender">
                            <option value="macho">1INFO 1</option>
                            <option value="macho">1INFO 2</option>
                            <option value="macho">1INFO 3</option>
                            <option value="macho">2INFO 1</option>
                            <option value="macho">2INFO 2</option>
                            <option value="macho">2INFO 3</option>
                            <option value="macho">3INFO 1</option>
                            <option value="macho">3INFO 2</option>
                            <option value="macho">3INFO 3</option>

                            <option value="macho">1AGRO 1</option>
                            <option value="macho">1AGRO 2</option>
                            <option value="macho">1AGRO 3</option>
                            <option value="macho">2AGRO 1</option>
                            <option value="macho">2AGRO 2</option>
                            <option value="macho">2AGRO 3</option>
                            <option value="macho">3AGRO 1</option>
                            <option value="macho">3AGRO 2</option>
                            <option value="macho">3AGRO 3</option>

                            <option value="macho">1QUIMI</option>
                            <option value="macho">2QUIMI</option>
                            <option value="macho">3QUIMI</option>
                            <option value="macho">4QUIMI</option>
                           
                        </select>
                   </div>
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
