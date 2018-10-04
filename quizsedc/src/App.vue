<template>
<div>
    <navbar></navbar>
    <router-view></router-view>
</div>
</template>

<script>
import navbar from './components/navbar.vue';
export default {
data(){
  return {

  }
},
components : {
  navbar
}
}
</script>

<style>
body {
    background: url('./assets/download.png') no-repeat;
    background-size: 1920px 1080px;
    font-family: Arial;
    color: white;
}
</style>
