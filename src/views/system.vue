<template>
  <div class="sys">
    <div class="image">
      <img src="../public/image/10.jpg" alt="">
      <h2>南华资本-金融衍生品部系统环境说明</h2>
    </div>
    <div class="skip">
      <skip-btn title="生产web报价地址" details="金融衍生品web服务的生产环境、仿真环境和测试环境入口"></skip-btn>
      <skip-btn title="生产web报价导出地址" details="金融衍生品web服务的生产环境、仿真环境和测试环境入口"></skip-btn>
      <skip-btn title="易利权系统介绍" details="该地址现已停用"></skip-btn>
      <skip-btn title="内网资源导航" details="该地址需在办公室网络环境下访问，否则可能导致被拒无法访问"></skip-btn>
      <skip-btn title="总公司分配的VPN地址" details=" Secondary password需要输入个人对应的电子口令卡密码"></skip-btn>
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