<!--
  智库留言-模板
  2018年5月16日23:03:43
  桑杨
-->
<template lang="pug">
  div.news
    bread-crumbs
    div.container
      sidebar(title="智库留言" v-bind:items="sidebarItems" v-on:itemClick="itemClick")
      main-article(v-bind:title="articleTitle")
        div.article(slot="cnt")
          slot(name="article")
          pagination(
          v-bind:total="total"
          v-bind:display="display"
          v-bind:current="current"
          v-on:pageChange="onPageChange"
          )
        message-board
</template>

<script type="text/ecmascript-6">
  import MessageBoard from '@/components/MessageBoard'

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
            path: '/message/talk',
            active: false,
            name: '谈谱'
          },
          {
            path: '/message/discuss',
            active: false,
            name: '讨论'
          },
          {
            path: '/message/seek',
            active: false,
            name: '寻根'
          },
          {
            path: '/message/facts',
            active: false,
            name: '史实辩考'
          },
          {
            path: '/message/special',
            active: false,
            name: '专题讨论'
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
    },
    components: {
      MessageBoard
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
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
