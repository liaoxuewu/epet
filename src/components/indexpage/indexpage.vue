<template>
  <div class="content-wrapper"  ref="content">
    <div class="content">
      <!--轮播图-->
      <div class="swiper">
        <mt-swipe :auto="4000">
          <mt-swipe-item>
            <a href="javascript:;">
              <img src="./swiper2.jpg" alt="">
            </a>
          </mt-swipe-item>
          <mt-swipe-item>
            <a href="">
              <img src="./swiper2.jpg" alt="">
            </a>
          </mt-swipe-item>
          <mt-swipe-item>
            <a href="">
              <img src="./swiper3.jpg" alt="">
            </a>
          </mt-swipe-item>
          <mt-swipe-item>
            <a href="">
              <img src="./swiper4.png" alt="">
            </a>
          </mt-swipe-item>
          <mt-swipe-item>
            <a href="">
              <img src="./swiper5.png" alt="">
            </a>
          </mt-swipe-item>
        </mt-swipe>
      </div>
      <!--首页logo和item-->
      <div class="home-item">
        <div class="logo">
          <a href="">
            <img src="./home_logo.gif" alt="">
          </a>
        </div>
        <div class="item">
          <ul class="item-wrapper">
            <li class="item-content">
              <a href="">
                <img src="./home_item1.png" alt="">
              </a>
            </li>
            <li class="item-content">
              <a href="">
                <img src="./home_item2.png" alt="">
              </a>
            </li>
            <li class="item-content">
              <a href="">
                <img src="./home_item3.png" alt="">
              </a>
            </li>
            <li class="item-content">
              <a href="">
                <img src="./home_item4.png" alt="">
              </a>
            </li>
            <li class="item-content">
              <a href="">
                <img src="./home_item5.png" alt="">
              </a>
            </li>
          </ul>
        </div>
      </div>
      <split></split>
      <!--每日疯抢-->
      <div class="surprise-wrapper">
        <div class="surprise-time">
          <div class="surprise-logo">
            <img src="./suprise_logo.png" alt="">
          </div>
          <span>距本场结束</span>
          <div id="time">
            <span id="sec" class="time1"></span>:
            <span id="mini" class="time2"></span>:
            <span id="hour" class="time3"></span>
          </div>
          <div class="surprise-more">
            <a href="">
              <img src="./suprise_more.png" alt="">
            </a>
          </div>
        </div>
        <div class="surprise-item">
          <ul class="item-content">
            <li class="item">
              <a href="javascript:;">
                <img src="https://img1.epetbar.com/2017-02/24/16/569d80053378286bdcf1e5a517aebe2e.jpg@!300w-b">
              </a>
              <span style="color: red;font-size: 16px">￥189.00</span>
              <p>省￥21.00</p>
            </li>
            <li class="item">
              <a href="javascript:;">
                <img data-src="https://img1.epetbar.com/2016-09/24/10/495d4b3a9eb276c5095a449fca3de1e2.jpg@!300w-b" class="image" data-reactid=".0.1.1.0.3.0.1.0.0.1.0.0.0.0" src="https://img1.epetbar.com/2016-09/24/10/495d4b3a9eb276c5095a449fca3de1e2.jpg@!300w-b">
              </a>
              <span style="color: red;font-size: 16px">￥15.00</span>
              <p>省￥6.00</p>
            </li>
            <li class="item">
              <a href="javascript:;">
                <img data-src="https://img1.epetbar.com/2016-03/29/10/a0312ea07b2ce3454c723a462e7634e0.jpg@!300w-b" class="image" data-reactid=".0.1.1.0.3.0.1.0.0.2.0.0.0.0" src="https://img1.epetbar.com/2016-03/29/10/a0312ea07b2ce3454c723a462e7634e0.jpg@!300w-b">
              </a>
              <span style="color: red;font-size: 16px">￥19.90</span>
              <p>省￥7.10</p>
            </li>
          </ul>
        </div>
      </div>
      <split></split>
      <!--热门栏目-->
      <div class="hot-item">
        <div class="hot-logo">
          <img src="./home-hot.jpg" alt="">
        </div>
        <div class="img-left">
          <img src="./hot-classroom.png" alt="">
        </div>
        <div class="img-right">
          <div class="img1">
            <img src="./hot-diving-pic.jpg" alt="">
          </div>
          <div class="img2">
            <a href="http://wap.epet.com/catshop/main.html?fw=0" data-reactid=".0.1.1.0.5.0.1.1.1"><img data-src="https://img2.epetbar.com/nowater/2017-03/16/12/8effccc6ec692af5980cbb231ea22583.jpg@!water" name="430" data-reactid=".0.1.1.0.5.0.1.1.1.0" src="https://img2.epetbar.com/nowater/2017-03/16/12/8effccc6ec692af5980cbb231ea22583.jpg@!water"></a>
          </div>
        </div>
      </div>
      <split></split>
      <!--潮品视频-->
      <div class="fashion-video">
        <div class="fashion-logo">
          <i></i>
          <img src="./suprise_more.png" alt="">
        </div>
        <div class="video-content">
          <a href="https://wap.epet.com/article/video/View.html?vid=54&amp;fw=0">
            <div class="video-img">
              <img data-src="https://img1.epetbar.com/2017-08/01/10/b74020c78e97fd082f6ae2796dbea567.jpg@!water" class="image" src="https://img1.epetbar.com/2017-08/01/10/b74020c78e97fd082f6ae2796dbea567.jpg@!water">
              <span class="video-play"></span>
              <div class="video-time">
                01:13
              </div>
            </div>
            <div class="video-text">
              <div class="text">神奇饮水除口臭<font color="#ff0000">#猫咪保健</font>
              </div>
              <div class="video-number">
                <span></span>
                <span>17817</span>
              </div>
            </div>
          </a>
        </div>
      </div>
      <split></split>
      <!--体验馆-->
      <div class="experience">
        <div class="experience-logo">
          <i></i>
          <img src="./suprise_more.png" alt="">
        </div>
        <div class="experience-content">
          <mt-swipe :auto="4000">
            <mt-swipe-item>
              <a href="">
                <img data-src="https://img2.epetbar.com/nowater/2017-08/04/14/56c9cacaaa8e59c9ba5147740b380db6.jpg@!water" data-reactid=".0.1.1.0.b.0.0.0.0.0" src="https://img2.epetbar.com/nowater/2017-08/04/14/56c9cacaaa8e59c9ba5147740b380db6.jpg@!water">
              </a>
            </mt-swipe-item>
            <mt-swipe-item>
              <a href="javascript:;">
                <img data-src="https://img2.epetbar.com/nowater/2017-08/04/14/b5d0f4e080535d205693697f0cb18087.jpg@!water" data-reactid=".0.1.1.0.b.0.0.2.0.0" src="https://img2.epetbar.com/nowater/2017-08/04/14/b5d0f4e080535d205693697f0cb18087.jpg@!water">
              </a>
            </mt-swipe-item>
            <mt-swipe-item>
              <a href="javascript:;">
                <img data-src="https://img2.epetbar.com/nowater/2017-08/04/14/56c9cacaaa8e59c9ba5147740b380db6.jpg@!water" data-reactid=".0.1.1.0.b.0.0.0.0.0" src="https://img2.epetbar.com/nowater/2017-08/04/14/56c9cacaaa8e59c9ba5147740b380db6.jpg@!water">
              </a>
            </mt-swipe-item>
          </mt-swipe>
        </div>
      </div>
      <split></split>
      <!--品牌特卖-->
      <div class="special-sell">
        <div class="special-logo">
          <i></i>
          <img src="./suprise_more.png" alt="">
        </div>
      </div>
      <div class="line"></div>
      <div class="data">
        <div class="data-text">
          <span>品牌特卖-伯纳天纯</span>&nbsp;
          <span style="font-size: 12px;color: #999"></span>
        </div>
        <div class="data-img">
          <a href="">
            <img data-src="https://img2.epetbar.com/nowater/2017-07/03/8/43d67aca2e763de4f1bb2bd5e469d1d7.jpg@!water" data-reactid=".0.1.1.0.g.0.1:0.0.0" src="https://img2.epetbar.com/nowater/2017-07/03/8/43d67aca2e763de4f1bb2bd5e469d1d7.jpg@!water">
          </a>
        </div>
      </div>
      <div class="nature">
        <div class="nature-text">
          <span>品牌特卖-</span>&nbsp;
          <span style="font-size: 12px;color: #999">医仕高</span>
        </div>
        <div class="nature-img">
          <a href="">
            <img data-src="https://img2.epetbar.com/nowater/2017-06/21/12/d93a582ada125b43e81b30655fb69030.jpg@!water" data-reactid=".0.1.1.0.j.0.1:0.0.0" src="https://img2.epetbar.com/nowater/2017-06/21/12/d93a582ada125b43e81b30655fb69030.jpg@!water">
          </a>
        </div>
      </div>
      <div class="nature">
        <div class="nature-text">
          <span>蓝氏天然底敏粮</span>&nbsp;
          <span style="font-size: 12px;color: #999">亮毛&肠灌护理&免疫</span>
        </div>
        <div class="nature-img">
          <a href="">
            <img src="./data_img.jpg" alt="">
          </a>
        </div>
      </div>
      <!--TA公益-->
      <div class="community">
        <div class="community-logo">
          <i></i>
          <span>了解TA公益</span>
        </div>
        <div class="community-back">
          <i>
            <p>截止今日,TA公益已联合E宠商城和 <span>13</span> 家品牌
            </p>
            <p>累积捐赠 <span style="display: inline;background-color: rgba(0,0,0,0)">855,546.56</span>元
            </p>
            <p>已合作7家公益组织，举办参与 <span>2</span> 场公益活动，助养 <span>32</span> 位领养人
            </p>
          </i>
        </div>
        <div class="advertisement">
          <div class="advertisement-left">
            <div class="">
              <img data-src="https://img2.epetbar.com/nowater/2016-12/26/10/67b4b39cc28a9934fa58fa1b9d7e0e90.png" src="https://img2.epetbar.com/nowater/2016-12/26/10/67b4b39cc28a9934fa58fa1b9d7e0e90.png">
            </div>
          </div>
            <div class="advertisement-right">
              <div class="swiper-slide swiper-slide-active" style="width: 109.6px; margin-right: 10px;">
                  <a href="javascript:;">
                    <div class="loadimg-fixed">
                      <img data-src="https://static.epetbar.com/static_wap/appmall/main/epet_brand_logo.png" src="https://static.epetbar.com/static_wap/appmall/main/epet_brand_logo.png"></div>
                    <div class="help-money">已捐助¥146828.34</div>
                  </a>
              </div>
              <div class="swiper-slide swiper-slide-next" style="width: 109.6px; margin-right: 10px;"><a href="javascript:;" data-reactid=".0.1.1.0.11.0.2.1.0.0.1.0">
                    <div class="db loadimg-fixed">
                      <img data-src="https://img2.epetbar.com/nowater/2016-08/18/16/637879a33f1ea84ccdbfa2dc1b3de16e.jpg" data-reactid=".0.1.1.0.11.0.2.1.0.0.1.0.0.0" src="https://img2.epetbar.com/nowater/2016-08/18/16/637879a33f1ea84ccdbfa2dc1b3de16e.jpg">
                    </div>
                    <div class="ft12 help-money ell">已捐助¥150128.41</div>
                  </a></div>
              <!--<div class="swiper-slide" style="width: 109.6px; margin-right: 10px;">
                    <a href="javascript:;">
                      <div class="db loadimg-fixed">
                        <img data-src="https://img2.epetbar.com/nowater/brand_logo/2015-10/17/12/d9e05c4a2d35c88ffee0dcec98fba6a4.jpg" src="https://img2.epetbar.com/nowater/brand_logo/2015-10/17/12/d9e05c4a2d35c88ffee0dcec98fba6a4.jpg">
                      </div>
                      <div class="ft12 help-money ell" data-reactid=".0.1.1.0.11.0.2.1.0.0.2.0.1">已捐助¥57471.27</div>
                    </a>
                  </div>
              <div class="swiper-slide" data-reactid=".0.1.1.0.11.0.2.1.0.0.3" style="width: 109.6px; margin-right: 10px;"><a href="javascript:;" data-reactid=".0.1.1.0.11.0.2.1.0.0.3.0">
                    <div class="db loadimg-fixed" data-reactid=".0.1.1.0.11.0.2.1.0.0.3.0.0">
                      <img data-src="https://img2.epetbar.com/nowater/2016-08/18/16/92371ab34de0ea12b67028d6625c5180.jpg" data-reactid=".0.1.1.0.11.0.2.1.0.0.3.0.0.0" src="https://img2.epetbar.com/nowater/2016-08/18/16/92371ab34de0ea12b67028d6625c5180.jpg">
                    </div>
                    <div class="ft12 help-money ell" data-reactid=".0.1.1.0.11.0.2.1.0.0.3.0.1">已捐助¥53492.32</div>
                  </a></div>-->
            </div>
      </div>
      <split></split>
      <!--口碑评价-->
      <div class="rating">
        <div class="rating-logo">
          <i>
          </i>
          <span>好评率99.64%</span>
        </div>
        <ul class="rating-content">
          <li class="rating-item">
            <div class="join-data">
              加入E宠2年0月
            </div>
            <div class="rating-content">
              <span>红*****w</span>
              <span class="pet-name">中华田园猫</span>
              <p>
                包装完美，没有破漏的情况存在，虽说是跨境运输，但是物流的速度还是比想象中快，最主要的还是正品保证，买得放心吃的安心
              </p>
            </div>

          </li>
          <li class="rating-item">
            <div class="join-data">
              加入E宠2年0月
            </div>
            <div class="rating-content">
              <span>红*****w</span>
              <span class="pet-name">中华田园猫</span>
              <p>
                包装完美，没有破漏的情况存在，虽说是跨境运输，但是物流的速度还是比想象中快，最主要的还是正品保证，买得放心吃的安心
              </p>
            </div>

          </li>
          <li class="rating-item">
            <div class="join-data">
              加入E宠2年0月
            </div>
            <div class="rating-content">
              <span>红*****w</span>
              <span class="pet-name">中华田园猫</span>
              <p>
                包装完美，没有破漏的情况存在，虽说是跨境运输，但是物流的速度还是比想象中快，最主要的还是正品保证，买得放心吃的安心
              </p>
            </div>

          </li>
          <li class="rating-item">
            <div class="rating-img" width="20" height="20">
              <img width="20" height="20" data-src="https://img1.epetbar.com/2017-02/03/12/2bfa814e0924d3c870a2b758c335b18d.jpg" class="image" data-reactid=".0.1.1.0.14.0.1.0.1.0.0.0.0.0" src="https://img1.epetbar.com/2017-02/03/12/2bfa814e0924d3c870a2b758c335b18d.jpg">
            </div>

            <div class="join-data">
              加入E宠2年0月
            </div>
            <div class="rating-content">
              <span>红*****w</span>
              <span class="pet-name">中华田园猫</span>
              <p>
                包装完美，没有破漏的情况存在，虽说是跨境运输，但是物流的速度还是比想象中快，最主要的还是正品保证，买得放心吃的安心
              </p>
            </div>

          </li>
        </ul>
      </div>
    </div>
  </div>
      </div>
    </div>
