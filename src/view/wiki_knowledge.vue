<!--
  百科知识
  2018年5月15日22:47:55
  桑杨
-->
<template lang="pug">
  wiki(articleTitle="谍谱百科—百科知识")
    div.article(slot="article")
      p
        br
        br
        br
        br
        br
        br
        br
        br
        br
        br
        br
        br
        br
        br
        br
</template>

<script type="text/ecmascript-6">
  import Wiki from '@/base/wiki'

  export default {
    components: {
      Wiki
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .article
    margin 30px -18px 0
    line-height 30px
    font-size 18px
</style>
