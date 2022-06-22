<template>
    <div class="flex justify-center max-w-6xl mx-auto py-10">
        <div class="w-full h-full ">
            <form class="bg-[#15393C] rounded px-12 pt-8 pb-8 mb-8" v-bind:action="'http://localhost:7777/api/dogupdate/'+dog.id" return="http://localhost:8080/admin" method="post">

                <div class="mb-4">
                    <label class="block text-white text-sm font-bold mb-2" for="password">
                        Foto
                    </label>
                    <input class="block mb-5 w-full text-sm text-black-900 bg-white rounded border border-white cursor-pointer dark:text-gray-400 focus:outline-none" id="default_size" type="file">
                </div>

                <div class="mb-4">
                    <label class="block text-white text-sm font-bold mb-2" for="username">
                        Nome do Animal
                    </label>
                    <input 
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Nome do Animal" name="dogname"
                    v-model="dog.name"
                    >
                </div>

                <div class="mb-4">
                    <label class="block text-white text-sm font-bold mb-2">
                        Idade 
                    </label>
                    <input 
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline" id="age" type="text" placeholder="Idade" name="dogage"
                    v-model="dog.age"
                    >
                </div>

                <div class="mb-4">
                    <label class="block text-white text-sm font-bold mb-2">
                        Peso 
                    </label>
                    <input 
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline" id="weight" type="text" placeholder="Peso" name="dogweight"
                    v-model="dog.weight"
                    >
                </div>

                <div class="mb-4">
                    <label class="block text-white text-sm font-bold mb-2">
                        Descrição 
                    </label>
                    <input 
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline" id="desc" type="text" placeholder="Descrição" name="dogdesc"
                    v-model="dog.description"
                    >
                </div>

                <div class="mb-4">
                    <label class="block text-white text-sm font-bold mb-2" for="username">
                        Nome do Cuidador
                    </label>
                    <input 
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline" id="owner" type="text" placeholder="Nome do Cuidador" name="dogowner"
                    v-model="dog.owner_name"
                    >
                </div>

                <div class="mb-4">
                    <label class="block text-white text-sm font-bold mb-2" for="username">
                        Estará para doação?
                    </label>

                    <div v-if="dog.is_adoptable === 'true'">
                        <input class="" type="radio" name="is_adoptable" value="true" checked>
                        <span class="text-white ml-2 mr-2">Sim</span>
                        <input class="" type="radio" name="is_adoptable" value="false">
                    <span class="text-white ml-2 mr-2">Não</span>
                    </div>
                    <div v-else>
                        <input class="" type="radio" name="is_adoptable" value="true">
                        <span class="text-white ml-2 mr-2">Sim</span>
                        <input class="" type="radio" name="is_adoptable" value="false" checked>
                    <span class="text-white ml-2 mr-2">Não</span>
                    </div>
                </div>

                <!-- save button -->
                <div class="flex justify-between">
                    <div>
                        <!-- Cancelar -->
                        <a href="/admin" class="bg-white text-[#15393C] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" value="Cancelar">Cancelar</a>    
                        <!-- Salvar -->
                        <input class="bg-white text-[#15393C] font-bold py-2 px-6 ml-2 rounded cursor-pointer focus:outline-none focus:shadow-outline" type="submit" value="Salvar">                     
                    </div>
                    <div>  
                        <!-- Excluir   -->
                        <button @click="excluir(dog.id)" class="bg-white text-[#15393C] font-bold py-2 px-6 ml-2 rounded cursor-pointer focus:outline-none focus:shadow-outline" type="button" value="Cancelar">Excluir</button>
                    </div>
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
    // Arrumar
    methods: {
        excluir(dog_id) {
            axios.post(`http://localhost:7777/api/dogdel/${dog_id}`).then(response => {
                this.$router.push('/admin');
                return response.data;
            })
        }
    }
};
</script>