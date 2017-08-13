<template>
    <div class="login-wrapper">
      <div class="login-bg">
        <div class="bg-top">
          <div class="back">
            <a href="./home/indexpage">
              <img src="./back.png" alt="" width="15" height="18">
            </a>
            <a href="javascript:;">
              <span style="color: #fff">注册</span>
            </a>
          </div>
        </div>
        <div class="bg-middle">
          <img src="//static.epetbar.com/mpet/images/login/logo.png">
        </div>
        <div class="bg-footer">
          <ul class="login-tag">
            <li class="login-item" @click="login">
              <a href="javascript:;" style="color: #fff">
                普通登录
              </a>
              <i :class="{triangle:have}"></i>
            </li>
            <li class="login-item" @click="loginTodo">
              <a href="javascript:;" style="color: #fff">
              手机动态密码登录
              </a>
              <i :class="{triangle:!have}">

              </i>
            </li>
          </ul>
        </div>
      </div>
      <div class="login-content" v-show="isShow">
        <ul class="content-wrapper">
          <li class="item-content">
            <span></span>
            <input type="text" placeholder="手机号/邮箱/用户名">

          </li>
          <li class="item-psd">
            <span></span>
            <input type="text" placeholder="输入密码">
          </li>
        </ul>
      </div>
      <div class="login-content" v-show="!isShow">
        <ul class="content-wrapper">
          <li class="item-content">
            <span class="mobile-logo"></span>
            <input type="text" placeholder="已注册的手机号">
          </li>
          <li class="item-psd">
            <span></span>
            <input type="text" placeholder="请输入图片内容">
            <div id="v_container" style="width: 100px;height: 50px;float: right;margin-top: 10px">
            </div>
            <!--<input type="text" id="code_input" value="" /><button id="my_button">验证</button>-->
          </li>
          <li class="item-psd">
            <span></span>
            <input type="text" placeholder="动态密码">
            <div class="get-psd" @click="getCode">
              获取动态密码
            </div>
          </li>
        </ul>
      </div>
      <div class="forget-psd">
        <a href="javascript:;">
          忘记密码？
        </a>
      </div>
      <div class="login-btn">
        <a href="javascript:;">
          登&nbsp;&nbsp;&nbsp;录
        </a>
      </div>
      <div class="ft-text">
        合作网站登录
      </div>
      <div class="ft-logo">
        <img src="./login_ico4.png" alt="" width="57" height="57">
        <img src="./login_ico2.png" alt="" width="57" height="57">
      </div>
      <!--<div class="dialog">
        <div class="loginPage">
          <h1>登录</h1>
          <el-form>
            <el-form-item label="user">
              <el-input type="text" id="user" v-model="formName.user" @blur="inputBlur('user',formName.user)"></el-input>
              <p>{{formName.userError}}</p>
            </el-form-item>
            <el-form-item label="password">
              <el-input type="password" id="password" v-model="formName.password" @blur="inputBlur('password',formName.password)"></el-input>
              <p>{{formName.passwordError}}</p>
            </el-form-item>
            <el-button type="primary" @click="submitForm('formName')" v-bind:disabled="formName.beDisabled">提交</el-button>
            <el-button @click="resetForm">重置</el-button>
          </el-form>
        </div>
      </div>-->
      </div>
