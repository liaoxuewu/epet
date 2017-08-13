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
            <li class="item" style="color: red;">为您推荐</li>
            <li class="item">猫咪主粮</li>
            <li class="item">猫咪零食</li>
            <li class="item">猫咪日用</li>
            <li class="item">猫咪玩具</li>
            <li class="item">猫咪保健</li>
            <li class="item">猫咪医疗</li>
            <li class="item">猫咪出行</li>
            <li class="item">猫咪装扮</li>
            <li class="item">猫咪美容</li>
            <li class="item">猫咪香波</li>
            <li class="item">为您周边</li>
            <li class="item">猫咪定制</li>
            <li class="item">猫咪书籍</li>
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
                <img class="w100" src="https://img2.epetbar.com/nowater/2016-08/20/14/c122bda1f10770c115fe2c765f5b9e83.jpg@!200w-b" data-reactid=".0.3.1.0.1.0.0.0">
                <p>强化免疫</p>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <img class="w100" src="https://img2.epetbar.com/nowater/cates/2014-03/24/dddda26213f5bbb2a3540693d887a0bf.jpg@!200w-b" data-reactid=".0.3.1.0.1.1.0.0">
                <p>猫砂专区</p>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <img class="w100" src="https://img2.epetbar.com/nowater/cates/2014-03/24/2da82a732a1b0df918dfeb38f6b32621.jpg@!200w-b" data-reactid=".0.3.1.0.1.3.0.0">
                <p>体内驱虫</p>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <img class="w100" src="https://img2.epetbar.com/nowater/2017-05/26/10/209951b1f61083be7bba561de378316c.jpg@!200w-b" data-reactid=".0.3.1.0.1.4.0.0">
                <p>罐头湿粮</p>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <img class="w100" src="https://img2.epetbar.com/nowater/2016-07/21/14/24857d999c8c62a85110c66f1ebcf3ac.jpg@!200w-b" data-reactid=".0.3.1.0.1.5.0.0">
                <p>进口猫粮</p>
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
                  <<img class="db" src="https://img2.epetbar.com/nowater/brand_logo/2017-08/09/20/64ac5fd97740cb0fab0cfe3eac1d27f7.jpg" alt="" data-reactid=".0.4.0.1.0.$1.0.0.0">
                </a>
              </div>
              <p class="brand-name">ZIWI Peak</p>
              <p class="brand-contry">新西兰</p>
            </li>
            <li class="item">
            <div class="item-img">
              <a href="javascript:;">
                <img class="db" src="https://img2.epetbar.com/nowater/brand_logo/2013-01/28/87feaa80f9fbed84c37a7b07da6324a1.jpg" alt="" data-reactid=".0.4.0.1.0.$2.0.0.0">
              </a>
            </div>
            <p class="brand-name">渴望</p>
            <p class="brand-contry">加拿大</p>
          </li>
            <li class="item">
              <div class="item-img">
                <a href="javascript:;">
                  <img class="db" src="https://img2.epetbar.com/nowater/brand_logo/2016-08/12/16/4c37fc2c6578742b2a7747c135c5aef4.jpg" alt="" data-reactid=".0.4.0.1.0.$3.0.0.0">
                </a>
              </div>
              <p class="brand-name">麦高臣</p>
              <p class="brand-contry">美国</p>
            </li>
            <li class="item">
              <div class="item-img">
                <a href="javascript:;">
                  <img class="db" src="https://img2.epetbar.com/nowater/brand_logo/2016-08/12/16/276527f25e9151ef48b0b8d2dba79d29.jpg" alt="" data-reactid=".0.4.0.1.0.$4.0.0.0">
                </a>
              </div>
              <p class="brand-name">谷登GOLDEN</p>
              <p class="brand-contry">中国</p>
            </li>
            <li class="item">
              <div class="item-img">
                <a href="javascript:;">
                  <img class="db" src="https://img2.epetbar.com/nowater/brand_logo/2015-10/17/12/d9e05c4a2d35c88ffee0dcec98fba6a4.jpg" alt="" data-reactid=".0.4.0.1.0.$5.0.0.0">
                </a>
              </div>
              <p class="brand-name">MAG</p>
              <p class="brand-contry">中国</p>
            </li>
            <li class="item">
              <div class="item-img">
                <a href="javascript:;">
                  <img class="db" src="https://img2.epetbar.com/nowater/brand_logo/2016-08/12/14/f439e0dc22df3f6c5bc8919b8d9e5c82.jpg" alt="" data-reactid=".0.4.0.1.0.$6.0.0.0">
                </a>
              </div>
              <p class="brand-name">卡比CANIDAE</p>
              <p class="brand-contry">美国</p>
            </li>
            <li class="item">
              <div class="item-img">
                <a href="javascript:;">
                  <img class="db" src="https://img2.epetbar.com/nowater/brand_logo/2015-08/14/14/42ab9ac9118609ec64e43e95f922bd29.jpg" alt="" data-reactid=".0.4.0.1.0.$7.0.0.0">
                </a>
              </div>
              <p class="brand-name">拉夫威尔</p>
              <p class="brand-contry">美国</p>
            </li>
            <li class="item">
              <div class="item-img">
                <a href="javascript:;">
                  <img class="db" src="https://img2.epetbar.com/nowater/brand_logo/2016-08/12/14/370a7f6ed7d607b8542aa9e37d202ac5.jpg" alt="" data-reactid=".0.4.0.1.0.$8.0.0.0">
                </a>
              </div>
              <p class="brand-name">爱肯拿</p>
              <p class="brand-contry">加拿大</p>
            </li>
            <li class="item">
              <div class="item-img">
                <a href="javascript:;">
                  <img class="db" src="https://img2.epetbar.com/nowater/brand_logo/2013-06/29/d6b2233aeec1529b8847fe22075762e8.jpg" alt="" data-reactid=".0.4.0.1.0.$9.0.0.0">
                </a>
              </div>
              <p class="brand-name">卡尔CANIDAE</p>
              <p class="brand-contry">美国</p>
            </li>
            <li class="item">
              <div class="item-img">
                <a href="javascript:;">
                  <img class="db" src="https://img2.epetbar.com/nowater/brand_logo/2017-03/09/16/d0d206328de0321550d7e6f45ee9b5c7.jpg" alt="" data-reactid=".0.4.0.1.0.$10.0.0.0">
                </a>
              </div>
              <p class="brand-name">顽皮Wanpy</p>
              <p class="brand-contry">中国</p>
            </li>
          </ul>
        </div>

        <split></split>

        <div class="brand-content">
          <span class="classify-brand">
            <img width="13" class="line-left" src="//static.epetbar.com/static_wap/epetapp/pages/categorynew/images/line.jpg" alt="" data-reactid=".0.4.0.0.0.0">
            主粮品牌
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
                  <img class="db" src="https://img2.epetbar.com/nowater/brand_logo/2016-08/12/16/2d1826af31eac743bb3c32233511d759.jpg" alt="" data-reactid=".0.4.1.1.0.$1.0.0.0">
                </a>
              </div>
              <p class="brand-name">耐吉斯</p>
              <p class="brand-contry">美国</p>
            </li>
            <li class="item">
              <div class="item-img">
                <a href="javascript:;">
                  <img class="db" src="https://img2.epetbar.com/nowater/brand_logo/2017-08/09/20/64ac5fd97740cb0fab0cfe3eac1d27f7.jpg" alt="" data-reactid=".0.4.1.1.0.$2.0.0.0">
                </a>
              </div>
              <p class="brand-name">ZIWI Peak</p>
              <p class="brand-contry">新西兰</p>
            </li>
            <li class="item">
              <div class="item-img">
                <a href="javascript:;">
                  <img class="db" src="https://img2.epetbar.com/nowater/brand_logo/2016-08/12/14/17f86c4bc86565f0bcefc596bfb9cdb8.jpg" alt="" data-reactid=".0.4.1.1.0.$3.0.0.0">
                </a>
              </div>
              <p class="brand-name">荒野盛宴</p>
              <p class="brand-contry">美国</p>
            </li>
            <li class="item">
              <div class="item-img">
                <a href="javascript:;">
                  <img class="db" src="https://img2.epetbar.com/nowater/brand_logo/2016-08/12/14/f439e0dc22df3f6c5bc8919b8d9e5c82.jpg" alt="" data-reactid=".0.4.1.1.0.$4.0.0.0">
                </a>
              </div>
              <p class="brand-name">卡比CANIDAE</p>
              <p class="brand-contry">美国</p>
            </li>
            <li class="item">
              <div class="item-img">
                <a href="javascript:;">
                  <img class="db" src="https://img2.epetbar.com/nowater/brand_logo/2016-08/12/14/0f3829b8dac7ac968c8ca868c901b4c1.jpg" alt="" data-reactid=".0.4.1.1.0.$5.0.0.0">
                </a>
              </div>
              <p class="brand-name">NOW FRESH</p>
              <p class="brand-contry">加拿大</p>
            </li>
            <li class="item">
              <div class="item-img">
                <a href="javascript:;">
                  <img class="db" src="https://img2.epetbar.com/nowater/brand_logo/2014-08/06/ef4a3c316d6f2bb6a4258c4bbe962da3.jpg" alt="" data-reactid=".0.4.1.1.0.$6.0.0.0">
                </a>
              </div>
              <p class="brand-name">贵族Natures Gift</p>
              <p class="brand-contry">澳大利亚</p>
            </li>
            <li class="item">
              <div class="item-img">
                <a href="javascript:;">
                  <div class="img" data-reactid=".0.4.1.1.0.$7.0.0"><img class="db" src="https://img2.epetbar.com/nowater/2016-08/18/16/c997f3ae79a7568cf7b6dde5c7b7f8b1.jpg" alt="" data-reactid=".0.4.1.1.0.$7.0.0.0"></div>
                </a>
              </div>
              <p class="brand-name">安娜玛特Annam...</p>
              <p class="brand-contry">美国</p>
            </li>
            <li class="item">
              <div class="item-img">
                <a href="javascript:;">
                  <img class="db" src="https://img2.epetbar.com/nowater/brand_logo/2016-08/12/14/436a1eeeb8fdb467fcf70c104286f98e.jpg" alt="" data-reactid=".0.4.1.1.0.$8.0.0.0">
                </a>
              </div>
              <p class="brand-name">鱼子酱Canine C...</p>
              <p class="brand-contry">美国</p>
            </li>
            <li class="item">
              <div class="item-img">
                <a href="javascript:;">
                  <img class="db" src="https://img2.epetbar.com/nowater/brand_logo/2016-08/12/14/72d26c05eb8f3c3ad381603c2c74bacb.jpg" alt="" data-reactid=".0.4.1.1.0.$9.0.0.0">
                </a>
              </div>
              <p class="brand-name">N3</p>
              <p class="brand-contry">中国</p>
            </li>
            <li class="item">
              <div class="item-img">
                <a href="javascript:;">
                  <img class="db" src="https://img2.epetbar.com/nowater/brand_logo/2013-06/29/d6b2233aeec1529b8847fe22075762e8.jpg" alt="" data-reactid=".0.4.1.1.0.$10.0.0.0">
                </a>
              </div>
              <p class="brand-name">蓝氏LegendSandy</p>
              <p class="brand-contry">中国</p>
            </li>
            <li class="item">
              <div class="item-img">
                <a href="javascript:;">
                  <img class="db" src="https://img2.epetbar.com/nowater/brand_logo/2016-10/13/8/a7e6f487268d5d809bb4ed93fc36e439.jpg" alt="" data-reactid=".0.4.1.1.0.$11.0.0.0">
                </a>
              </div>
              <p class="brand-name">丝倍Supercoat</p>
              <p class="brand-contry">澳大利亚</p>
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
            margin-top 10px
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
