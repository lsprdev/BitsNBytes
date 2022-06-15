<template>
    <!-- in vue 2.x you need wrap these buttons in a div -->

    <button class="carousel-control left" @click="$emit('prev')">&lt;</button>
    <button class="carousel-control right" @click="$emit('next')">></button>
</template>

<script>
export default {
    emits: ["prev", "next"], // vue v3
};
</script>