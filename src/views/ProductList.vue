<template>
  <div>
    <Headbar/>
    <router-view></router-view>
    <Footbar/>
  </div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'
import Headbar from '../components/Headbar.vue';
import Footbar from '../components/Footbar.vue';

export default {
  components:{
    Headbar,
    Footbar,
  },
  data(){
    return {
    }
  },
}
</script>