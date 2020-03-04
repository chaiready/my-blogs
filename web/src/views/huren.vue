<template>
  <div class="about">
    <div class="header-img">
      <div class="top-box text-center">
        <div class="mamba-box">
              <i class="iconfont icon-M col-white mx-2"></i>
              <strong>amba</strong>
        </div>

        <h3>我是曼巴</h3>
        <p>89年老腊肉，web前端工程师</p>
      </div>
      <div class="ground-box">
        <div class="up-box"></div>
        <div class="down-box"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.top-box{
    .manba-box {
      .icon-M {
        font-size: 24px;
      }
      .manba {
        padding: 7px 3px 0;
      }
    }
}
.header-img{
  padding-top: 200px;
  width: 100%;
  background: linear-gradient(135deg, #ffb929, #8600ff);
  .ground-box{
  height: 200vh;
  width: 100vh;
  margin: 0 auto;
  background: url("../assets/diban.jpg") repeat;

    border: 4px solid #8600ff;
    .up-box{
      height: 50%;
      border-bottom: 4px solid #8600ff;
      position: relative;
      // overflow: hidden;
      &:before{
        content: '';
        position: absolute;
        left: 37.5vh;
        bottom: -12.5vh;
        width: 25vh;
        height: 25vh;
        background-color: orange;
        border: 4px solid #000;
        border-radius: 50%;

      }
      &:after{
        content: '';
        position: absolute;
        left: calc(10vh - 8px);
        top: -40vh;
        width: 80vh;
        height: 80vh;
        border-bottom: 4px solid #8600ff;
        border-radius: 50%;

      }
    }
    .down-box{
      height: 50%;
      position: relative;
      // overflow: hidden;
      &:after{
        content: '';
        position: absolute;
        left: calc(10vh - 8px);
        bottom: -40vh;
        width: 80vh;
        height: 80vh;
        border-top: 4px solid #8600ff;
        border-radius: 50%;

      }      
    }
  }

}
</style>
