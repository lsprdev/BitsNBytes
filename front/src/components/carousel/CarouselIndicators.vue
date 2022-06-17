<template>
    <div class="carousel-indicators">
        <button
            class="carousel-indicator-item"
            :class="{active: currentIndex === index}"
            v-for="(item, index) in total"
            :key="index"
            @click="$emit('switch', index)"
        ></button>
    </div>
</template>

<script>
export default {
    emits: ["switch"],
    props: ["total", "currentIndex"],
};
</script>

<style scoped>
.carousel-indicators {
    position: absolute;
    transform: translateX(-50%);
    left: 50%;
    bottom: 1.5em;
    z-index: 2;
}
.carousel-indicator-item {
    width: 50px;
    height: 5px;
    border: none;
    border-radius: 25px;
    background: #fff;
    opacity: 0.5;
    margin: 0.2em;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    cursor: pointer;
}
.active {
    opacity: 1;
}
</style>
