<!--
  罗列谱例
  2018年5月15日22:47:55
  桑杨
-->
<template lang="pug">
  wiki(articleTitle="谍谱百科—罗列谱例")
    div.article(slot="article")
      p(style="text-align:center;padding:24px 0;")
        img(src="/static/images/wiki-2.png")
      p(style="text-align:center;padding:24px 0;")
        img(src="/static/images/wiki-3.png")
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
