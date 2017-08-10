<template>
    <div class="login-wrapper">
      <div class="login-bg">
        <div class="bg-top">
          <div class="back">
            <img src="./back.png" alt="" width="15" height="18">
            <span>注册</span>
          </div>
        </div>
        <div class="bg-middle">
          <img src="//static.epetbar.com/mpet/images/login/logo.png">
        </div>
        <div class="bg-footer">
          <ul class="login-tag">
            <li class="login-item">
              <a href="javascript:;" style="color: #fff">
                普通登录
              </a>
              <i></i>
            </li>
            <li class="login-item">
              <a href="javascript:;" style="color: #fff">
              手机动态密码登录
              </a>
              <i></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>
<script>

</script>
<style lang="stylus" rel="stylesheet/stylus">
  .login-wrapper
    width 100%
    .login-bg
      background url("./login-bg.png") no-repeat
      width 100%
      height 178px
      background-color yellowgreen
      background-size 100%
      .bg-top
        padding 10px
        color white
        span
          display block
          float right
      .bg-middle
        text-align center
        margin 23px
        img
          height 48px
      .bg-footer
        width 100%
        height 44px
        background-color rgba(255,255,255,0.3)
        .login-tag
          .login-item
            width 50%
            height 100%
            float left
            text-align center
            padding 15px 0
            font-size 14px

</style>
