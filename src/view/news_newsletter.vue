<template lang="pug">
  news-base(articleTitle="新闻动态—简讯")
    div.s-flex.item(v-for="i in 10" slot="article")
      div.avatar
        img(src="/static/images/news-img.png")
      div.s-flex_item.bd
        div.t 注重修谱文化，弘扬传统精神
        div.p “前人不修谱，后人不知古。今人不修谱，子孙寻根苦。”……
        div.d 发布时间：2018年4月19日
</template>

<script type="text/ecmascript-6">
  import NewsBase from '@/base/news'
  // 新闻动态
  export default {
    components: {
      NewsBase
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .item
    padding 37px 16px 32px
    border-bottom 1px solid #a0a0a0
    .avatar
      margin-right 20px
      img
        width 238px
        height 144px
    .bd
      .t
        font-size 22px
        line-height 1em
        margin-top 25px
      .p
        margin-top 11px
        font-size 18px
        line-height 30px
      .d
        margin-top 15px
        font-size 14px
        line-height 1em
        color #690000
</style>
