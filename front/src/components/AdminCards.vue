<template>
    <div class="flex overflow-x-auto whitespace-nowrap no-scrollbar" id="container">
        <button class="card-control left" @click="left"><ChevronLeftIcon class="card-control h-50 w-20" /></button>

        <div v-for="card in cards.data" :key="card.index">
            <div class="flex justify-start px-3 mb-10">
                <div class="rounded-lg shadow-lg bg-[#15393C] max-w-sm">
                    <a href="/">
                        <!-- colocar imagens no banco amanhã -->
                        <img class="rounded-t-lg h-80" :src="card.photo" width="410" />
                    </a>
                    <div class="p-6">
                        <div class="flex justify-between">
                            <h5 class="text-[#EFC68A] text-xl font-medium mb-2">
                                {{ card.name }}
                            </h5>
                            <h5 class="text-[#EFC68A] text-xl font-medium mb-2">{{ card.age }} Anos</h5>
                        </div>

                        <p class="text-[#EFC68A] text-base mb-4 h-20">
                            {{ card.description }}
                        </p>
                        <div class="flex flex-col px-8 sm:flex-row sm:justify-between">
                            <a
                                type="button"
                                class="inline-block px-6 py-2.5 mr-1 bg-[#EFC68A] text-[#15393C] font-semibold text-xs leading-tight uppercase rounded shadow-md"
                                >Registros</a
                            >
                            <a
                                type="button"
                                class="inline-block px-6 py-2.5 ml-1 bg-[#EFC68A] text-[#15393C] font-semibold text-xs leading-tight uppercase rounded shadow-md"
                                >Editar</a
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <button class="card-control right" @click="right">
            <ChevronRightIcon class="card-control h-20 w-20" />
        </button>
    </div>
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
            document.getElementById("container").scrollLeft -= 250;
        },
        right() {
            document.getElementById("container").scrollLeft += 250;
        },
    },
    components: {
        ChevronLeftIcon,
        ChevronRightIcon,
    },
};
</script>

<style scoped>
/* Hide scrollbar for Chrome, Safari and Opera */
.no-scrollbar::-webkit-scrollbar {
    display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.no-scrollbar {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
}

#container {
    position: relative;
    overflow: hidden;
    scroll-behavior: smooth;
}

.card-control {
    background-color: transparent;
    border: none;
    position: sticky;
    height: 500px;
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
