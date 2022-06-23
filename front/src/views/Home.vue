<template>
    <div>
        <IndexCarousel :slides="slides" :interval="5000" controls indicators class="mt-6 drop-shadow-md" />
        
        <h1 class="flex justify-center py-10 text-4xl text-[#15393C] font-semibold">Mascotes</h1>

        <IndexCards class="flex drop-shadow-lg mb-9" />
    </div>
</template>

<script>
import IndexCards from "../components/IndexCards.vue";
import IndexCarousel from "../components/carousel/IndexCarousel.vue";

export default {
    data() {
        return {
            //140x400
            slides: [
                "https://www.merck-animal-health-usa.com/wp-content/uploads/sites/54/2020/08/canine-1-cv-hero-desktop.jpg",
                "https://picsum.photos/id/1037/2500/400",
                "https://picsum.photos/id/1037/2500/400",
            ],
        };
    },
    components: {
        IndexCards,
        IndexCarousel,
    },
};
</script>

<style></style>
