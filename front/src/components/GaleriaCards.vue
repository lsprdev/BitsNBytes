<template>
    <h1 class="flex justify-center py-10 text-5xl text-[#15393C] font-semibold">Galeria do </h1>
    <span>
        <div class="flex overflow-hidden whitespace-nowrap no-scrollbar relative scroll-smooth snap-x mb-10" id="container">
            <div v-for="card in cards.data" :key="card.index">
                <div class="flex px-3 m-2 snap-center">
                    <div class="rounded-lg shadow-lg bg-[#15393C] w-[300px] lg:w-[410px]">
                        <a href="/">
                            <!-- colocar imagens no banco amanhã -->
                            <img class="rounded-lg h-80 w-full" :src="card.photo" />
                        </a>

                    </div>
                </div>
            </div>
        </div>
        <span v-if="showControls">
            <button class="card-control left" @click="left"><ChevronLeftIcon class="card-control w-20" /></button>
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
            showControls: true,
        };
    },
    mounted() {
        axios.get("https://if-acolhe-back.herokuapp.com/api/dogs").then((response) => (this.cards = response));
    },
    methods: {
        left() {
            document.getElementById("container").scrollLeft -= 320;
        },
        right() {
            document.getElementById("container").scrollLeft += 320;
        },

        age(age) {
            if (age > 1) {
                return "Anos";
            } else {
                return "Ano";
            }
        },
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
    color: #ffffff8f;

    transition: 0.5s;
}
.card-control:hover {
    color: #f8fafc;
}
.left {
    left: 0;
}
.right {
    right: 0;
}
</style>

