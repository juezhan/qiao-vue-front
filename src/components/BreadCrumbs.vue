<template lang="pug">
  div.bread-crumbs
    div.container
      div
        i.icon-location
        |当前位置：
        a(href="/") 首页
        |&gt;
        span 通谱总论
</template>

<script type="text/ecmascript-6">
  // 面包屑
  export default {
    data() {
      return {}
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .bread-crumbs
    font-size 18px
    margin 21px 0 23px
    .icon-location
      display block
      width 14px
      height 18px
      background url("/static/images/icon-location.png") no-repeat 0 0
      float left
      margin 0 8px 0 2px

</style>
