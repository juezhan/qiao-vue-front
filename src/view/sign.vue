<template lang="pug">
  div.sign
    //login
    register
</template>

<script type="text/ecmascript-6">
  import Login from './login'
  import Register from './register'

  export default {
    components: {
      Login,
      Register
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .sign
    position absolute
    top 0
    left 0
    width 100%
    height 100%
    background url("/static/images/login-bg.png") 50% 50% no-repeat
    background-size cover
</style>
