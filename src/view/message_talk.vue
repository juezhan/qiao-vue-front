<!--
  谈谱
  2018年5月15日22:48:03
  桑杨
-->
<template lang="pug">
  message(articleTitle="智库留言—谈谱")
    div.list(slot="article")
      div.hd
        div.col-1 标记
        div.col-2 留言人
        div.col-m 留言议题
        div.col-3 留言时间
        div.col-4 已审核
        div.col-5 是否回复
      div.row(v-for="i in 20")
        div.col-1
          span.mk 置顶
        div.col-2 乔××
        div.col-m 电脑撰修家谱的几个技巧
        div.col-3 2018-04-19
        div.col-4 √
        div.col-5
          span.link 回复
</template>

<script type="text/ecmascript-6">
  import Message from '@/base/message'

  export default {
    components: {
      Message
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
      .col-1
        width 82px
      .col-2
        width 95px
      .col-3
        width 116px
      .col-4
        width 93px
      .col-5
        width 116px
      .col-m
        flex 1
    .hd
      background-color #e5e5e5
      font-size 18px
      color #690000
      .title
        padding-left 203px
    .row
      font-size 14px
      border-bottom 2px solid #e5e5e5
      .mk
        color #c10202
      .link
        color #293896
        cursor pointer
</style>
