<template>
  <div class="sys">
    <div class="image">
      <img src="../public/image/10.jpg" alt="">
      <h2>测试环境相关服务</h2>
    </div>
    <div class="skip">
      <skip-btn v-for="(item, index) in settings.test" :key="index" :title="item.name" :details="item.details" :url="item.url"></skip-btn>
    </div>
  </div>
</template>

<script>
  import skipBtn from '../components/btn'
  export default {
    data() {
      return {

      }
    },
    components: {
      skipBtn,
    },

  }
</script>

<style scoped lang="scss">
  .sys {
    .image {
      position: relative;

      img {
        width: 1200px;
      }

      h2 {
        position: absolute;
        top: 50%;
        left: 50%;
        font-size: 50px;
        margin-left: -200px;
        margin-top: -25px;
        color: #001e59;
        opacity: .8;
      }
    }

    .skip {
      margin-top: 20px;
      display: flex;
      justify-content: space-around;
    }
  }
</style>