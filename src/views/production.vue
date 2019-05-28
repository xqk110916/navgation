<template>
  <div class="sys">
    <div class="image">
      <img src="../public/image/10.jpg" alt="">
      <h2>生产环境相关服务</h2>
      <div class="annotation">
        <p>生产环境是正式生产使用的环境，用户在上面的操作都具有法律效力，请慎重操作</p>
        <p>后台管理为内部人员使用接口，可以使用OA账户和密码，需求向技术部申请相应的操作权限（账户名和密码也可以使用本地的账户密码，自行修改密码，同时禅道也会同步修改密码，注意：OA账户密码修改需要遵从公司的统一管理，不能在本系统修改）</p>
      </div>
      
    </div>
    <div class="skip">
      <skip-btn title="生产当前报价交易 " details="用户在上面的操作都具有法律效力，请慎重操作"></skip-btn>
      <skip-btn title="生产后台管理" details="用户在上面的操作都具有法律效力，请慎重操作"></skip-btn>
      <skip-btn title="最新版本" details="用户在上面的操作都具有法律效力，请慎重操作"></skip-btn>
      <skip-btn title="上一版本" details="用户在上面的操作都具有法律效力，请慎重操作"></skip-btn>
      <skip-btn title="最老版本报价 " details="用户在上面的操作都具有法律效力，请慎重操作"></skip-btn>
    </div>
    <div class="skip">
      <skip-btn title="最老版本报价" details="用户在上面的操作都具有法律效力，请慎重操作"></skip-btn>
      <skip-btn title="生产当前报价交易" details="用户在上面的操作都具有法律效力，请慎重操作"></skip-btn>
      <skip-btn title=" 生产后台管理" details="用户在上面的操作都具有法律效力，请慎重操作"></skip-btn>
      <skip-btn title="最新版本 " details="用户在上面的操作都具有法律效力，请慎重操作"></skip-btn>
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
        margin-left: -200px;
        margin-top: -25px;
        color: #001e59;
        opacity: .8;
      }

      .annotation {
        position: absolute;
        bottom: 40px;
        
        p {
          text-align: center;
          margin-top: 5px;
          box-sizing: border-box;
          padding: 0 20px;
          color: #f00;
          opacity: .8;
        }
      }
    }

    .skip {
      margin-top: 20px;
      display: flex;
      justify-content: space-around;
    }
  }
</style>
