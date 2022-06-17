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
            slides: ["https://picsum.photos/id/1032/1440/400", "https://picsum.photos/id/1033/1440/400", "https://picsum.photos/id/1037/1440/400"],
        };
    },
    components: {
        IndexCards,
        IndexCarousel,
    },
};
</script>

<style></style>
