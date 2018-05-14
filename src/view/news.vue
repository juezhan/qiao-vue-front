<template lang="pug">
  div.news
    bread-crumbs
    div.container
      sidebar(title="新闻动态" v-bind:items="sidebarItems" v-on:itemClick="itemClick")
      main-article(title="新闻动态—简讯")
        div.article(slot="cnt")
          div.s-flex.item(v-for="i in 10")
            div.avatar
              img(src="/static/images/news-img.png")
            div.s-flex_item.bd
              div.t 注重修谱文化，弘扬传统精神
              div.p “前人不修谱，后人不知古。今人不修谱，子孙寻根苦。”……
              div.d 发布时间：2018年4月19日
          div.pager
            span 当前第[1/10]页
            a 上一页
            a 1
            a 2
            a 3
            a 4
            span ……
            a 5
            a 6
            a 下一页
            a [首页]
            a [尾页]
</template>

<script type="text/ecmascript-6">
  // 新闻动态
  export default {
    data() {
      return {
        sidebarItems: []
      }
    },
    mounted() {
      this.init()
    },
    methods: {
      init() {
        this.getSidebarItems()
      },
      getSidebarItems() {
        this.sidebarItems = [
          {
            anchor: '',
            name: '简讯'
          },
          {
            anchor: '',
            name: '报道'
          },
          {
            anchor: '',
            name: '公告'
          },
          {
            anchor: '',
            name: '家谱简介'
          }
        ]
      },
      itemClick(item, index) {
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .pager
    text-align center
    font-size 14px
    margin-top 33px
    a,
    span
      margin 0 8px
  .news
    margin 0 0 44px
    .article
      margin 12px 45px 33px
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
