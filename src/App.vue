<template>
  <div class="wrap">
    <Headbar/>
    <router-view/>
    <Footbar/>
  </div>
</template>

<script>
import Headbar from './components/Headbar.vue';
import Footbar from './components/Footbar.vue';

export default {
  components:{
    Headbar,
    Footbar,
  }
}
</script>
<style lang="scss">
@import './assets/all';
// #app {
//   font-family: 'Avenir', Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
//   margin-top: 60px;
// }
</style>
