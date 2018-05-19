<template lang="pug">
  div.message-board
    div.tt 留言板
    div.bd
      el-form.message-form(ref="form" v-bind:model="formModel" label-width="95px")
        el-form-item(label="留言主题：")
          div.s-flex
            div.s-flex_item
              el-input(v-model="formModel.theme")
            div.txt
              span *
        el-form-item(label="留言类别：")
          div.s-flex
            div.s-flex_item
              el-select(v-model="formModel.category" placeholder="请选择")
                el-option(label="a" value="a")
            div.txt
              span *
        el-form-item(label="留言内容：")
          div.s-flex
            div.s-flex_item
              el-form-item.textarea-item(label="")
                el-input(type="textarea"
                v-bind:autosize="{ minRows: 5, maxRows: 5}"
                placeholder="乡镇村街道及字辈"
                v-model="formModel.content")
            div.txt
              span *
        el-form-item(label="是否隐藏：")
          div.s-flex
            div.s-flex_item
              el-radio(v-model="formModel.hide" label="1") 正常
              el-radio(v-model="formModel.hide" label="2") 隐藏
            div.txt
              span *
              | 隐藏仅管理员及留言者可见
        div.btn-bar
          div.btn.primary 发表
          div.btn 重填
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        formModel: {
          theme: '',
          category: '',
          content: '',
          hide: ''
        }
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .message-board
    margin 0 40px 70px
    border 1px solid #a0a0a0
    border-radius 5px
    overflow hidden
    .tt
      height 39px
      line-height 39px
      text-align center
      background url("/static/images/message-board-tit-bg.jpg") 50% 0 repeat-x
      font-size 18px
      color #000000
    .bd
      padding 20px 0 30px
      .btn-bar
        text-align center
        .btn
          display inline-block
          width 80px
          height 30px
          line-height 30px
          background-color #e5e5e5
          color #999999
          font-size 18px
          text-align center
          border-radius 5px
          &.primary
            background-color #690000
            color #ffffff
          & + .btn
            margin-left 54px
</style>
