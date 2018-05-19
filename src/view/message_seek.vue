<!--
  寻根
  2018年5月15日22:48:03
  桑杨
-->
<template lang="pug">
  message(articleTitle="智库留言—寻根")
    div.article(slot="article")
      p
        |　　西乔庄村，位于万安镇西南部，相距4.5公里，地处平川，东临贺家庄，西靠龙马乡张家庄，南接龙马乡下沟村，北与上舍村接壤，现有人口670人，耕地面积约1800亩。
        br
        |　　相传，在很久以前，该村文盲多，有个姓乔的，为了教人读书明理，腾出自己的房子当课堂，捐钱请先生，教村中人识文断字，明晓事理。该村群众感恩不忘，为纪念这位乔姓人氏，便以乔姓为村名，取名乔庄，后依方位改为西乔庄。
      p(style="text-align:center;padding:24px 0;")
        img(src="/static/images/customs-4.png")

</template>

<script type="text/ecmascript-6">
  import Message from '@/base/message'

  export default {
    components: {
      Message
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .article
    margin 24px -3px 0
    line-height 24px
    font-size 18px
</style>
