<!--
  功德榜
  2018年5月15日22:47:48
  桑杨
-->
<template lang="pug">
  customs(articleTitle="风土人情—功德榜")
    div.list(slot="article")
      div.hd
        div.no 序号
        div.name 姓名
        div.title 功德
      div.row(v-for="i in 20")
        div.no {{i}}
        div.name 乔维岳
        div.title 官至太常少卿、寿州刺史，南顿（治所在今河南项城西）人。

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
      .no
        width 84px
      .name
        width 223px
      .title
        flex 1
        text-align left
        padding 0 12px 0 37px
    .hd
      background-color #e5e5e5
      font-size 18px
      color #690000
      .title
        padding-left 203px
    .row
      font-size 14px
      border-bottom 2px solid #e5e5e5
</style>
