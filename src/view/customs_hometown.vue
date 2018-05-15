<!--
  家乡美
  2018年5月15日22:47:38
  桑杨
-->
<template lang="pug">
  customs(articleTitle="风土人情—家乡美")
    div.article(slot="article")
      p(style="text-align:center;padding:24px 0;")
        img(src="/static/images/customs-1.png")
      p
        |　　山西，素以地上文物之丰、地下能源之巨著称。而今，又以大量传统民居建筑艺术而令世人瞩目。这些精致无比、保存完好的宅院，以它们永远的真实，期待着我们对三晋文明史的阐释，期待着我们对晋商辉煌史的解读。
        br
        |　　中华民族的智慧和耐劳精神，创造了巍峨的城墙、庄严的宫殿、秀美的园林，也创造了形形色色的宅院。这些宅院都有自己独特鲜活的生命。著名建筑专家郑孝燮说“北京有故宫，西安有兵马俑，祁县有民宅千处。”中国历史文化名城——祁县的民居，集宋、元、明、清之法式，汇江南河北之大成，其中最为出名的就是乔家大院。
        br
        |　　乔家大院全称山西祁县乔家大院民俗博物馆，地处美丽富饶的晋中盆地，是一座汇集晋商历史风貌，反映明清时代特色的民居精品。景区在发展、恢复的过程中，形成新的旅游格局：“四堂一园”，总占地面积为24000余平方米，即在中堂、德兴堂、宁守堂、保元堂及花园，全面展现乔家大院悠久的历史风貌、典雅的建筑风格、精湛的雕刻艺术、纯朴的民俗民风。
      p(style="text-align:center;padding:24px 0;")
        img(src="/static/images/customs-2.png")
      p
        |　　乔家大院以建筑格局的精巧，民俗文化的传承，晋商精神的魅力，凸现出大院特色，获得良好的社会效益和经济效益。开馆20多年来，吸引众多剧组,《大红灯笼高高挂》、《昌晋源票号》、《赵四小姐与张学良》、《乔家大院》等40多部影视剧曾在此拍摄。乔家大院先后被国务院公布为国家级重点文物保护单位、被国家文物局公布为国家二级博物馆；被评为国家“AAAAA”级旅游景区、国家优秀文博单位、山西省十佳旅游景点、质量等级AAA企业、山西十大文化品牌等。
      p(style="text-align:center;padding:24px 0;")
        img(src="/static/images/customs-3.png")

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
    margin 24px -3px 0
    line-height 24px
    font-size 18px

</style>
