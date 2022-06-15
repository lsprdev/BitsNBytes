<template>
    <div class="flex justify-center">
        <button
            class="bg-black text-white font-bold py-2 px-4 rounded"
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
