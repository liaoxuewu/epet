<template>
    <div class="classify-content">
      <div class="classify-search">
        <div class="classify-text classify-tab" @click="toggleClassify">
          <span class="text1" :class="{active:have}">分类</span>
        </div>
        <div class="classify-text brand-tab" @click="toggleBrand">
          <span class="text2" :class="{active:!have}">品牌</span>
        </div>
        <div class="classify-img">
          <a href="javascript:;">
            <img src="./search.png" alt="" width="16" height="16">
          </a>
        </div>
      </div>
      <div class="classify-item" v-show="isShow">
        <div class="item-left" ref="leftContent">
          <ul class="left-content"  @click="toggle($event)">
            <li class="item">为您推荐</li>
            <li class="item">猫咪主粮</li>
            <li class="item">猫咪日用</li>
            <li class="item">猫咪玩具</li>
            <li class="item">猫咪保健</li>
            <li class="item">为您推荐</li>
            <li class="item">猫咪主粮</li>
            <li class="item">猫咪日用</li>
            <li class="item">猫咪玩具</li>
            <li class="item">猫咪保健</li>
            <li class="item">为您推荐</li>
            <li class="item">猫咪主粮</li>
            <li class="item">猫咪日用</li>
            <li class="item">猫咪玩具</li>
            <li class="item">猫咪保健</li>
            <li class="item">为您推荐</li>
            <li class="item">猫咪主粮</li>
            <li class="item">猫咪日用</li>
            <li class="item">猫咪玩具</li>
            <li class="item">猫咪保健</li>
          </ul>
        </div>
        <div class="item-right">
          <span>热门分类</span>
          <ul class="item-content">
            <li>
              <a href="javascript:;">
                <img src="https://img2.epetbar.com/nowater/2016-08/20/14/db87afdd8179689ef67c0e352e7c2183.jpg@!200w-b">
                <p>美毛化毛</p>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <img src="https://img2.epetbar.com/nowater/2016-08/20/14/db87afdd8179689ef67c0e352e7c2183.jpg@!200w-b">
                <p>美毛化毛</p>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <img src="https://img2.epetbar.com/nowater/2016-08/20/14/db87afdd8179689ef67c0e352e7c2183.jpg@!200w-b">
                <p>美毛化毛</p>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <img src="https://img2.epetbar.com/nowater/2016-08/20/14/db87afdd8179689ef67c0e352e7c2183.jpg@!200w-b">
                <p>美毛化毛</p>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <img src="https://img2.epetbar.com/nowater/2016-08/20/14/db87afdd8179689ef67c0e352e7c2183.jpg@!200w-b">
                <p>美毛化毛</p>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <img src="https://img2.epetbar.com/nowater/2016-08/20/14/db87afdd8179689ef67c0e352e7c2183.jpg@!200w-b">
                <p>美毛化毛</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="brand-item" v-show="!isShow">
        <div class="brand-content">
          <span class="classify-brand">
            <img width="13" class="line-left" src="//static.epetbar.com/static_wap/epetapp/pages/categorynew/images/line.jpg" alt="" data-reactid=".0.4.0.0.0.0">
            推荐品牌
            <img width="13" class="line-right" src="//static.epetbar.com/static_wap/epetapp/pages/categorynew/images/line.jpg" alt="" data-reactid=".0.4.0.0.0.2">
          </span>
          <ul class="item-content">
            <li class="item">
              <div class="item-img">
                <a href="javascript:;">
                  <img class="db" src="https://img2.epetbar.com/nowater/brand_logo/2016-09/28/10/3b236d1731bd91004bffcec3515e1a0a.jpg" alt="" data-reactid=".0.4.0.1.0.$0.0.0.0">
                </a>
              </div>
              <p class="brand-name">冠能</p>
              <p class="brand-contry">美国</p>
            </li>
            <li class="item">
            <div class="item-img">
              <a href="javascript:;">
                <img class="db" src="https://img2.epetbar.com/nowater/brand_logo/2016-09/28/10/3b236d1731bd91004bffcec3515e1a0a.jpg" alt="" data-reactid=".0.4.0.1.0.$0.0.0.0">
              </a>
            </div>
            <p class="brand-name">冠能</p>
            <p class="brand-contry">美国</p>
          </li>
            <li class="item">
              <div class="item-img">
                <a href="javascript:;">
                  <img class="db" src="https://img2.epetbar.com/nowater/brand_logo/2016-09/28/10/3b236d1731bd91004bffcec3515e1a0a.jpg" alt="" data-reactid=".0.4.0.1.0.$0.0.0.0">
                </a>
              </div>
              <p class="brand-name">冠能</p>
              <p class="brand-contry">美国</p>
            </li>
            <li class="item">
              <div class="item-img">
                <a href="javascript:;">
                  <img class="db" src="https://img2.epetbar.com/nowater/brand_logo/2016-09/28/10/3b236d1731bd91004bffcec3515e1a0a.jpg" alt="" data-reactid=".0.4.0.1.0.$0.0.0.0">
                </a>
              </div>
              <p class="brand-name">冠能</p>
              <p class="brand-contry">美国</p>
            </li>
            <li class="item">
              <div class="item-img">
                <a href="javascript:;">
                  <img class="db" src="https://img2.epetbar.com/nowater/brand_logo/2016-09/28/10/3b236d1731bd91004bffcec3515e1a0a.jpg" alt="" data-reactid=".0.4.0.1.0.$0.0.0.0">
                </a>
              </div>
              <p class="brand-name">冠能</p>
              <p class="brand-contry">美国</p>
            </li>
            <li class="item">
              <div class="item-img">
                <a href="javascript:;">
                  <img class="db" src="https://img2.epetbar.com/nowater/brand_logo/2016-09/28/10/3b236d1731bd91004bffcec3515e1a0a.jpg" alt="" data-reactid=".0.4.0.1.0.$0.0.0.0">
                </a>
              </div>
              <p class="brand-name">冠能</p>
              <p class="brand-contry">美国</p>
            </li>
          </ul>
        </div>

        <split></split>

        <div class="brand-content">
          <span class="classify-brand">
            <img width="13" class="line-left" src="//static.epetbar.com/static_wap/epetapp/pages/categorynew/images/line.jpg" alt="" data-reactid=".0.4.0.0.0.0">
            推荐品牌
            <img width="13" class="line-right" src="//static.epetbar.com/static_wap/epetapp/pages/categorynew/images/line.jpg" alt="" data-reactid=".0.4.0.0.0.2">
          </span>
          <ul class="item-content">
            <li class="item">
              <div class="item-img">
                <a href="javascript:;">
                  <img class="db" src="https://img2.epetbar.com/nowater/brand_logo/2016-09/28/10/3b236d1731bd91004bffcec3515e1a0a.jpg" alt="" data-reactid=".0.4.0.1.0.$0.0.0.0">
                </a>
              </div>
              <p class="brand-name">冠能</p>
              <p class="brand-contry">美国</p>
            </li>
            <li class="item">
              <div class="item-img">
                <a href="javascript:;">
                  <img class="db" src="https://img2.epetbar.com/nowater/brand_logo/2016-09/28/10/3b236d1731bd91004bffcec3515e1a0a.jpg" alt="" data-reactid=".0.4.0.1.0.$0.0.0.0">
                </a>
              </div>
              <p class="brand-name">冠能</p>
              <p class="brand-contry">美国</p>
            </li>
            <li class="item">
              <div class="item-img">
                <a href="javascript:;">
                  <img class="db" src="https://img2.epetbar.com/nowater/brand_logo/2016-09/28/10/3b236d1731bd91004bffcec3515e1a0a.jpg" alt="" data-reactid=".0.4.0.1.0.$0.0.0.0">
                </a>
              </div>
              <p class="brand-name">冠能</p>
              <p class="brand-contry">美国</p>
            </li>
            <li class="item">
              <div class="item-img">
                <a href="javascript:;">
                  <img class="db" src="https://img2.epetbar.com/nowater/brand_logo/2016-09/28/10/3b236d1731bd91004bffcec3515e1a0a.jpg" alt="" data-reactid=".0.4.0.1.0.$0.0.0.0">
                </a>
              </div>
              <p class="brand-name">冠能</p>
              <p class="brand-contry">美国</p>
            </li>
            <li class="item">
              <div class="item-img">
                <a href="javascript:;">
                  <img class="db" src="https://img2.epetbar.com/nowater/brand_logo/2016-09/28/10/3b236d1731bd91004bffcec3515e1a0a.jpg" alt="" data-reactid=".0.4.0.1.0.$0.0.0.0">
                </a>
              </div>
              <p class="brand-name">冠能</p>
              <p class="brand-contry">美国</p>
            </li>
            <li class="item">
              <div class="item-img">
                <a href="javascript:;">
                  <img class="db" src="https://img2.epetbar.com/nowater/brand_logo/2016-09/28/10/3b236d1731bd91004bffcec3515e1a0a.jpg" alt="" data-reactid=".0.4.0.1.0.$0.0.0.0">
                </a>
              </div>
              <p class="brand-name">冠能</p>
              <p class="brand-contry">美国</p>
            </li>
          </ul>
        </div>

        <split></split>

        <div class="brand-content">
          <span class="classify-brand">
            <img width="13" class="line-left" src="//static.epetbar.com/static_wap/epetapp/pages/categorynew/images/line.jpg" alt="" data-reactid=".0.4.0.0.0.0">
            推荐品牌
            <img width="13" class="line-right" src="//static.epetbar.com/static_wap/epetapp/pages/categorynew/images/line.jpg" alt="" data-reactid=".0.4.0.0.0.2">
          </span>
          <ul class="item-content">
            <li class="item">
              <div class="item-img">
                <a href="javascript:;">
                  <img class="db" src="https://img2.epetbar.com/nowater/brand_logo/2016-09/28/10/3b236d1731bd91004bffcec3515e1a0a.jpg" alt="" data-reactid=".0.4.0.1.0.$0.0.0.0">
                </a>
              </div>
              <p class="brand-name">冠能</p>
              <p class="brand-contry">美国</p>
            </li>
            <li class="item">
              <div class="item-img">
                <a href="javascript:;">
                  <img class="db" src="https://img2.epetbar.com/nowater/brand_logo/2016-09/28/10/3b236d1731bd91004bffcec3515e1a0a.jpg" alt="" data-reactid=".0.4.0.1.0.$0.0.0.0">
                </a>
              </div>
              <p class="brand-name">冠能</p>
              <p class="brand-contry">美国</p>
            </li>
            <li class="item">
              <div class="item-img">
                <a href="javascript:;">
                  <img class="db" src="https://img2.epetbar.com/nowater/brand_logo/2016-09/28/10/3b236d1731bd91004bffcec3515e1a0a.jpg" alt="" data-reactid=".0.4.0.1.0.$0.0.0.0">
                </a>
              </div>
              <p class="brand-name">冠能</p>
              <p class="brand-contry">美国</p>
            </li>
            <li class="item">
              <div class="item-img">
                <a href="javascript:;">
                  <img class="db" src="https://img2.epetbar.com/nowater/brand_logo/2016-09/28/10/3b236d1731bd91004bffcec3515e1a0a.jpg" alt="" data-reactid=".0.4.0.1.0.$0.0.0.0">
                </a>
              </div>
              <p class="brand-name">冠能</p>
              <p class="brand-contry">美国</p>
            </li>
            <li class="item">
              <div class="item-img">
                <a href="javascript:;">
                  <img class="db" src="https://img2.epetbar.com/nowater/brand_logo/2016-09/28/10/3b236d1731bd91004bffcec3515e1a0a.jpg" alt="" data-reactid=".0.4.0.1.0.$0.0.0.0">
                </a>
              </div>
              <p class="brand-name">冠能</p>
              <p class="brand-contry">美国</p>
            </li>
            <li class="item">
              <div class="item-img">
                <a href="javascript:;">
                  <img class="db" src="https://img2.epetbar.com/nowater/brand_logo/2016-09/28/10/3b236d1731bd91004bffcec3515e1a0a.jpg" alt="" data-reactid=".0.4.0.1.0.$0.0.0.0">
                </a>
              </div>
              <p class="brand-name">冠能</p>
              <p class="brand-contry">美国</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>
