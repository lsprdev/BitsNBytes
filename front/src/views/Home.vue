<template>
    <div>
        <IndexCarousel :slides="slides" :interval="5000" controls indicators class="mt-2 drop-shadow-md" />

        <h1 class="flex justify-center py-10 text-4xl text-[#15393C] font-semibold">Mascotes</h1>

        <IndexCards class="flex drop-shadow-md mb-9" />
    </div>
</template>

<script>
import IndexCards from "../components/IndexCards.vue";
import IndexCarousel from "../components/carousel/IndexCarousel.vue";

export default {
    data() {
        return {
            //140x400
            slides: ["https://i.imgur.com/8GDk8GT.png", "https://i.imgur.com/XHiew9b.jpg", "https://i.imgur.com/7aGRQwe.png"],
        };
    },
    methods: {
        changeCarouseImages() {
            if (window.screen.width < 900) {
                this.slides = ["https://i.imgur.com/lRnmaT3.png", "https://i.imgur.com/xu6SbB9.png", "https://i.imgur.com/iBGJ3ck.png"];
            }
        },
    },
    mounted() {
        this.changeCarouseImages();
    },
    components: {
        IndexCards,
        IndexCarousel,
    },
};
</script>

<style></style>
