<template lang="pug">
  div.index
    div.header
      div.container
    div.navigate
      div.container.s-flex
        div.s-flex_item.menu-list
          a.item(href="/") 首页
          a.item(href="/pandect") 通谱总论
          a.item(href="/news/newsletter") 新闻动态
          a.item(href="/customs/hometown") 风土人情
          a.item(href="/message/talk") 智库留言
          a.item 家谱编修
          a.item(href="/wiki/format") 谍谱百科
        div.cnt-b
          a.item
            i.icon-nav.icon-user
            | 登陆
          a.item
            i.icon-nav.icon-edit
            | 注册
          a.item
            i.icon-nav.icon-app
            | 下载APP
    component(:is="which")
    div.footer
      div.container
        div.links
          a.item 智库团队
          | |
          a.item 联系我们
        div.copyright Copyright  &copy;  2017  qiaoshi.cn   湘公网安备  43011102000373号  ICP备  16004624

</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        which: ''
      }
    },
    mounted() {
      let pageName = this.$route.params.column || 'home'
      let menu = this.$route.params.menu || null
      // this.columnName = this.$route.params.column
      // console.log('columnName', this.columnName)
      if (menu) {
        this.which = require(`@/view/${pageName}_${menu}.vue`).default
      } else {
        this.which = require(`@/view/${pageName}.vue`).default
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .header
    height 224px
    background url("/static/images/index-header-bg.jpg") 50% 0 no-repeat;

  .navigate
    height 40px
    line-height 40px
    background-color #000000
    a
      color #ffffff
    .menu-list
      .item
        float left
        display block
        width 110px
        margin-right 6px
        font-size 18px
        text-align center
        &.active
          background-color #a20202
    .cnt-b
      .item
        float left
        display flex
        margin-left 10px
        align-items center
        font-size 14px

  .footer
    background-color #000000
    color #7e7e7e
    text-align center
    height 80px
    .links
      padding-top 25px
      .item
        padding 0 6px
        font-size 14px
        color #7e7e7e
    .copyright
      margin-top 8px
      font-size 12px

</style>
