<template>
  <div
    class="vLoading-box"
    v-loading="vLoading"
    element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading"
    :element-loading-background="isWhite ? 'rgba(255, 255, 255, 0.9)' : 'rgba(0, 0, 0, 0.8)'"
  >
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      vLoading: {required: true, type: Boolean},
      isWhite: Boolean
    },
    data() {
      return {
        
      }
    }
    
  }
</script>

<style>

</style>