<template lang="pug">
  el-dialog.sign-dialog(v-bind:visible="visible" width="549px" v-bind:show-close="false")
    div.tt(slot="title") 注册
    div.bd
      el-form.m-from(ref="form" v-bind:model="formModel" label-width="146px")
        el-form-item(label="族人姓名：")
          el-input(v-model="formModel.name")
        el-form-item(label="性别：")
          el-input(v-model="formModel.name")
        el-form-item.select-items(label="出生年月日：")
          div.attribution
            div.item
              div.s-flex_item
                el-select(v-model="formModel.province" placeholder="请选择")
                  el-option(label="a" value="a")
              div.txt 年
            div.item
              div.s-flex_item
                el-select(v-model="formModel.city" placeholder="请选择")
                  el-option(label="b" value="b")
              div.txt 月
            div.item
              div.s-flex_item
                el-select(v-model="formModel.area" placeholder="请选择")
                  el-option(label="c" value="c")
              div.txt 日
        el-form-item(label="电话：")
          el-input(v-model="formModel.password")
        el-form-item.select-items(label="地址：")
          div.attribution
            div.item
              div.s-flex_item
                el-select(v-model="formModel.province" placeholder="请选择")
                  el-option(label="a" value="a")
              div.txt 省
            div.item
              div.s-flex_item
                el-select(v-model="formModel.city" placeholder="请选择")
                  el-option(label="b" value="b")
              div.txt 市
            div.item
              div.s-flex_item
                el-select(v-model="formModel.area" placeholder="请选择")
                  el-option(label="c" value="c")
              div.txt 区
        el-form-item.textarea-item(label="")
          el-input(type="textarea"
          v-bind:autosize="{ minRows: 3, maxRows: 4}"
          placeholder="乡镇村街道"
          v-model="formModel.textarea")
        el-form-item.select-items(label="祖籍：")
          div.attribution
            div.item
              div.s-flex_item
                el-select(v-model="formModel.province" placeholder="请选择")
                  el-option(label="a" value="a")
              div.txt 省
            div.item
              div.s-flex_item
                el-select(v-model="formModel.city" placeholder="请选择")
                  el-option(label="b" value="b")
              div.txt 市
            div.item
              div.s-flex_item
                el-select(v-model="formModel.area" placeholder="请选择")
                  el-option(label="c" value="c")
              div.txt 区
        el-form-item.textarea-item(label="")
          el-input(type="textarea"
          v-bind:autosize="{ minRows: 3, maxRows: 4}"
          placeholder="乡镇村街道或古地名及字辈"
          v-model="formModel.textarea")
        el-form-item.select-items(label="谱属地：")
          div.attribution
            div.item
              div.s-flex_item
                el-select(v-model="formModel.province" placeholder="请选择")
                  el-option(label="a" value="a")
              div.txt 省
            div.item
              div.s-flex_item
                el-select(v-model="formModel.city" placeholder="请选择")
                  el-option(label="b" value="b")
              div.txt 市
            div.item
              div.s-flex_item
                el-select(v-model="formModel.area" placeholder="请选择")
                  el-option(label="c" value="c")
              div.txt 区
        el-form-item.textarea-item(label="")
          el-input(type="textarea"
          v-bind:autosize="{ minRows: 3, maxRows: 4}"
          placeholder="乡镇村街道及字辈"
          v-model="formModel.textarea")
        el-form-item(label="设置密码：")
          el-input(v-model="formModel.name")
        el-form-item(label="再次输入：")
          el-input(v-model="formModel.name")
        div.btn-bar-b
          div.btn.primary 马上注册
          div.btn 已有账号！立即登录
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        visible: true,
        formModel: {
          name: '',
          password: '',
          textarea: '',
          province: '',
          city: '',
          area: ''
        }
      }
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .bd
    height auto
    padding-bottom 27px
</style>
