<template>
    <div>
        <Headbar/>
        <router-view/>  
        <Footbar/>
    </div>
</template>
<script>
import Headbar from '../components/Headbar.vue';
import Footbar from '../components/Footbar.vue';
export default {
    components:{
        Headbar,
        Footbar
    }
}
</script>