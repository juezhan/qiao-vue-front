<template lang="pug">
  el-dialog.sign-dialog(v-bind:visible="visible" width="549px" v-bind:show-close="false")
    div.tt(slot="title") 登录
    div.bd
      el-form.m-from(ref="form" v-bind:model="formModel" label-width="146px")
        el-form-item(label="族人姓名：")
          el-input(v-model="formModel.name")
        el-form-item(label="密码：")
          el-input(v-model="formModel.password")
        el-form-item.select-items(label="谱属地（选填）：")
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
        div.s-flex.from-item
          div.checkbox
            i.icon-checkbox
            | 记住密码
          div.s-flex_item
          div.forget 忘记密码？
        div.btn-bar
          div.btn 登录
          div.btn 注册
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
