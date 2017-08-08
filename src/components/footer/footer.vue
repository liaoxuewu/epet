<template>
    <div class="footer-wrapper">
      <div class="tab-footer">
        <div class="tab-item">
          <router-link to="/home">
            <img src="./main_cattab_1_sel.png" width="42" height="40">
          </router-link>
        </div>
        <div class="tab-item">
          <router-link to="/classify">
            <img src="./main_tab_2.png" width="42" height="40">
          </router-link>
        </div>
        <div class="tab-item">
          <div class="shopcart">
            <router-link to="/specialsell">
              <img src="./main_tab_3.png" width="42" height="40">
            </router-link>
          </div>
        </div>
        <div class="tab-item">
          <router-link to="/mypet">
            <img src="./main_tab_4.png" width="42" height="40">
          </router-link>
        </div>
      </div>
      <router-view></router-view>
    </div>
</template>
<script>

</script>
<style lang="stylus" rel="stylesheet/stylus">
  .tab-footer
    width 375px
    display flex
    height 36px
    line-height 36px
    .tab-item
      width 0
      flex 1
      text-align center
</style>
