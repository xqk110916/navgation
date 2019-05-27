<template>
  <div class="top">
    <div class="logo">
      <img src="../public/image/nanhua_logo.png" alt="">
    </div>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" active-text-color="#409eff" router>
      <el-menu-item index="/">南华资本-金融衍生品部</el-menu-item>
      <el-menu-item index="system">系统环境说明</el-menu-item>
      <el-menu-item index="production">生产环境</el-menu-item>
      <el-menu-item index="simulation">仿真环境</el-menu-item>
      <el-menu-item index="test">测试环境</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex:'/',
      }
    }

  }
</script>

<style scoped lang="scss">
.top {
  height: 60px;
  
  .logo {
    height: 50px;
    margin: 10px 100px 10px 30px;
    float: left;
    img {
      width: 160px;
      height: 50px;
      float:left;
    }
  }

  .el-menu {
    float: left;
  }
}
</style>