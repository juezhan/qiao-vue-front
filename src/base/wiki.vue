<!--
  谍谱百科-模板
  2018年5月15日23:19:32
  桑杨
-->
<template lang="pug">
  div.wiki
    bread-crumbs
    div.container
      sidebar(title="谍谱百科" v-bind:items="sidebarItems" v-on:itemClick="itemClick")
      main-article(v-bind:title="articleTitle")
        div.article(slot="cnt")
          slot(name="article")
          pagination(
          v-bind:total="total"
          v-bind:display="display"
          v-bind:current="current"
          v-on:pageChange="onPageChange"
          )
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      articleTitle: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        total: 128,
        display: 20,
        current: 1,
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
            path: '/wiki/format',
            active: false,
            name: '家谱格式'
          },
          {
            path: '/wiki/examples',
            active: false,
            name: '罗列谱例'
          },
          {
            path: '/wiki/sample',
            active: false,
            name: '推介样谱'
          },
          {
            path: '/wiki/identification',
            active: false,
            name: '古谱的辨识'
          },
          {
            path: '/wiki/knowledge',
            active: false,
            name: '百科知识'
          }
        ]
        this.sidebarItems.map(item => {
          item.active = (item.path === this.$route.path)
        })
        console.log('this.sidebarItems', this.sidebarItems)
      },
      itemClick(item, index) {
        window.location.href = item.path
      },
      onPageChange(idx) {
        this.current = idx
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .wiki
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
