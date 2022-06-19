<template>
    <div>
        <AddButton />   
        <AdminCards class="mt-6 drop-shadow-lg" />
    </div>
</template>

<script>
import AdminCards from "../components/AdminCards.vue";
import AddButton from "../components/AddButton.vue";
export default {
    components: {
        AdminCards,
        AddButton,
    },
};
</script>

<style></style>
