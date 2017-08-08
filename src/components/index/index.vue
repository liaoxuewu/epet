<template>
  <div class="content-wrapper">
    <!--<div class="swiper">
      <mt-swipe :auto="4000">
        <mt-swipe-item>
          <img src="./swiper1.jpg" alt="">
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="./swiper2.jpg" alt="">
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="./swiper3.jpg" alt="">
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="./swiper4.jpg" alt="">
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="./swiper5.png" alt="">
        </mt-swipe-item>
      </mt-swipe>-->
    <!--<div class="swiper-container">
      &lt;!&ndash; Additional required wrapper &ndash;&gt;
      <div class="swiper-wrapper"
           direction='horizontal'
           :loop = 'true'>
        &lt;!&ndash; Slides &ndash;&gt;
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
      </div>
      &lt;!&ndash; If we need pagination &ndash;&gt;
      <div class="swiper-pagination"></div>

      &lt;!&ndash; If we need navigation buttons &ndash;&gt;
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>

      &lt;!&ndash; If we need scrollbar &ndash;&gt;
      <div class="swiper-scrollbar"></div>
    </div>-->
    <!--<swiper :options="swiperOption" ref="mySwiper">
      &lt;!&ndash; slides &ndash;&gt;
      <swiper-slide>I'm Slide 1</swiper-slide>
      <swiper-slide>I'm Slide 2</swiper-slide>
      <swiper-slide>I'm Slide 3</swiper-slide>
      <swiper-slide>I'm Slide 4</swiper-slide>
      <swiper-slide>I'm Slide 5</swiper-slide>
      <swiper-slide>I'm Slide 6</swiper-slide>
      <swiper-slide>I'm Slide 7</swiper-slide>
      &lt;!&ndash; Optional controls &ndash;&gt;
      <div class="swiper-pagination"  slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
      <div class="swiper-scrollbar"   slot="scrollbar"></div>
    </swiper>-->
    </div>
    </div>
  </div>
</template>
<script>
  /*import Vue from 'vue'
  import { Swipe, SwipeItem } from 'mint-ui';

  import Swiper from 'swiper'
  import VueAwesomeSwiper from 'vue-awesome-swiper'

  Vue.component(Swipe.name, Swipe);
  Vue.component(SwipeItem.name, SwipeItem);


  Vue.use(VueAwesomeSwiper)
  import { swiper, swiperSlide } from 'vue-awesome-swiper'*/

  export default {
    /*name: 'carrousel',
    data() {
      return {
        swiperOption: {//以下配置不懂的，可以去swiper官网看api，链接http://www.swiper.com.cn/api/
          // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，<br>　　　　　　　　假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
          notNextTick: true,
          // swiper configs 所有的配置同swiper官方api配置
          autoplay: 3000,
          direction : 'horizontal',
          grabCursor : true,
          setWrapperSize :true,
          autoHeight: true,
          pagination : '.swiper-pagination',
          paginationClickable :true,
          prevButton:'.swiper-button-prev',//上一张
          nextButton:'.swiper-button-next',//下一张
          scrollbar:'.swiper-scrollbar',//滚动条
          mousewheelControl : true,
          observeParents:true,
          // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
          debugger: true,
        }
      }
    },
    components: {
      swiper,
      swiperSlide
    }*/
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .content-wrapper
    padding-top 144px
   /* margin-top 2px*/
    .swiper
      width 100%
      height 160px
      img
        width 100%
        height 100%
</style>
