<template>
    <div>
        <Headbar/>
        <router-view/>  
        <Footbar/>
    </div>
</template>
<script>
import Headbar from '../components/frontEnd/Headbar.vue';
import Footbar from '../components/frontEnd/Footbar.vue';
export default {
    components:{
        Headbar,
        Footbar
    }
}
</script>