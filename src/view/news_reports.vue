<!--
  报道
  2018年5月15日21:49:22
  桑杨
-->
<template lang="pug">
  news-base(articleTitle="新闻动态—报道")
    div.list(slot="article")
      div.hd
        div.no 序号
        div.name 名称
        div.data 日期
      div.row(v-for="i in 20")
        div.no {{i}}
        div.name 家谱：宗族传承历史上的一种”身份证明“
        div.data 2018-04-02

</template>

<script type="text/ecmascript-6">
  import NewsBase from '@/base/news'

  export default {
    components: {
      NewsBase
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
        flex 1
        text-align left
        padding 0 12px
      .data
        width 195px
    .hd
      background-color #e5e5e5
      font-size 18px
      color #690000
    .row
      font-size 14px
      border-bottom 2px solid #e5e5e5
</style>
