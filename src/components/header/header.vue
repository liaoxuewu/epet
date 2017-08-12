<template>
  <div class="wrapper">
    <div class="header-wrapper" :class="{fix:have}">
      <!--下载App广告-->
      <div class="download-app" v-show="isShow">
        <div class="rela">
          <div class="download-img">
            <a href="javascript:;">
              <i>
                <span class="close-btn" @click="closeDownload">
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
      <router-view :headerY="headerY"
                   :add-fix="addFix"></router-view>
    </div>
  </div>

</template>
<script>
  import BScroll from 'better-scroll'
  import axios from 'axios'

  /*import md5 from 'blueimp-md5'
  import moment from 'moment'
  import Base64 from 'js-base64'
  import request from 'request'*/

  const OK = 0
  export default {

    data () {
      return {
        isShow: true,
        have: false,
        headerY: 0,
        indexpage: {},
        menus: []
      }
    },
    methods: {
      closeDownload () {
        this.isShow = !this.isShow
      },
      addFix () {
        /*const headerY = document.getElementsByTagName('header-wrapper').top
        this.$refs.content._initScroll()
        if(this.$refs.scrollY >= headerY) {
          this.hava = !this.have
        }*/
        //this.headerY = document.getElementsByClassName('header-wrapper')[0].offsetHeight
        this.have = !this.have
      },
      /*randomCode(length) {
        var chars = ['0','1','2','3','4','5','6','7','8','9'];
        var result = ""; //统一改名: alt + shift + R
        for(var i = 0; i < length ; i ++) {
          var index = Math.ceil(Math.random()*9);
          result += chars[index];
        }
        console.log('验证码: ', result)
        return result;
      },*/
      /*sendCode(phone, code, callback) {
        var ACCOUNT_SID = '8a216da85da6adf7015db7c255da0431';
        var AUTH_TOKEN = '3f8b4b8e354044f790316a490753025e';
        var Rest_URL = 'https://app.cloopen.com:8883';
        var AppID = '8a216da85da6adf7015db7c259be0438';
        //1. 准备请求url
        /!*
         1.使用MD5加密（账户Id + 账户授权令牌 + 时间戳）。其中账户Id和账户授权令牌根据url的验证级别对应主账户。
         时间戳是当前系统时间，格式"yyyyMMddHHmmss"。时间戳有效时间为24小时，如：20140416142030
         2.SigParameter参数需要大写，如不能写成sig=abcdefg而应该写成sig=ABCDEFG
         *!/
        var sigParameter = '';
        var time = moment().format('YYYYMMDDHHmmss');
        sigParameter = md5(ACCOUNT_SID + AUTH_TOKEN + time);
        var url = Rest_URL + '/2013-12-26/Accounts/' + ACCOUNT_SID + '/SMS/TemplateSMS?sig=' + sigParameter;

        //2. 准备请求体
        var body = {
          to: phone,
          appId: AppID,
          templateId: '1',
          "datas": [code, "1"]
        }
        //body = JSON.stringify(body);

        //3. 准备请求头
        /!*
         1.使用Base64编码（账户Id + 冒号 + 时间戳）其中账户Id根据url的验证级别对应主账户
         2.冒号为英文冒号
         3.时间戳是当前系统时间，格式"yyyyMMddHHmmss"，需与SigParameter中时间戳相同。
         *!/
        var authorization = ACCOUNT_SID + ':' + time;
        authorization = Base64.encode(authorization);
        var headers = {
          'Accept': 'application/json',
          'Content-Type': 'application/json;charset=utf-8',
          'Content-Length': JSON.stringify(body).length + '',
          'Authorization': authorization
        }

        //4. 发送请求, 并得到返回的结果, 调用callback
        request({
          method: 'POST',
          url: url,
          headers: headers,
          body: body,
          json: true
        }, function (error, response, body) {
          console.log(error, response, body);
          callback(body.statusCode === '000000');
          //callback(true);
        });
      }*/
    },
    created () {
      axios.get('/api/indexpage')
        .then(response => {
          const result = response.data
          //console.log(result)
          if (result.code === OK) {
            this.indexpage = result.data
            console.log(this.indexpage)
          }
          this.$nextTick(() => {
            new BScroll(this.$refs.nav, {
              click: true ,//响应点击事件
              scrollX:true
            })
            //this.headerY = document.getElementsByClassName('header-wrapper')[0].offsetHeight
        })
      })
    },
    updated () {
      //this.headerY = document.getElementsByClassName('header-wrapper')[0].offsetHeight
      //console.log(this.headerY)
    },
    computed: {

    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .wrapper
    width 100%
    .header-wrapper
      width 100%
      /*height 155px*/
      /*position fixed
      z-index 100*/
      background-color: #fff;
      .fix
        position fixed
        z-index 100
        background-color: #fff;
        height 155px
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
          margin-bottom 10px
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
      /*position absolute
      top 0
      left 0
      width 100%*/
      /*padding-top 150px*/
      padding-bottom 55px
</style>
