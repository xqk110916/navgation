<template>
  <div class="box" @click="target">
    <div class="image">
      <img src="../public/image/nanhua.png" alt="">
    </div>
    <h4 v-html="title" class="title"></h4>
    <p v-html="details" class="details"></p>
    <button class="btn">立即前往</button>
  </div>
</template>

<script>
  export default {
    methods:{
      target() {
        window.location.href = url
      }
    },
    props:['title', 'details', 'url']
  }
</script>

<style scoped lang="scss">
  .box {
    width: 210px;
    height: 260px;
    box-sizing: border-box;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #eee;
    position: relative;
    cursor: pointer;

    .title {
      font-size: 18px;
      text-align: center;
      margin-top: 20px;
    }

    .details {
      font-size: 12px;
      text-align: center;
      color: #b0a9a9;
      margin-top: 20px;
      line-height: 16px;
    }

    .image {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      overflow: hidden;
      margin: 0 auto;
      margin-top: 20px;

      img {
        width: 50px;
        height: 50px;
        float: left;
      }
    }

    .btn {
      border: none;
      outline: none;
      background: #5dcda7;
      color: #fff;
      position: absolute;
      bottom: 25px;
      left: 50%;
      width: 90px;
      height: 35px;
      border-radius: 10px;
      margin-left: -45px;
      
    }
  }
</style>