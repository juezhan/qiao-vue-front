<template lang="pug">
    div.home
      div.banner_1
        div.container
      div.banner_2
        div.container
          div.block-1
            div.tt
              div.tit 最新动态
            div.bd
              div.item(v-for="i in 4")
                div.avatar
                div.cnt
                  div.txt-1 18分钟之前
                  div.txt-2
                    span.user ×××
                    | 添加了家庭谱××
          div.block-2
            div.tt
              div.tit 新闻动态
            div.bd
              div.img-items
                div.item(v-for="i in 2")
                  a.avatar(href="#")
                    img(src="/static/images/1.jpg")
                  div.cnt
                    a.txt-1(href="#") 古代八德简释（孝、悌、忠、信、礼、义、廉、耻）
                    div.txt-2 2018-04-16
              div.txt-warpper
                div.txt-items
                  div.item(v-for="i in 5")
                    a.txt-1 传统家谱的写法是怎样的？
                    div.txt-2 04-16
                div.txt-items
                  div.item(v-for="i in 5")
                    a.txt-1 传统家谱的写法是怎样的？
                    div.txt-2 04-16
      div.banner_3
        div.container
          div.tt
            div.tit 风土人情
          div.bd
            img.avatar(src="/static/images/2.jpg")
            div.cnt
              |  乔家大院又名在中堂，位于山西省祁县乔家堡村，始建于1756年，整个院落呈双“喜”字形，分为6个大院，内套20个小院，313间房屋，建筑面积4175平方米，三面临街，四周是高达10余米的全封闭青砖墙，大门为城门式洞式，是一座具有北方传统民居建筑风格的古宅。
              br
              |  乔家大院陈展有5000多件珍贵文物，集中反映了以山西晋中一带为主的民情风俗；陈列有农俗、人生仪礼、岁时节令、衣食住行、商俗、民间工艺；还设立有乔家史料、乔家珍宝、影视专题等的陈列。
              br
              |  乔家大院是一座雄伟壮观的建筑群体，设计之精巧，工艺之精细，体现了中国清代民居建筑的独特风格，具有相当高的观赏、科研和历史价值，是一座无与伦比的艺术宝库，被称为“北方民居建筑的一颗明珠”，素有“皇家有故宫，民宅看乔家”之说，名扬三晋，誉满海内外。
      div.banner_4
        div.container
          div.tt
            div.tit 友情链接
          div.bd
            a.item(:href="'http://www.baidu.com/'") 中国网-历史文化名城
            a.item(:href="'http://www.baidu.com/'") 中国历史文化遗产保护网
            a.item(:href="'http://www.baidu.com/'") 中国历史文化街区
            a.item(:href="'http://www.baidu.com/'") 中国历史文化名城研究中心
            a.item(:href="'http://www.baidu.com/'") 中国历史文化名城研究中心
            a.item(:href="'http://www.baidu.com/'") 中国历史文化名城研究中心
      div.banner_5
        div.container
          div.tt
            div.tit 广告赞助
          div.bd
            a.item(v-for="i in 4")
              img(src="/static/images/3.jpg")
</template>

<script type="text/ecmascript-6">
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .home
    padding-bottom 73px
    .banner_1
      .container
        background url("/static/images/index-banner_1-bg.jpg") 50% 0 no-repeat
        height 408px

    .banner_2
      margin-top 28px
      .container
        display flex

    .banner_3
      margin-top 27px
      .bd
        display flex
        margin-top 25px
        .avatar
          margin-right 24px
          width 451px
          height 300px
        .cnt
          flex 1
          font-size 18px
          line-height 24px

    .banner_4
      margin-top 39px
      .bd
        padding 34px 4px 0
        .item
          font-size 12px
          line-height 16px
          padding-left 25px
          margin-left 24px
          background url("/static/images/icon-link.png") 0 50% no-repeat
          &:hover
            background-image url("/static/images/icon-link-on.png")

    .banner_5
      margin 40px 0 0
      .bd
        margin-top 32px
        font-size 0
        text-align center
        .item
          & + .item
            margin-left 68px

    .tt
      .tit
        width 200px
        height 48px
        line-height 48px
        text-align center
        padding-bottom 7px
        background url("/static/images/index-block-tit-bg.png") 0 0 no-repeat
        font-size 24px
        color #ffffff

    .block-1
      width 350px
      margin-right 10px
      .bd
        padding-top 26px
        .item
          display flex
          & + .item
            margin-top 18px
          .avatar
            width 60px
            height 60px
            background url("/static/images/genealogy.png") 0 0 no-repeat
            margin-right 14px
          .cnt
            flex 1
            line-height 24px
            .txt-1
              margin-top 6px
              color #999999
              font-size 14px
            .txt-2
              font-size 16px
              .user
                color #1478ba

    .block-2
      flex 1
      height 380px
      .img-items
        display flex
        .item
          flex 1
          padding-left 9px
          display flex
          .avatar
            margin-right 21px
            img
              width 169px
              height 123px
          .cnt
            width 200px
            font-size 18px
            line-height 22px
            .txt-1
              margin-top 11px
              height 66px
            .txt-2
              margin-top 16px
              color #999999
      .txt-warpper
        margin-top 29px
        display flex
        .txt-items
          flex 1
          padding 0 40px 0 9px
          .item
            display flex
            line-height 22px
            font-size 18px
            & + .item
              margin-top 8px
            &:before
              content ''
              display block
              width 4px
              height 4px
              border-radius 50%
              background-color #000000
              margin 9px 15px 0 0
            .txt-1
              flex 1
</style>
