<!--
  侧栏
  2018年5月14日20:11:37
  桑杨
-->
<template lang="pug">
  div.sidebar
    div.tit {{title}}
    div.list
      div.item(v-for="(item,index) in items" v-bind:key="item.name" v-on:click="itemClick(item,index)") {{item.name}}
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'Sidebar',
    props: {
      title: {
        type: String,
        default: ''
      },
      items: {
        type: Array,
        default: []
      }
    },
    methods: {
      itemClick(item, index) {
        this.$emit('itemClick', item, index)
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .sidebar
    float left
    width 240px
    text-align center
    margin-right 37px
    .tit
      color #ffffff
      height 100px
      line-height 100px
      font-size 30px
      background url("/static/images/sidebaer-bg.jpg") 0 0 no-repeat
    .list
      border-left 1px solid #b5a5a4
      border-right 1px solid #b5a5a4
      .item
        font-size 24px
        height 58px
        line-height 58px
        color #000000
        background-color #efefef
        border-bottom 1px solid #b5a5a4
        cursor pointer
        &.active
          color #ffffff
          background-color #690000
</style>
