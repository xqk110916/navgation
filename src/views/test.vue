<template>
  <div class="sys">
    <div class="image">
      <img src="../public/image/10.jpg" alt="">
      <h2>南华资本-测试环境相关服务</h2>
    </div>
    <div class="skip">
      <skip-btn title="甘茂测试前端" details="测试环境用于部门内部技术人员测试使用"></skip-btn>
      <skip-btn title="甘茂测试后台" details="测试环境用于部门内部技术人员测试使用"></skip-btn>
      <skip-btn title="测试前端" details="测试环境用于部门内部技术人员测试使用"></skip-btn>
      <skip-btn title="测试后台" details="测试环境用于部门内部技术人员测试使用"></skip-btn>
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
    }
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
        margin-left: -425px;
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