<template>
  <div class="mform">

    <ul class="phone">
      <li class="loph">
        <span class="logo"></span>
        <input type="text" placeholder="请输入手机号码" class="nexttext" name="phone" id="phone">
      </li>
    </ul>
    <div class="next">
      <a href="###" class="nextbox">
        <span>下一步</span>
      </a>
    </div>

  </div>
</template>

<script>
  export default {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
  .mform
    height 100%
    width 100%
    z-index 999
    position fixed
    top 0
    left 0
    background #fff
    .phone
      margin-left 10px
      .loph
        padding 12px 0 12px 30px
        position relative
        border-bottom #e2e2e2 solid 1px
        input::-webkit-input-placeholder
          color #b8b8b8
        .logo
          float: left;
          display inline-block
          width 17px
          height 17px
          background url(./ico1.png) no-repeat;
          background-size contain
          margin 2px 0 0 -25px
        .nexttext
          display inline-block
          height 21px
          font-size 16
          padding 0


    .next
      margin-top 20px
      padding-top 15px
      text-align center
      .nextbox
        display: block;
        margin: 0 10%
        border-radius 30px
        font-size 16
        line-height 20px
        padding 8px 0
        text-align center
        background: #d7d7d7;
        color: #fff
</style>
