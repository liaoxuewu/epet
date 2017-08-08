<template>
  <div class="app">
    <div class="header">
      <epet-header></epet-header>

      <router-view></router-view>
    </div>
    <epet-footer class="footer"></epet-footer>
  </div>
</template>

<script>
  import header from './components/header/header.vue'
  import footer from './components/footer/footer.vue'

  export default {
    name: 'app',
    components: {
      'epet-header': header,
      'epet-footer': footer
    }
  }
  </script>

<style lang="stylus" rel="stylesheet/stylus">
  .app
    position fixed
    .tab
      width 450px
      display flex
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
    .footer
      position fixed
      width 100%
      height 55px
      left 0
      bottom 0
</style>
