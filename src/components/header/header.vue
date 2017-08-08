<template>
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
              <span>猫站</span>|<a href="">北京</a>
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
        <!--导航-->
        <ul class="tab"
            rel="tab">
          <li class="tab-item">
            <router-link to="/index">首页</router-link>
          </li>
          <li class="tab-item">
            <router-link to="/catfood">猫粮</router-link>
          </li>
          <li class="tab-item">
            <router-link to="/specialsell">特卖</router-link>
          </li>
          <li class="tab-item">
            <router-link to="/tinshop">罐头超市</router-link>
          </li>
          <li class="tab-item">
            <router-link to="/fashionvideo">潮品视频</router-link>
          </li>
          <li class="tab-item">
            <router-link to="/catclass">新喵课堂</router-link>
          </li>

        </ul>
      </div>

    </div>
</template>
<script>
  import BScroll from 'better-scroll'
  export default {
    methods: {
      /*mousemove () {
        this.$nextTick(() => {
          this._initScroll()
        })
      },*/
      _initScroll () {//导航滑动
        new BScroll(this.$refs.tab, {
          click: true //响应点击事件
        })
      }
  }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .header-wrapper
    width 100%
    .download-app
      width 100%
      .download-img
        a
          display block
          height 55px
          i
            background-image url("./download.png")
            display block
            width 85%
            height 55px
            background-size 100%
            .close-btn
              line-height 55px
              margin-left 10px
    .header
      .content
        margin 10px 0
        .epet-search
          padding 8px
          .location
            display inline-block
            font-size 14px
          .search-text
            display inline-block
            .search
              border none
              width 240px
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

</style>
