<template>
    <div class="flex justify-center max-w-3xl mx-auto py-10">
        <div class="w-full h-full ">
            <form class="bg-[#15393C] rounded px-12 pt-8 pb-8 mb-8" v-bind:action="'https://if-acolhe-back.herokuapp.com/api/dogupdate/' + dog.id" method="post">

                <div class="flex mb-4">
                    <img :src="dog.photo" class="rounded-lg h-48 w-52" alt="Avatar" />
                    <div class="px-4">
                        <label class="block text-white text-sm font-bold" for="image">
                                Foto
                            </label>
                            <input
                                class="block mb-2 w-96 h-7 text-sm text-black-900 bg-white rounded border border-white cursor-pointer dark:text-gray-400 focus:outline-none"
                                id="default_size" type="file">
                            <label class="block text-white text-sm font-bold mb-2" for="username">
                                Nome do Animal
                            </label>
                            <input
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline"
                                id="name" type="text" placeholder="Nome do Animal" name="dogname" v-model="dog.name">
                            <label class="block text-white text-sm font-bold mb-2" for="username">
                            Sexo do Animal
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
                            <option value="macho">Macho</option>
                            <option value="femea">Femea</option>
                        </select>
                    </div>

                </div>
                

                <div class="flex justify-start"> 
                    <div class="mb-4">
                        <label class="block text-white text-sm font-bold mb-2">
                            Idade
                        </label>
                        <input
                            class="shadow appearance-none border rounded w-15 py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline"
                            id="age" type="text" placeholder="Idade" name="dogage" v-model="dog.age">
                    </div>
                    <div class="mb-4 ml-10">
                        <label class="block text-white text-sm font-bold mb-2">
                            Peso
                        </label>
                        <input
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline"
                            id="weight" type="text" placeholder="Peso" name="dogweight" v-model="dog.weight">
                    </div>
                    <div class="mb-4 ml-10">
                         <div class="mb-4">
                        <label class="block text-white text-sm font-bold mb-3" for="username">
                            Castrado
                        </label>
                        <div v-if="dog.is_castrated === 'true'">
                            <div class="flex">
                                <input class="" type="radio" name="is_castrated" value="true" checked>
                                <span class="text-white ml-2 mr-2">Sim</span>
                                <input class="" type="radio" name="is_castrated" value="false">
                                <span class="text-white ml-2 mr-2">Não</span>
                            </div>
                        </div>
                        <div v-else>
                            <div class="flex">
                                <input class="" type="radio" name="is_castrated" value="true">
                                <span class="text-white ml-2 mr-2">Sim</span>
                                <input class="" type="radio" name="is_castrated" value="false" checked>
                                <span class="text-white ml-2 mr-2">Não</span>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>

                  <div class="flex justify-start"> 
                    <div class="mb-4">
                        <label class="block text-white text-sm font-bold mb-2" for="username">
                            Pelagem
                        </label>
                        <input
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline"
                            id="name" type="text" placeholder="Pelagem" name="dogfur" v-model="dog.fur">
                    </div>
                    <div class="mb-4 ml-10">
                            <label class="block text-white text-sm font-bold mb-2" for="username">
                            Temperamento
                        </label>
                        <input
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline"
                            id="name" type="text" placeholder="Temperamento" name="dogtemp" v-model="dog.temperament">
                    </div>


                     <div class="mb-4 ml-10 py-">
                        <label class="block text-white text-sm font-bold mb-3" for="username">
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
                </div>

                <div class="mb-4">
                    <label class="block text-white text-sm font-bold mb-2">
                        Descrição
                    </label>
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline"
                        id="desc" type="text" placeholder="Descrição" name="dogdesc" v-model="dog.description">
                </div>

                <div class="mb-4">
                    <label class="block text-white text-sm font-bold mb-2" for="username">
                        Nome do Cuidador
                    </label>
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline"
                        id="owner" type="text" placeholder="Nome do Cuidador" name="dogowner" v-model="dog.owner_name">
                </div>
                <div class="mb-4">
                    <label class="block text-white text-sm font-bold mb-2" for="username">
                        Observações
                    </label>
                    <input
                        class="shadow appearance-none border rounded w-full py-4 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline"
                        id="name" type="text" placeholder="Observações" name="dogobs" v-model="dog.observations">
                </div>

                <!-- save button -->
                <div class="flex justify-between">
                        <div>
                 
                            <a href="/admin" class="bg-white text-[#15393C] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" value="Cancelar">Cancelar</a>    
            
                            <input class="bg-white text-[#15393C] font-bold py-2 px-6 ml-2 rounded cursor-pointer focus:outline-none focus:shadow-outline" type="submit" value="Salvar">                     
                        </div>
                        <div>  
                            <button @click="excluir(dog.id)" class="bg-white text-[#15393C] font-bold py-2 px-6 ml-2 rounded cursor-pointer focus:outline-none focus:shadow-outline" type="button" value="Excluir">Excluir</button>
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

        axios.get("https://if-acolhe-back.herokuapp.com/api/dog/" + this.$route.params.id)
            .then(response => {
                this.dog = response.data;
            })
    },
    // Arrumar
    methods: {
        excluir(dog_id) {
            axios.post(`https://if-acolhe-back.herokuapp.com/api/dogdel/${dog_id}`).then(response => {
                this.$router.push('/admin');
                return response.data;
            })
        }
    }
};
</script>