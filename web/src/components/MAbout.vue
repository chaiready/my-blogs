<template>
  <div class="m-about">
    <div class="header-img d-flex ai-start jc-center">
      <div class="top-box text-center">
        <div class="mamba-box col-white">
          <i class="iconfont icon-M mx-2"></i>
          <strong>amba</strong>
        </div>
        <slot></slot>
      </div>
      <el-button size="small" class="back-home">
        <router-link to="/">回到首页</router-link>
      </el-button>
    </div>   
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
.header-img {
  height: 150px;
  width: 100%;
  background: linear-gradient(135deg, #ffb929, #8600ff);
  border-bottom: 4px solid #8600ff;
.back-home{
  position: absolute;
  top: 10px;
  left: 10px;
}
}
.top-box {
  z-index: 1000;
  animation: dropdown 1s linear 1;
  animation-fill-mode: both;
  .mamba-box {
    .icon-M {
      font-size: 40px !important;
    }
    .manba {
      padding: 7px 3px 0;
    }
  }
}
@keyframes dropdown {
  0% {
    -webkit-transform: translatey(0);
  }
  100% {
    -webkit-transform: translatey(50px);
  }
}
</style>