</template>
<script>
  import BScroll from 'better-scroll'
  import axios from 'axios'
  import split from '../split/split.vue'

  const OK = 0
  export default {
    props: {
      headerY: Number,
      addFix: Function,
    },
      data () {
        return {
          scrollY: 0,
          contentTop: 0,
          indexpage: {},
          menus: [],
        }
      },
      created () {

        //console.log(this)
        this.$nextTick(() => {
          var d = Date.UTC(2030, 6, 27, 16, 34);
          var obj = {
            sec: document.getElementById("hour"),
            mini: document.getElementById("mini"),
            hour: document.getElementById("sec")
          }
          this.fnTimeCountDown(d, obj);
          this._initScroll()
          this.contentTop = document.getElementsByClassName('content-wrapper')[0].offsetTop
          //console.log(this)
          if(this.contentTop < this.headerY) {
            this.addFix()
          }
         })
        axios.get('/api/indexpage')
          .then(response => {
            const result = response.data
            //console.log(result)
            if (result.code === OK) {
              this.indexpage = result.data

            }
          })
      },
      methods: {
        _initScroll () {
          this.contentScroll =new BScroll(this.$refs.content, {
            probeType: 3, //手指move的时候触发scroll事件
            click: true //响应点击事件
          })
          this.contentScroll.on('scroll',(pos) => {
            //console.log(pos.y)
            this.scrollY = Math.abs(pos.y);
            if(this.scrollY) {
              this.addFix()
            }
          })
        },
        fnTimeCountDown (d, o){
        var f = {
          zero: function(n){
            var n = parseInt(n, 10);
            if(n > 0){
              if(n <= 9){
                n = "0" + n;
              }
              return String(n);
            }else{
              return "00";
            }
          },
          dv: function(){
            d = d || Date.UTC(2050, 0, 1); //如果未定义时间，则我们设定倒计时日期是2050年1月1日
            var future = new Date(d), now = new Date();
            //现在将来秒差值
            var dur = Math.round((future.getTime() - now.getTime()) / 1000) + future.getTimezoneOffset() * 60, pms = {
              sec: "00",
              mini: "00",
              hour: "00",
              day: "00",
              month: "00",
              year: "0"
            };
            if(dur > 0){
              pms.sec = f.zero(dur % 60);
              pms.mini = Math.floor((dur / 60)) > 0? f.zero(Math.floor((dur / 60)) % 60) : "00";
              pms.hour = Math.floor((dur / 3600)) > 0? f.zero(Math.floor((dur / 3600)) % 24) : "00";
              pms.day = Math.floor((dur / 86400)) > 0? f.zero(Math.floor((dur / 86400)) % 30) : "00";
              //月份，以实际平均每月秒数计算
              pms.month = Math.floor((dur / 2629744)) > 0? f.zero(Math.floor((dur / 2629744)) % 12) : "00";
              //年份，按按回归年365天5时48分46秒算
              pms.year = Math.floor((dur / 31556926)) > 0? Math.floor((dur / 31556926)) : "0";
            }
            return pms;
          },
          ui: function(){
            if(o.sec){
              o.sec.innerHTML = f.dv().sec;
            }
            if(o.mini){
              o.mini.innerHTML = f.dv().mini;
            }
            if(o.hour){
              o.hour.innerHTML = f.dv().hour;
            }
            if(o.day){
              o.day.innerHTML = f.dv().day;
            }
            if(o.month){
              o.month.innerHTML = f.dv().month;
            }
            if(o.year){
              o.year.innerHTML = f.dv().year;
            }
            setTimeout(f.ui, 1000);
          }
        };
        f.ui();
      }
      },
      components: {
        split
      }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .content-wrapper
    position relative
    z-index -100
    .content
      position absolute
      margin-top 2px
      top 0
      .swiper
        width 100%
        height 160px
        img
          width 100%
          height 100%
      .home-item
        width 100%
        .logo
          width 100%
          height 120px
          img
            width 100%
            height 100%
        .item
          height 90px
          .item-wrapper
            width 100%
            .item-content
              width 100%
              img
                display block
                float left
                width 20%
      .surprise-wrapper
        margin-top 10px
        .surprise-time
          font-size 13px
          .surprise-logo
            display inline-block
            width 30%
            vertical-align middle
            img
              width 100%
          #time
            display inline-block
            span
              width 21px
              height 21px
              border 1px solid #E7E7E7
              margin 0 5px 0 5px
          .surprise-more
            display inline-block
            vertical-align middle
            width 20%
            height 50px
            img
              width 100%
              height 100%
        .surprise-item
          margin 10px 0
          .item-content
            width 100%
            .item
              display inline-block
              width 30%
              height 150px
              color #999
              font-size 12px
              text-align center
            img
              display block
              float left
              width 100%
              margin 0 10px
      .hot-item
        width 100%
        .hot-logo
          width 100%
          img
            width 100%
            height 40px
        .img-left
          display inline-block
          width 35%
          img
            width 100%
            height 190px
        .img-right
          display inline-block
          width 60%
          .img1
            display inline-block
            width 100%
            img
              width 100%
              height 95px
          .img2
            display inline-block
            width 100%
            img
              width 100%
              height 95px
      .fashion-video
        width 100%
        text-align center
        .fashion-logo
          i
            display inline-block
            width 50%
            height 50px
            background url("./home-video-pic.png") no-repeat
            background-size 100%
            margin-left 50px
          img
            height 50px
            float right
        .video-content
          width 100%
          height 150px
          padding-bottom 20px
          position relative
          a
            display inline-block
            width 100%
            height 100%
            .video-img
              img
                width 100%
                height 150px
              .video-time
                position absolute
                top 5px
                right 5px
                color #fff
                font-size 12px
            .video-text
              .text
                float left
                font-size 12px
                color #333
                margin-left 10px
              .video-number
                float right
                font-style normal
                font-size 12px
                margin-right 10px
                color #333
      .experience
        width 100%
        text-align center
        .experience-logo
          i
            display inline-block
            width 50%
            height 50px
            background url("./exprience_logo.png") no-repeat
            background-size 100%
            margin-left 50px
          img
            height 50px
            float right
        .experience-content
          width 100%
          height 160px
          img
            width 100%
            height 100%
      .special-sell
        width 100%
        text-align center
        .special-logo
          i
            display inline-block
            width 50%
            height 50px
            background url("./special_logo.png") no-repeat
            background-size 100%
            margin-left 50px
          img
            height 50px
            float right
      .line
        width 100%
        height 1px
        background-color #CCC
      .data
        margin 10px 0
        .data-text
          margin 10px
          font-size 15px
        .data-img
          width 100%
          height 155px
          img
            width 100%
            height 100%
      .nature
        margin 10px 0
        .nature-text
          margin 10px
          font-size 15px
        .nature-img
          width 100%
          height 155px
          img
            width 100%
            height 100%
      .community
        width 100%
        .community-logo
          width 100%
          text-align center
          color #CECECE
          font-size 12px
          i
            display inline-block
            width 50%
            height 40px
            background url("./public-logo.jpg") no-repeat
            background-size 100%
            vertical-align middle
        .community-back
          width 100%
          i
            padding-top 20px
            color #fff
            display inline-block
            text-align center
            font-style normal
            width 100%
            height 120px
            line-height 28px
            font-size 14px
            background url("./community_back.jpg") no-repeat
            background-size 100%
            span
              color #FF0000
              display inline-block
              width 25px
              height 25px
              background-color #fff
              border-radius 5px
              font-weight bold
        .advertisement
          margin-top 10px
          height 80px
          background-color: #fff
          position relative
          .advertisement-left
            display inline-block
            width 30%
            height 100%
            text-align center
            img
              width 54px
              height 50px
          .advertisement-right
            display inline-block
            height 60px
            .swiper-slide
              float left
              .loadimg-fixed
                img
                  width 100px
                  height 50px
              .help-money
                color #333
                font-size 12px
      .rating
        width 100%
        .rating-logo
          text-align center
          color #CECECE
          font-size 12px
          width 100%
          i
            display inline-block
            background url("./rating-logo.png") no-repeat
            width 50%
            height 40px
            background-size 100%
            vertical-align middle
        .rating-content
          width 100%
          height 400px
          .rating-item
            margin-left 10px
            padding-bottom 10px
            float left
            background url("./rating_item1.jpg") no-repeat
            width 45%
            height 230px
            background-size 100%
            overflow hidden
            text-overflow ellipsis
            .join-data
              margin-top 130px
              background-color #4C4733
              text-align center
              color #fff
              font-size 12px
              height 15px
            .rating-content
              padding-top 10px
              background-color #fff
              span
                font-size 14px
              .pet-name
                display inline-block
                float right
                width 80px
                height 20px
                background-color #ddd
                border-radius 5px
                line-height 15px
                text-align center
              p
                padding 5px
                font-size 12px
                height 50px
                color #999
                line-height 15px
</style>
