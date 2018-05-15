<!--
  乔家风
  2018年5月15日22:47:55
  桑杨
-->
<template lang="pug">
  customs(articleTitle="风土人情—乔家风")
    div.article(slot="article")
      p
        |　　乔氏家风:和为贵，家族和睦；重修德，人正事兴；讲诚信，以义取利；乐读书，百年树人；慎俭德，勤俭持家；善为先，无私讼公。
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
  import Customs from '@/base/customs'

  export default {
    components: {
      Customs
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .article
    margin 30px -18px 0
    line-height 30px
    font-size 18px
</style>
