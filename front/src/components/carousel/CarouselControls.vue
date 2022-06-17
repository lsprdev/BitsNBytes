<template>
    <div>
        <button class="carousel-control left" @click="$emit('prev')">&lt;</button>
        <button class="carousel-control right" @click="$emit('next')">></button>
    </div>
    <!-- in vue 2.x you need wrap these buttons in a div -->
</template>

<script>
export default {
    emits: ["prev", "next"], // vue v3
};
</script>

<style scoped>
.carousel-control {
    background-color: transparent;
    border: none;
    display: inline-block;
    position: absolute;
    height: 50px;
    width: 70px;
    top: calc(50% - 25px);
    color: #f3f3f3;
    cursor: pointer;
    font-size: 30px;
    font-weight: 100;
}
.left {
    left: 0;
}
.right {
    right: 0;
}
</style>