<script>
  import BScroll from 'better-scroll'
  import split from '../../components/split/split.vue'
  export default {
    data () {
      return {
        isShow: true,
        have: true,
        itemActive: 'item-active'
      }
    },
    created () {
      this.$nextTick(() => {
        new BScroll(this.$refs.leftContent, {

        })
      })
    },
    methods: {
      toggleClassify () {
        if(!this.isShow) {
          this.isShow = !this.isShow
          this.have = !this.have
        }
      },
      toggleBrand () {
        if(!this.isShow) {
          return
        }else {
          this.isShow = !this.isShow
          this.have = !this.have
        }
      },
      toggle (event) {
        event.target.addClass(this.itemActive)
      }
    },
    components: {
      split
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  /*html,body
    height: 100%;
    overflow: hidden;*/
  .classify-content
    width 100%
    position relative
    .classify-search
      width 100%
      border-bottom 1px solid #DEDEDE
      height 40px
      position fixed
      z-index 100
      background-color: #fff
      .classify-text
        float left
        width 50%
        font-size 13px
        line-height 30px
        .active
          padding-bottom 10px
          border-bottom 1px solid red
          color red
        .text1
          float right
          text-align center
          margin-right 20px
          font-weight 700
          width 40px
        .text2
          float left
          margin-left 20px
          font-weight 700
      .classify-img
        position absolute
        top 20px
        right 15px
    .classify-item
      padding-top 40px
      width 100%
      background-color: #F3F4F5;
      position relative
      height 667px
      .item-left
        font-size 12px
        width 55px
        padding-left 10px
        background-color: #fff;
        height 667px
        margin-top 10px
        .left-content
          .item-active
            background-color: #F3F4F5;
          .item
            width 100%
            height 40px
            line-height 40px
      .item-right
        width 80%
        background-color: #fff
        position fixed
        top 40px
        left 0
        margin 8px 0 0 70px
        padding 10px 0 0 20px
        span
          color #999
          font-size 14px
        .item-content
          margin-top 10px
          li
            float left
            text-align center
            margin 10px 10px 0 0
            img
              width 85px
              height 85px
            p
              color #333
              font-size 12px
    .brand-item
      width 100%
      position absolute
      top 40px
      text-align center
      background-color: #F3F4F5;
      padding-top 15px
      .brand-content
        background-color: #fff;
        padding-top 15px
        .classify-brand
          font-size 12px
          color #999
          img
            vertical-align middle
        .item-content
          margin-top 30px
          overflow hidden
          .item
            float left
            margin-left 10px
            .item-img
              width 110px
              height 50px
              border 1px solid #EDEDED
              img
                width 80px
                height 40px
                margin-top 5px
            .brand-name
              font-size 13px
              color #333
              height 20px
            .brand-contry
              font-size 13px
              color #999




</style>
