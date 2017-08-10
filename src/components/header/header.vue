<template>
    <div class="wrapper">
      <div class="header-wrapper">
        <!--下载App广告-->
        <div class="download-app">
          <div class="rela">
            <div class="download-img">
              <a href="">
                <i>
              <span class="close-btn">
                <img src="./closebtn_03.png" width="15" height="15">
              </span>
                </i>
              </a>
            </div>
          </div>
        </div>
        <!--头部-->
        <div class="header">
          <div class="content">
            <div class="epet-search">
              <div class="location">
                <span>猫站</span>|<a href="" style="color: black">北京</a>
                <img src="./index_icon_comment_sanjiao.png" alt="" width="8" height="5">
                <i></i>
              </div>
              <!--搜索框-->
              <div class="search-text">
                <input type="search" placeholder="搜索商品和品牌" class="search">
                <span></span>
              </div>
              <a href="" class="epet-category">
                <img src="./mydope.png" width="24" height="24">
              </a>
            </div>
          </div>
        </div>
        <!--导航-->
        <div class="nav" ref="nav">
          <ul class="tab">
            <li class="tab-item">
              <router-link to="/home/indexpage">首页</router-link>
            </li>
            <li class="tab-item">
              <router-link to="/home/catfood">猫粮</router-link>
            </li>
            <li class="tab-item">
              <router-link to="/home/specialsell">特卖</router-link>
            </li>
            <li class="tab-item">
              <router-link to="/home/tinshop">罐头超市</router-link>
            </li>
            <li class="tab-item">
              <router-link to="/home/fashionvideo">潮品视频</router-link>
            </li>
            <li class="tab-item">
              <router-link to="/home/catclass">新喵课堂</router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="router-content">
        <router-view></router-view>
      </div>

    </div>
</template>
<script>
  import BScroll from 'better-scroll'
  export default {
    created () {
      //console.log(this)
      this.$nextTick(() => {
       new BScroll(this.$refs.nav, {
          click: true ,//响应点击事件
          scrollX:true
       })
       })
    },
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .wrapper
    width 100%
    .header-wrapper
      width 100%
      height 155px
      position fixed
      z-index 100
      background-color: #fff;
      .download-app
        width 100%
        .download-img
          width 100%
          a
            display block
            height 55px
            i
              background-image url("./download.png")
              display block
              width 100%
              height 55px
              background-size 100%
              .close-btn
                line-height 55px
                margin-left 10px
      .header
        width 100%
        .content
          margin 10px 0
          .epet-search
            padding 8px
            .location
              display inline-block
              font-size 14px
              img
                vertical-align middle
            .search-text
              display inline-block
              .search
                border none
                width 230px
                height 25px
                background #f6f6f6
                border-radius 4px
                color #9e9e9e
                text-indent 10px
                font-size 13px
                outline none
              span
                display inline-block
                background-image url("./search.png")
                width 11px
                height 11px
                background-size 11px 11px
            .epet-category
              display inline-block
              vertical-align top
      .nav
        .tab
          width 120%
          display flex
          white-space nowrap
          height 36px
          line-height 36px
          .tab-item
            font-size 14px
            color #666
            width 0
            flex 1
            text-align center
            & > a
              display block
              &.active
                color #e73f85
                border-bottom 2px solid #e73f85
    .router-content
      padding-top 150px
      padding-bottom 55px
</style>
