<!--
  家族活动年鉴
  2018年5月15日22:48:12
  桑杨
-->
<template lang="pug">
  customs(articleTitle="风土人情—家族活动年鉴")
    div.list(slot="article")
      div.hd
        div.year 年份
        div.location 地点
        div.title 活动
      div.row(v-for="i in 20")
        div.year 2017
        div.location 乔氏宗祠
        div.title ×××

</template>

<script type="text/ecmascript-6">
  import Customs from '@/base/customs'

  export default {
    components: {
      Customs
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .list
    margin 3px -34px 0
    line-height 36px
    .hd,
    .row
      display flex
      text-align center
      .year
        width 178px
      .location
        width 97px
      .title
        flex 1
    .hd
      background-color #e5e5e5
      font-size 18px
      color #690000
    .row
      font-size 14px
      border-bottom 2px solid #e5e5e5
</style>
