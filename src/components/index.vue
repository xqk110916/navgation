<template>
  <div>
    <div class="warpper">
      <div class="top">
        <Top></Top>
      </div>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Top from './top'
export default {
  data() {
    return {

    }
  },
  components: {
    Top
  }
}
</script>

<style lang="scss">
.warpper {
  width: 1200px;
  margin: 0 auto;

}
</style>
