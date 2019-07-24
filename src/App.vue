<template>
  <div class="wrap">
    <router-view/>
    <goTop></goTop>
  </div>
</template>

<script>
import goTop from './components/mutual/goTop.vue';
import $ from 'jquery';
export default {
  components:{
      goTop
  },
  data(){
      return{
      }
  },
  methods:{
      handleScroll () {
          $(window).scroll(function(){
              const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;     
              const element = document.querySelector('.top');
              scrollTop !== 0 ? element.style.display = 'block' : element.style.display = 'none';
          })
      },
  },
  created(){
      window.addEventListener('scroll', this.handleScroll() , true);
  }
}
</script>
<style lang="scss">
  @import './assets/all';
</style>
