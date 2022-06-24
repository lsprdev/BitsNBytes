<template>
   <div class="flex justify-center max-w-3xl mx-auto py-10">
        <div class="w-full h-full ">

                <p>{{ image }}</p>

                <form class="bg-[#15393C] rounded px-12 pt-8 pb-8 mb-8" action="http://localhost:7777/api/dogadd" method="post">

                <div class="flex mb-4">

                    <img src="https://i.imgur.com/pMoL0kJ.png" class="rounded-lg h-48 w-52" alt="Avatar" id="img" />

                    <div class="px-4">
                        <label class="block text-white text-sm font-bold" for="image">
                                Foto
                            </label>
                            <input
                                type="file"
                                class="block mb-2 w-96 h-7 text-sm text-black-900 bg-white rounded border border-white cursor-pointer dark:text-gray-400 focus:outline-none" 
                                @change="uploadImage($event.target.files[0])"
                                accept="image/*"
                                >
                            <label class="block text-white text-sm font-bold mb-2" for="username">
                                Nome do Animal
                            </label>
                            <input
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline"
                                id="name" type="text" placeholder="Nome do Animal" name="dogname">
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
                            id="age" type="text" placeholder="Idade" name="dogage">
                    </div>
                    <div class="mb-4 ml-10">
                        <label class="block text-white text-sm font-bold mb-2">
                            Peso
                        </label>
                        <input
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline"
                            id="weight" type="text" placeholder="Peso" name="dogweight">
                    </div>
                    <div class="mb-4 ml-10">
                         <div class="mb-4">
                        <label class="block text-white text-sm font-bold mb-3" for="username">
                            Castrado
                        </label>
                            <div class="flex">
                                <input class="" type="radio" name="is_castrated" value="true" >
                                <span class="text-white ml-2 mr-2">Sim</span>
                                <input class="" type="radio" name="is_castrated" value="false">
                                <span class="text-white ml-2 mr-2">Não</span>
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
                            id="name" type="text" placeholder="Pelagem" name="dogfur" >
                    </div>
                    <div class="mb-4 ml-10">
                            <label class="block text-white text-sm font-bold mb-2" for="username">
                            Temperamento
                        </label>
                        <input
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline"
                            id="name" type="text" placeholder="Temperamento" name="dogtemp" >
                    </div>


                     <div class="mb-4 ml-10 py-">
                        <label class="block text-white text-sm font-bold mb-3" for="username">
                            Estará para doação?
                        </label>
                        <div class="flex">
                            <input class="" type="radio" name="is_adoptable" value="true">
                            <span class="text-white ml-2 mr-2">Sim</span>
                            <input class="" type="radio" name="is_adoptable" value="false">
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
                        id="desc" type="text" placeholder="Descrição" name="dogdesc" >
                </div>

                <div class="mb-4">
                    <label class="block text-white text-sm font-bold mb-2" for="username">
                        Nome do Cuidador
                    </label>
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline"
                        id="owner" type="text" placeholder="Nome do Cuidador" name="dogowner" >
                </div>
                <div class="mb-4">
                    <label class="block text-white text-sm font-bold mb-2" for="username">
                        Observações
                    </label>
                    <input
                        class="shadow appearance-none border rounded w-full py-4 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline"
                        id="name" type="text" placeholder="Observações" name="dogobs">
                </div>

                <!-- save button -->
                <div class="flex justify-center">
                        <div>
                        
                            <button @click="uploadImage()"></button>
                            <a href="/admin" class="bg-white text-[#15393C] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" value="Cancelar">Cancelar</a>    
            
                            <input class="bg-white text-[#15393C] font-bold py-2 px-6 ml-2 rounded cursor-pointer focus:outline-none focus:shadow-outline" type="submit" value="Salvar">                     
                        </div>
                    </div>    

            </form>
        </div>
    </div>
</template>

<script>
// import axios from 'axios';
export default {
    name: "AddForm",
    
    data() {
        return {
            image: "",
        };
    },
    methods: {
        uploadImage(image) {
            
            var myHeaders = new Headers();
            myHeaders.append("Authorization", "Client-ID 483db59972b36f5");

            var formdata = new FormData();
            formdata.append("image", image);

            var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
            };

            fetch("https://api.imgur.com/3/image", requestOptions)

            .then(data => data.json()).then(data => {
                this.image = data.data.link;
            })
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

        }

    }
};

</script>