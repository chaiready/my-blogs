<template>
  <div>
    <div class="header-img">
      <div class="dialog-black">
        <div class="introduce d-flex ai-center">
          <div class="fs-9xl">
            <h2 class="m-0 text-linear">曼巴 out ?</h2>
            <p class="m-0 text-linear text-indent">未完待续。。。</p>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-light-2 py-5">
      <div class="container fs-3xl text-center">
        <p class="fs-8xl">博客尝试使用如下技术/工具构建</p>
        <div class="language d-flex">
          <div class="flex-1 language-left border-right-2 text-right">
            <div class="title">前端</div>
            <div class="title">后端</div>
            <div class="title">数据库</div>
            <div class="title">服务器</div>
            <div class="title">工具</div>
          </div>
          <div class="language-right text-left">
            <div class>
              <img class="mr-3" src="../assets/langImages/js.jpg" alt />
              <img src="../assets/langImages/vue.png" alt />
            </div>
            <div class>
              <img src="../assets/langImages/node.png" alt />
            </div>
            <div class>
              <img src="../assets/langImages/mongodb.jpg" alt />
            </div>
            <div class>
              <img src="../assets/langImages/nginx.jpg" alt />
            </div>
            <div>
              <img class="mr-3" src="../assets/langImages/vscode.jpg" alt />
              <img src="../assets/langImages/git.jpg" alt />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header-img {
  width: 100%;
  height: 600px;
  background: url("../assets/kobe.jpg") no-repeat center center/cover;
  position: relative;
  .dialog-black {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.4);
  }
  .introduce {
    width: 90%;
    height: 70%;
    margin: 0 auto;
    max-width: 1800px;
  }
  .icon {
    .iconfont {
      font-size: 30px;
      border: 1px solid #fff;
      padding: 5px;
      border-radius: 50%;
    }
    .icon-github {
      &:hover {
        background: linear-gradient(to right, #4ebbaa, #6bc30d);
        border-color: #6bc30d;
      }
    }
    .icon-zhihu {
      &:hover {
        background: linear-gradient(to right, #0550bf, #0283ff);
        border-color: #0283ff;
      }
    }
    .icon-weibo {
      &:hover {
        background: linear-gradient(to right, #e6162e, #fe5835);
        border-color: #fe5835;
      }
    }
  }
}
.language-left,
.language-right {
  & > div {
    // background-color: #fff;
    margin: 20px 0px;
    // padding: 15px;
    // border: 2px solid #ffb929;
    img {
      height: 100px;
    }
  }
  .title {
    font-size: 18px;
    height: 104px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
}
.language-left {
  padding-right: 50px;
  & > div {
    position: relative;
    &:after {
      content: "";
      position: absolute;
      right: -61px;
      top: 42px;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background-color: #8600ff;
      border: 4px solid #ffb929;
    }
  }
}
.language-right {
  flex: 1.5;
  padding-left: 50px;
}
@media screen and (max-width: 768px) {
  .fs-8xl {
    font-size: 20px;
  }
  .language-left,
  .language-right {
    & > div {
      margin: 10px 0px;
      img {
        height: 60px;
      }
    }
    .title {
      height: 64px;
    }
  }
  .language-right {
    flex: 3;
    padding-left: 20px;
  }
  .language-left {
    padding-right: 20px;
    & > div {
      position: relative;
      &:after {
        content: "";
        position: absolute;
        right: -31px;
        top: 22px;
      }
    }
  }
}
</style>