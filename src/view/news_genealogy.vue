<!--
  家谱简介
  2018年5月15日21:48:16
  桑杨
-->
<template lang="pug">
  news-base(articleTitle="新闻动态—家谱简介")
    div.genealogy-items(slot="article")
      div.item(v-for="i in 10")
        div.s-flex
          div.avatar
            img(src="/static/images/genealogy-img.png")
          div.s-flex_item
            div.tit 乔氏支谱编修
            div.s-flex
              div.cnt-m
                div 始祖：乔××
                div 房系：精忠堂·汉川派 始迁祖
                div 卷号：精忠堂·汉川派 岳氏宗谱 （下函）卷六
                div 页数：1676 页
                div 地址：湖北省孝感市汉川市刘家隔镇笔架台村
              div.s-flex_item
                div 创建时间：2018-03-14
                div 修谱时间：2018-03-14
                div 编撰人：乔××
                div 修谱人：乔××
        div.txt 简介：汉川之岳，自元代始，历明清民国于今，谓之名门望族。考吾祖岳公 子忠载入县志，于元至正甲辰授汉川教谕遂家焉。 康熙庚申，起霞公 始溯源参定汇纂族谱，史官汪公与之谈及家世，谓忠武王十七世孙。嘉庆甲子，二十世孙观元公 纂抄谱册付之待梓。咸丰戊午，廿二世孙 秉奎公考据采择，增其未备，再续族谱；至同治己巳，与族众又为之。光绪癸卯，廿四世传薪公 重订宗族谱图，至民国甲寅合族倡修族谱，以续我族源远流长，根深叶茂，由此而生孝悌之心也。  据甲寅谱载，吾岳氏于元季 子忠公官教谕而始迁，为武穆王六世孙，其源由汤阴至汉川，脉脉相承，谱汉川宗派。其谱序事 考据详实，世录编续俱以体制，可谓会谱收族之典籍也。惟其世次年代悬殊有别，至以期盼考证完备，实我辈谱续之责。 此次续谱与全国统谱接轨，吾辈虽竭能尽力，但仍感德薄能微。今当付梓，期后世能者至臻至善，此乃汉川岳氏之幸也！ 二〇一六年丙申冬月中浣 武穆王二十八世孙 名翔 拜撰
</template>

<script type="text/ecmascript-6">
  import NewsBase from '@/base/news'

  export default {
    components: {
      NewsBase
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .genealogy-items
    margin 24px -8px
    .item
      font-size 18px
      line-height 30px
      & + .item
        margin-top 38px
      .avatar
        margin-right 27px
      .tit
        font-size 22px
        line-height 22px
        margin-bottom 5px
      .cnt-m
        width 394px
      .txt
        margin-top 19px
</style>
