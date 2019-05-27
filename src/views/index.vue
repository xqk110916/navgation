<template>
  <div>
    <swiper></swiper>
    <div class="text">
      <p>欢迎访问南华资本-金融衍生部系统环境说明</p>
    </div>
  </div>
</template>

<script>
import swiper from '../components/swiper'
export default {
  data() {
    return {
      
    }
  },
  components: {
    swiper
  }
}
</script>

<style scoped lang="scss">
.text{

    p {
      font-size: 80px;
    }

    padding: 30px;
    text-align: center;
    background-image: -webkit-linear-gradient(left,blue,#66ffff 10%,#cc00ff 20%,#CC00CC 30%, #CCCCFF 40%, #00FFFF 50%,#CCCCFF 60%,#CC00CC 70%,#CC00FF 80%,#66FFFF 90%,blue 100%);
    -webkit-text-fill-color: transparent;/* 将字体设置成透明色 */
    -webkit-background-clip: text;/* 裁剪背景图，使文字作为裁剪区域向外裁剪 */
    -webkit-background-size: 200% 100%; 
    -webkit-animation: masked-animation 4s linear infinite;

    -moz-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-background-size: 200% 100%; 
    -moz-animation: masked-animation 4s linear infinite;

    -o-text-fill-color: transparent;
    -o-background-clip: text;
    -o-background-size: 200% 100%; 
    -o-animation: masked-animation 4s linear infinite;
    font-size: 35px;
}
@keyframes masked-animation {
  0% {
      background-position: 0  0;
  }
  100% {
      background-position: -100%  0;
  }
}
@-webkit-keyframes masked-animation {
  0% {
      background-position: 0  0;
  }
  100% {
      background-position: -100%  0;
  }
}
@-o-keyframes masked-animation {
  0% {
      background-position: 0  0;
  }
  100% {
      background-position: -100%  0;
  }
}
@-moz-keyframes masked-animation {
  0% {
      background-position: 0  0;
  }
  100% {
      background-position: -100%  0;
  }
}

</style>
