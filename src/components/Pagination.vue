<!--
  分页器
  2018年5月15日21:27:46
  桑杨
-->
<template lang="pug">
  div.pagination
    span 当前第 [{{current}}/{{page}}] 页
    a.item(v-bind:class="{'disabled': current == 1}" v-on:click="setCurrent(current - 1)") 上一页
    a.item(v-for="p in grouplist" v-bind:class="{'active': current == p.val}" v-on:click="setCurrent(p.val)") {{ p.text }}
    a.item(v-bind:class="{'disabled': current == page}" v-on:click="setCurrent(current + 1)") 下一页
    a.item(v-bind:class="{'disabled': current == 1}" v-on:click="setCurrent(1)") [首页]
    a.item(v-bind:class="{'disabled': current == page}" v-on:click="setCurrent(page)") [尾页]
    <!--span.txt 共 {{ total }}  条数据-->
    <!--span.txt 每页显示 {{ display }}  条数据-->
    <!--span.txt 共 {{ page }} 页-->
    <!--span.txt 当前第 {{ current }} 页-->

</template>
<script type="text/ecmascript-6">
  export default {
    name: 'Pagination',
    props: {
      total: {
        // 数据总条数
        type: Number,
        default: 0
      },
      display: {
        // 每页显示条数
        type: Number,
        default: 10
      },
      current: {
        // 当前页码
        type: Number,
        default: 1
      },
      pageGroup: {
        // 分页条数 -- 奇数
        type: Number,
        default: 5,
        coerce: function (v) {
          v = v > 0 ? v : 5
          return v % 2 === 1 ? v : v + 1
        }
      }
    },
    computed: {
      page: function () { // 总页数
        return Math.ceil(this.total / this.display)
      },
      grouplist: function () { // 获取分页页码
        let len = this.page
        let temp = []
        let list = []
        let count = Math.floor(this.pageGroup / 2)
        let center = this.current
        if (len <= this.pageGroup) {
          while (len--) {
            temp.push({text: this.page - len, val: this.page - len})
          }
          return temp
        }
        while (len--) {
          temp.push(this.page - len)
        }

        let idx = temp.indexOf(center);
        (idx < count) && (center = center + count - idx);
        (this.current > this.page - count) && (center = this.page - count)
        temp = temp.splice(center - count - 1, this.pageGroup)
        do {
          var t = temp.shift()
          list.push({
            text: t,
            val: t
          })
        } while (temp.length)
        if (this.page > this.pageGroup) {
          (this.current > count + 1) && list.unshift({text: '……', val: list[0].val - 1});
          (this.current < this.page - count) && list.push({text: '……', val: list[list.length - 1].val + 1})
        }
        return list
      }
    },
    methods: {
      setCurrent(idx) {
        this.$emit('pageChange', idx)
      }
    }
  }
</script>
<style scoped lang="stylus" type="text/stylus">
  .pagination
    text-align center
    font-size 14px
    margin-top 33px
    .item
      cursor pointer
      color #000
      margin 0 8px
      &.disabled
        color #858585
      &.active
        font-weight bold
    .txt
      margin 0 8px
</style>
