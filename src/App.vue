<template>
  <div id="app">
    <Index></Index>
  </div>
</template>

<script>
import Index from './components/index'
export default {
  name: 'app',
  components: {
    Index
  }
}
</script>

<style>
@import './public/css/reset.css';
@import '../node_modules/swiper/dist/css/swiper.css';
</style>
