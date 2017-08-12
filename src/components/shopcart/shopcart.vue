<template>
    <div class="shopcart-wrapper">
      <div class="shopcart-header">
        <i class="back">
          <a href="./home/indexpage">
            <img src="./back.png" alt="">
          </a>
        </i>
        <span>购物车</span>
        <i class="menu">
          <img src="./menu.png" alt="">
        </i>
      </div>
      <div class="cart-img">
        <span class="bg-img"></span>
      </div>
      <div class="cart-text">
        购物车是空的
      </div>
      <div class="btn-wrapper">
        <a href="http://wap.epet.com" class="cart-btn view-btn">
          <span>
            去逛逛
          </span>
        </a>
        <a href="/zt/knowledge/favorites.html" class="cart-btn collection-btn">
          <span>
            我的收藏
          </span>
        </a>
      </div>
    </div>
</template>
<script>

</script>
<style lang="stylus" rel="stylesheet/stylus">
  .shopcart-wrapper
    width 100%
    height 667px
    background-color: #fff
    position absolute
    top 0
    z-index 200
    .shopcart-header
      width 100%
      height 35px
      text-align center
      font-size 18px
      margin-top 20px
      .back
        float left
        margin-left 8px
      .menu
        float right
        margin-right 8px
    .cart-img
      padding 50px 0 20px 0
      .bg-img
        display block
        width 100px
        height 100px
        background url("./cart-ico.png")
        background-size 100%
        background-position 100px 120px
        margin 0 auto
    .cart-text
      color #dbdbdb
      text-align center
      margin-bottom 20px
    .btn-wrapper
      height 40px
      width 100%
      margin-left 70px
      .cart-btn
        text-align center
        color #999
        display: inline-block;
        border-radius: 5px;
        border: 1px solid #999;
        height: 40px;
        line-height: 40px;
        width: 100px;
        float left
        margin-left 10px
</style>
