<template>
  <div id="app">
    <Index></Index>
  </div>
</template>

<script>
  import Index from './components/index'
  export default {
    name: 'app',
    created() {
      if (window.addEventListener) {
        window.addEventListener("keyup", this.reload, true)
      } else {
        window.attachEvent("onkeyup", this.reload)
      }
    },
    methods: {
      reload(e) {
        console.log(e)
        if(e.code == 'F5' && e.keyCode == 116) {
          console.log(e)
          this.$router.push('/')
        }
      }
    },
    components: {
      Index
    } 
  }
</script>

<style>
  @import './public/css/reset.css';
  @import '../node_modules/swiper/dist/css/swiper.css';

  img {
    vertical-align: top;
  }
</style>