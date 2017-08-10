<template>
    <div class="epet-header">
      <epet-header></epet-header>
    </div>
</template>
<script>
  import header from '../header/header.vue'

  export default {
    components: {
      'epet-header': header
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  /*.epet-header
    position fixed
      z-index 100
      background-color: #fff;*/
</style>
