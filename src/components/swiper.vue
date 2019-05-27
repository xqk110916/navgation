<template>
  <div class="swiper_content">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="../public/image/index_intro_img1.jpg" alt="">
        </div>
        <div class="swiper-slide">
          <img src="../public/image/index_intro_img2.jpg" alt="">
        </div>
        <div class="swiper-slide">
          <img src="../public/image/index_intro_img3.jpg" alt="">
        </div>
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
  import Swiper from 'swiper'

  export default {
    name: 'swiper',
    mounted() {
      this.createSwiper()
    },
    methods: {
      createSwiper() {
        var mySwiper = new Swiper('.swiper-container', {
          autoplay: true, //可选选项，自动滑动
          pagination: {   //分页器
            el:'.swiper-pagination',
            clickable: true,
          }, 
          loop: true,
        })
      }
    }
  }
</script>

<style>
.swiper-container {
  width: 1200px;
  height: 500px;
  font-size: 30px;
  line-height: 500px;
  text-align: center;
  position: relative;
}
.swiper-slide {
  width: 1200px;
}

.swiper-pagination {
  width: 150px;
  height: 8px;
  position: absolute;
  bottom: 30px;
  left: 50%;
  margin-left: -75px;
}

.swiper_content {
  position: relative;
  width: 1200px;
  height: 500px;
}

.swiper-pagination-bullet {
  width: 40px;
  height: 4px;
  margin-left: 10px;
  border-radius: 0;
}

img {
  
}
</style>