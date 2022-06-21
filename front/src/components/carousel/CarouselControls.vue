<template>
    <div>
        <button class="carousel-control left" @click="$emit('prev')"><ChevronLeftIcon class="card-control h-20 w-20" /></button>
        <button class="carousel-control right" @click="$emit('next')"><ChevronRightIcon class="card-control h-20 w-20" /></button>
    </div>
    <!-- in vue 2.x you need wrap these buttons in a div -->
</template>

<script>
import {ChevronLeftIcon} from "@heroicons/vue/solid";
import {ChevronRightIcon} from "@heroicons/vue/solid";
export default {
    emits: ["prev", "next"],
    components: {
        ChevronLeftIcon,
        ChevronRightIcon,
    },
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
    top: 50%;
    color: #f3f3f32d;
    cursor: pointer;
    font-size: 30px;
    font-weight: 100;

    transition: 0.25s;
}
.carousel-control:hover{
    color: #f3f3f3c7;
}
.left {
    left: 0;
}
.right {
    right: 0;
}
</style>
