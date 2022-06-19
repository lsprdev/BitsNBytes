<template>
    <div class="flex justify-center max-w-6xl mx-auto py-10">
        <div class="w-full h-full ">
            <form class="bg-[#15393C] rounded px-12 pt-8 pb-8 mb-8" action="http://localhost:7777/api/dogadd" return="http://localhost:8080/admin" method="post">

                <div class="mb-4">
                    <label class="block text-[#EFC68A] text-sm font-bold mb-2" for="password">
                        Foto
                    </label>
                    <input class="block mb-5 w-full text-sm text-black-900 bg-white rounded border border-white cursor-pointer dark:text-gray-400 focus:outline-none" id="default_size" type="file">
                </div>

                <div class="mb-4">
                    <label class="block text-[#EFC68A] text-sm font-bold mb-2" for="username">
                        Nome do Animal
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Nome do Animal" name="dogname">
                </div>

                <div class="mb-4">
                    <label class="block text-[#EFC68A] text-sm font-bold mb-2">
                        Idade 
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline" id="age" type="text" placeholder="Idade" name="dogage">
                </div>

                <div class="mb-4">
                    <label class="block text-[#EFC68A] text-sm font-bold mb-2">
                        Peso 
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline" id="weight" type="text" placeholder="Peso" name="dogweight">
                </div>

                <div class="mb-4">
                    <label class="block text-[#EFC68A] text-sm font-bold mb-2">
                        Descrição 
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline" id="desc" type="text" placeholder="Descrição" name="dogdesc">
                </div>

                <div class="mb-4">
                    <label class="block text-[#EFC68A] text-sm font-bold mb-2" for="username">
                        Nome do Cuidador
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline" id="owner" type="text" placeholder="Nome do Cuidador" name="dogowner">
                </div>

                <div class="mb-4">
                    <label class="block text-[#EFC68A] text-sm font-bold mb-2" for="username">
                        Estará para doação?
                    </label>
                    <input class="" type="radio" name="is_adoptable" value="true"><span class="text-[#EFC68A] ml-2 mr-2">Sim</span>
                    <input class="" type="radio" name="is_adoptable" value="false"><span class="text-[#EFC68A] ml-2 mr-2">Não</span>
                </div>

                <!-- save button -->
                <div class="flex justify-center">
                    <a href="/admin" class="bg-[#EFC68A] text-[#15393C] font-bold py-2 px-4 mr-2 rounded focus:outline-none focus:shadow-outline" type="button" value="Cancelar">Cancelar</a>
                    <input class="bg-[#EFC68A] text-[#15393C] font-bold py-2 px-6 ml-2 rounded cursor-pointer focus:outline-none focus:shadow-outline" type="submit" value="Salvar">      
                </div>

            </form>
        </div>
    </div>
</template>

<script>
// import axios from "axios";
export default {
    name: "AddForm",
};

</script>