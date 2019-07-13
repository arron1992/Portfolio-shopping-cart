<template>
    <div>
        <adminBar/>
        <router-view></router-view>
    </div>
</template>
<script>
import adminBar from '../components/Admin-bar'
export default {
    components:{
        adminBar
    }
}
</script>