</template>
<script>
  import GVerify from '../../../static/gVerify'
  import axios from 'axios'

  import md5 from 'blueimp-md5'
  import moment from 'moment'
  import Base64 from 'js-base64'
  //var Base64 = require('./base64.js').Base64;
  /*import request from 'request'*/

  /*import sendCode from '../../../static/sms_util'
   import randomCode from '../../../static/sms_util'*/

  export default {
    name: '',
    data () {
      return {
        isShow: true,
        have: true,
        formName: {//表单中的参数
          user: '',
          userError: '',
          password: '',
          passwordError: '',
          beDisabled: true
        },
        beShow: false//传值给父组件
      }
    },
    created() {

      this.$nextTick(function () {
        var verifyCode = new GVerify("v_container");
        /*document.getElementById("my_button").onclick = function () {
          var res = verifyCode.validate(document.getElementById("code_input").value);
          if (res) {
            alert("验证正确");
          } else {
            alert("验证码错误");
          }
        }*/


      })

    },
    methods: {
      login () {
        if(!this.isShow) {
          this.isShow = !this.isShow
          this.have = !this.have
        }

      },
      loginTodo () {
        if(!this.isShow) {
          return
        }else {
          this.isShow = !this.isShow
          this.have = !this.have
        }
      },
      randomCode(length) {
        var chars = ['0','1','2','3','4','5','6','7','8','9'];
        var result = ""; //统一改名: alt + shift + R
        for(var i = 0; i < length ; i ++) {
          var index = Math.ceil(Math.random()*9);
          result += chars[index];
        }
        console.log('验证码: ', result)
        return result;
      },
      sendCode(phone, code, callback) {
        var ACCOUNT_SID = '8a216da85da6adf7015db7c255da0431';
        var AUTH_TOKEN = '3f8b4b8e354044f790316a490753025e';
        var Rest_URL = 'https://app.cloopen.com:8883';
        var AppID = '8a216da85da6adf7015db7c259be0438';
        //1. 准备请求url
        /*
         1.使用MD5加密（账户Id + 账户授权令牌 + 时间戳）。其中账户Id和账户授权令牌根据url的验证级别对应主账户。
         时间戳是当前系统时间，格式"yyyyMMddHHmmss"。时间戳有效时间为24小时，如：20140416142030
         2.SigParameter参数需要大写，如不能写成sig=abcdefg而应该写成sig=ABCDEFG
         */
        var sigParameter = '';
        var time = moment().format('YYYYMMDDHHmmss');
        sigParameter = md5(ACCOUNT_SID+AUTH_TOKEN+time);
        var url = Rest_URL+'/2013-12-26/Accounts/'+ACCOUNT_SID+'/SMS/TemplateSMS?sig='+sigParameter;

        //2. 准备请求体
        var body = {
          to : phone,
          appId : AppID,
          templateId : '1',
          "datas":[code,"1"]
        }
        //body = JSON.stringify(body);

        //3. 准备请求头
        /*
         1.使用Base64编码（账户Id + 冒号 + 时间戳）其中账户Id根据url的验证级别对应主账户
         2.冒号为英文冒号
         3.时间戳是当前系统时间，格式"yyyyMMddHHmmss"，需与SigParameter中时间戳相同。
         */
        var authorization = ACCOUNT_SID + ':' + time;
        authorization = Base64.Base64.encode(authorization);
        var headers = {
          'Accept' :'application/json',
          'Content-Type' :'application/json;charset=utf-8',
          'Content-Length': JSON.stringify(body).length+'',
          'Authorization' : authorization
        }

        //4. 发送请求, 并得到返回的结果, 调用callback
        var val = {
          headers : headers,
          body : body,
          json : true
        }
        /*request({
         method : 'POST',
         url : url,
         headers : headers,
         body : body,
         json : true
         }, function (error, response, body) {
         console.log(error, response, body);
         callback(body.statusCode==='000000');
         //callback(true);
         });*/
        axios.post(url,val).then(response => {

          callback(body.statusCode==='000000');
        }),(error)=>{
          console.log(error)
        }
       /* this.axios({
          methods: 'post',
          baseURL: 'api',
          headers : headers,
          body : body,
          json : true,
          url : url
        }).then(res => {
          callback(body.statusCode==='000000');
        })*/

      },
      getCode () {
        this.sendCode('15261525287', this.randomCode(6), function (success) {
          console.log(success);
        })
      }
      /*resetForm:function(){
        this.formName.user = '';
        this.formName.userError = '';
        this.formName.password = '';
        this.formName.passwordError = '';
      },*/
      /*submitForm:function(formName){
        //与父组件通信传值
        //this.$emit('showState', [this.beShow,this.formName.user])
        //提交user password
        var user = this.formName.user,
          password = this.formName.password;
        console.log(user,password)
        Axios.get('../../src/php/login.php?user='+user+'&password='+password)
          .then(function(res){
            console.log(res)

          })
          .catch(function(){

          })
      },*/
      /*inputBlur:function(errorItem,inputContent){
        if (errorItem === 'user') {
          if (inputContent === '') {
            this.formName.userError = '用户名不能为空'
          }else{
            this.formName.userError = '';
          }
        }else if(errorItem === 'password') {
          if (inputContent === '') {
            this.formName.passwordError = '密码不能为空'
          }else{
            this.formName.passwordError = '';
          }
        }
        //对于按钮的状态进行修改
        if (this.formName.user != '' && this.formName.password != '') {
          this.formName.beDisabled = false;
        }else{
          this.formName.beDisabled = true;
        }
      }*/
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .login-wrapper
    width 100%
    height 100%
    position fixed
    background-color: #fff;
    top 0
    z-index 200
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
          width 100%
          height 44px
          .login-item
            width 50%
            height 100%
            float left
            text-align center
            font-size 14px
            line-height 45px
            position relative
            .triangle
              width 0
              height 0
              border-left 10px solid transparent
              border-right 10px solid transparent
              border-bottom 10px solid #fff
              position absolute
              bottom 0px
              left 0
              right 0
              margin auto
    .login-content
      width 95%
      .item-content
        border-bottom 1px solid #E9E9E9
        height 30px
        margin 25px 0 0 25px
        span
          width 17px
          height 20px
          display block
          background url("./ico3.png") no-repeat
          background-size 100%
          position absolute
        .mobile-logo
          width 12px
          height 22px
          display block
          background url("./ico1.png") no-repeat
          background-size 100%
          position absolute
        input::-webkit-input-placeholder
          color #D7D7D7
        input[type="text"]
          margin-left 25px
          border none //非激活状态跟不显示
          outline medium //鼠标移到输入框不显示
      .item-psd
        border-bottom 1px solid #E9E9E9
        height 50px
        margin 0 0 0 25px
        line-height 40px
        position relative
        span
          width 17px
          height 21px
          display block
          background url("./ico4.png") no-repeat
          background-size 100%
          position absolute
          margin-top 10px
        input[type="text"]
          margin-left 25px
          border: none;
          outline: medium;
        input::-webkit-input-placeholder
          color #D7D7D7
        .get-psd
          display inline-block
          width 100px
          height 30px
          border 1px solid #F6ADA2
          border-radius 5px
          color #FF4259
          font-size 12px
          position absolute
          top 0
          right 0
          margin-top 10px
          text-align center
          line-height 30px
    .forget-psd
      float right
      margin 10px 10px 0 0
      font-size 15px
    .login-btn
      width 90%
      height 40px
      background-color: #2ec975
      border-radius 3px
      margin 35px auto
      text-align center
      line-height 40px
      a
        color #fff
    .ft-text
      width 100%
      text-align center
      margin-top 120px
      color #d7d7d7
    .ft-logo
      img
        margin 20px 0 0 50px
  /*.dialog{
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.8);
  }
  .loginPage{
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -150px;
    margin-left: -175px;
    width: 350px;
    min-height: 300px;
    padding: 30px 20px 20px;
    border-radius: 8px;
    box-sizing: border-box;
    background-color: #fff;
  }
  .loginPage p{
    color: red;
    text-align: left;
  }*/
</style>
