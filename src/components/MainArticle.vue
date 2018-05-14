<template lang="pug">
  div.main-article
    div.tt
      i.icon-cloud
      |{{title}}
    div.cnt
      slot(name="cnt")
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'MainArticle',
    props: {
      title: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .main-article
    float left
    width 880px
    border 1px solid #a0a0a0
    border-radius 4px
    background-color #ffffff
    .tt
      display flex
      height 79px
      background url("/static/images/article-bg.jpg") 50% 0 repeat-x
      align-items center
      font-size 24px
      color #690000
      .icon-cloud
        display inline-block
        width 73px
        height 38px
        background url("/static/images/cloud.png") 50% 0 repeat-x
        margin 0 11px 0 43px
</style>
