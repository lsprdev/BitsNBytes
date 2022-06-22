<template >
<span>
<div class="flex overflow-hidden whitespace-nowrap p-4 no-scrollbar relative scroll-smooth snap-x" id="container">
       

        <div v-for="card in cards.data" :key="card.index">

            <div class="flex  px-3 m-4 snap-center">
                <div class="rounded-lg shadow-lg bg-[#15393C] w-[300px] lg:w-[410px]">
                    <a href="/">
                        <!-- colocar imagens no banco amanhã -->
                        <img class="rounded-t-lg h-80 w-full" :src="card.photo"  />
                    </a>
                    <div class="p-6">
                        <div class="flex justify-between">
                            <h5 class="text-[#EFC68A] text-xl font-medium mb-2">
                                {{ card.name }}
                            </h5>
                            <h5 class="text-[#EFC68A] text-xl font-medium mb-2">{{ card.age }} {{ age(card.age) }}</h5>
                        </div>

                        <p class="text-[#EFC68A] text-base mb-4 h-20">
                            {{ card.description }}
                        </p>
                         <div class="flex justify-center flex-row ">
                            <a
                                type="button"
                                class="inline-block px-6 py-2.5 mr-3 bg-[#EFC68A] text-[#15393C] cursor-pointer font-semibold text-xs leading-tight uppercase rounded shadow-md"
                                >Comentar</a
                            >
                            <a
                                type="button"
                                class="inline-block px-6 py-2.5 ml-3 bg-[#EFC68A] text-[#15393C] cursor-pointer font-semibold text-xs leading-tight uppercase rounded shadow-md"
                                >Galeria</a
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
    <span>

        <button class="card-control left" @click="left"><ChevronLeftIcon class="card-control  w-20" /></button>
        <button class="card-control right" @click="right"><ChevronRightIcon class="card-control w-20" /></button>
    </span>
</span>
    
</template>

<script>
import axios from "axios";
import {ChevronLeftIcon} from "@heroicons/vue/solid";
import {ChevronRightIcon} from "@heroicons/vue/solid";

export default {
    name: "App",
    data() {
        return {
            cards: [],
            
        };
    },
    mounted() {
        axios.get("http://localhost:7777/api/dogs").then((response) => (this.cards = response));
    },
    methods: {
        left() {
            document.getElementById("container").scrollLeft -= 320;
        },
        right() {
            document.getElementById("container").scrollLeft += 320;
        },
        controls(){
            document.getElementById
        },
        age(age){
            if (age > 1){
                return "Anos"
            }
            else{
                return "Ano"
            }
        }

    },
    components: {
        ChevronLeftIcon,
        ChevronRightIcon,
    },

};
</script>

<style scoped>


.card-control {
    background-color: transparent;
    border: none;
    position: absolute;
    width: 70px;
    top: calc(50% - 25px);
    color: #efc78a2c;

    transition: 0.5s;
}
.card-control:hover {
    color: #efc68a;
}
.left {
    left: 0;
}
.right {
    right: 0;

    
}




</style>
