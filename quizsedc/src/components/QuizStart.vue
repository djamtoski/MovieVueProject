<template>
    <h2>Quiz starts here!</h2>
</template>

<script>
export default {
    data(){
        return {

        }
    },
    created(){
        console.log("Created");
        this.$store.dispatch('getQuizes');
    }
}
</script>

<style scoped>
body {
    color: white;
}
h2 {
    padding: 25px;
}
</style>
