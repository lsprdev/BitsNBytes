<template>
    <div>
        <IndexCarousel :slides="slides" :interval="5000" controls indicators class="mt-6 drop-shadow-md" />
        <IndexCards class="mt-6 drop-shadow-lg" />
    </div>
</template>

<script>
import IndexCards from "../components/IndexCards.vue";
import IndexCarousel from "../components/carousel/IndexCarousel.vue";
export default {
    data() {
        return {
            //140x400
            slides: ["https://www.merck-animal-health-usa.com/wp-content/uploads/sites/54/2020/08/canine-1-cv-hero-desktop.jpg", "https://picsum.photos/id/1033/1440/400", "https://picsum.photos/id/1037/1440/400"],
        };
    },
    components: {
        IndexCards,
        IndexCarousel,
    },
};
</script>

<style></style>
