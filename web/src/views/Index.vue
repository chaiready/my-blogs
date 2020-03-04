<template>
  <div class="index">
    <header class="header-box" :class="{'mini': isScrolling}">
      <div class="d-flex container">
        <div class="bg-linear mamba-box d-flex ai-center" @click="$router.push('/')">
          <i class="iconfont icon-M col-white"></i>
          <div class="manba col-white fs-4xl">
            <strong>amba</strong>
          </div>
        </div>
        <div class="flex-1 d-flex jc-end ai-center bg-purple-light">
          <el-dropdown trigger="click" @visible-change="v => isShowMenu = v">
            <button
              class="menu-button"
              @click="isShowMenu = !isShowMenu"
              :class="{'isShowMenu': isShowMenu}"
            >
              <i></i>
              <i></i>
              <i></i>
            </button>

            <!-- <span class="el-dropdown-link">
              下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
            </span>-->
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>
                <router-link tag="div" to="/">首页</router-link>
              </el-dropdown-item>
              <el-dropdown-item divided>
                <router-link tag="div" to="/blogs">博文</router-link>
              </el-dropdown-item>
              <!-- <el-dropdown-item><router-link to="/thoughts">首页</router-link>生活随感</el-dropdown-item> -->
              <el-dropdown-item divided>
                <router-link tag="div" to="/messages">留言</router-link>
              </el-dropdown-item>
              <el-dropdown-item divided>
                <router-link tag="div" to="/webFriends">web圈</router-link>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <el-menu
            router
            :default-active="$route.path"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#8600ff"
            text-color="#fff"
            active-text-color="orange"
          >
            <el-menu-item index="/">首页</el-menu-item>
            <el-menu-item index="/blogs">博文</el-menu-item>
            <!-- <el-menu-item index="/thoughts">生活随感</el-menu-item> -->
            <el-menu-item index="/messages">留言</el-menu-item>
            <el-menu-item index="/webFriends">web圈</el-menu-item>
          </el-menu>
        </div>
      </div>
    </header>
    <router-view></router-view>
    <footer class="footer-box">
      <div class="footer-info py-4">
        <div class="d-flex container fs-2xl jc-between flex-wrap px-4">
          <div class="d-flex flex-column jc-between">
            <div class="herf">
              <a href="/aboutMe" class="pr-3">关于我</a>
              <a href="/aboutBlogs" class="pr-3">关于博客</a>
              <!-- <a class="pr-3">博客代码</a> -->
            </div>
            <div class="icon my-2">
              <i class="iconfont icon-github mr-4"></i>
              <i class="iconfont icon-zhihu mr-4"></i>
              <i class="iconfont icon-weibo"></i>
            </div>
          </div>
          <div class="footer-mamba col-white">
              <p class="mb-1">Manba is not out,</p>
              <p class="mb-2 text-indent">I'm here all the time!</p>
            <div class="mamba-box d-flex ai-end jc-end">
              <i class="pb-2">——</i>
              <i class="iconfont icon-M col-white mx-2"></i>
              <strong>amba</strong>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-ICP herf text-center py-4 fs-2xl">
        <a
          href="http://www.beian.miit.gov.cn/"
          target="_blank"
        >@2020 Design and Code by Mamba. 京ICP备20002324号</a>
      </div>
    </footer>
    <transition name="slide-show">
      <div class="ground-box" v-show="ballShow" @click="goTop" :class="{'fei': isTop}">
        <div class="ball-box">
          <div class="ball-border"></div>
        </div>
      </div>
      </transition>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: "Home",
  components: {},
  data() {
    return {
      isShowMenu: false,
      isScrolling: false,
      isTop: false,
      ballShow: false
    };
  },
  mounted() {
    this.ajustNavigation();
    window.addEventListener("scroll", this.scrollListener);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.scrollListener);
  },
  methods: {
    scrollListener() {
      this.ajustNavigation();
    },
    ajustNavigation() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;
      this.isScrolling = scrollTop > 50;
      this.ballShow = scrollTop >= 500
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    goTop () {
      $('html,body').animate({ scrollTop: 0 }, 1000)
      this.isTop = true
    },
  }
};
</script>
<style lang="scss" scoped>
.header-box {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  padding-top: 20px;
  z-index: 2000;
  transition: 0.6s ease-in-out;
  .mamba-box {
    cursor: pointer;
    height: 60px;
    padding: 0 20px 0 20px;
    .icon-M {
      font-size: 40px;
    }
    .manba {
      padding: 24px 5px 0;
    }
  }
}
.mini {
  background: linear-gradient(to right, #ffb929 5%, #8600ff 40%);
  padding-top: 0px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.7);
}
.menu-button {
  background-color: #8600ff;
  padding: 5px 0;
  border: none;
  i {
    display: block;
    width: 24px;
    height: 3px;
    background-color: #fff;
    margin: 5px auto;
    transition: 0.2s ease-in-out;
  }
}
.isShowMenu {
  i {
    &:nth-child(2) {
      opacity: 0;
    }
    &:nth-child(1) {
      transform: translateY(8px) rotate(-45deg);
    }
    &:nth-child(3) {
      transform: translateY(-8px) rotate(45deg);
    }
  }
}
.el-menu.el-menu--horizontal {
  border: none;
}
.el-menu-demo {
  font-size: 16px;
}
.menu-button {
  display: none;
  margin-right: 20px;
}
.logo-coco {
  height: 60px;
  padding: 35px 20px 5px 70px;

  // background: url("../assets/coco.png") no-repeat 20px center/45px 50px;
  // background: linear-gradient(to right, #4ebbaa, #6bc30d);
}
.footer-coco {
  height: 60px;
  line-height: 60px;
  padding: 0px 0px 0px 45px;
  background: url("../assets/coco.png") no-repeat 0px center/45px 50px;
}
.icon {
  display: inline;
  .iconfont {
    cursor: pointer;
    font-size: 20px;
    border: 1px solid #000;
    color: #000;
    padding: 5px;
    border-radius: 50%;
  }
  .icon-github {
    &:hover {
      background: linear-gradient(to right, #4ebbaa, #6bc30d);
      border-color: #6bc30d;
      color: #fff;
    }
  }
  .icon-zhihu {
    &:hover {
      background: linear-gradient(to right, #0550bf, #0283ff);
      border-color: #0283ff;
      color: #fff;
    }
  }
  .icon-weibo {
    &:hover {
      background: linear-gradient(to right, #e6162e, #fe5835);
      border-color: #fe5835;
      color: #fff;
    }
  }
}
.footer-box {
  background: linear-gradient(to right, #8600ff 5%, #ffb929 100%);
  .footer-info {
    .mamba-box {
      .icon-M {
        font-size: 24px;
      }
      .manba {
        padding: 7px 3px 0;
      }
    }
  }
  .footer-ICP {
    border-top: 1px solid #fff;
  }
  .herf {
    a:hover {
      color: #fff;
      text-decoration: underline;
    }
  }
}
@media screen and (max-width: 768px) {
  .header-box {
    padding-top: 0;
  }
  .el-menu-demo {
    display: none;
  }
  .menu-button {
    display: block;
  }
}
@media screen and (max-width: 375px) {
  .footer-mamba{
    .text-indent{
      text-indent: 0em;
    }
  }

}
.fei{
    animation: fei 3s linear infinite;
}
.ground-box {
    position: fixed;
    right: 20px;
    bottom: 160px;
    animation: turn 3s linear infinite;
    // transition: all .28s ease-in 10s;
    .ball-box {
      animation: turn 2s linear infinite;
      // transition: all .28s ease-in 10s;
      width: 50px;
      height: 50px;
      margin: 0 auto;
      background-color: orange;
      border: 2px solid #000;
      border-radius: 50%;
      position: relative;
      overflow: hidden;
      transform: rotate(20deg);
      &:before {
        content: "";
        position: absolute;
        top: -5px;
        left: -81px;
        width: 100px;
        height: 50px;
        border: 2px solid #000;
        border-radius: 50%;
      }
      &:after {
        content: "";
        position: absolute;
        top: -7.5px;
        left: 34px;
        width: 100px;
        height: 50px;
        border: 2px solid #000;
        border-radius: 50%;
        transform: rotate(-5deg);
      }
    }
    .ball-border {
      position: absolute;
      top: 20px;
      left: -25px;
      width: 100px;
      height: 50px;
      border: 2px solid #000;
      border-radius: 50%;
      &:before {
        content: "";
        position: absolute;
        top: -50px;
        left: -1px;
        width: 50px;
        height: 100px;
        border: 2px solid #000;
        border-radius: 50%;
      }
    }
}
@keyframes turn {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
  }
}
@keyframes fei {
  from {
     .ground-box{
       bottom: 160px;
     }
  }
  to {
     .ground-box{
       top: 0px;
     }
  }
}
.slide-show-enter-active {
  transition: all .4s linear;
}

.slide-show-leave-active {
  transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-show-enter, .slide-show-leave-to{
  margin-right: -100px;
  opacity: 0;
}
</style>
<style>
.el-menu--horizontal > .el-menu-item {
  font-size: 16px;
}
.el-dropdown-menu__item {
  text-align: center;
  width: 80px;
  padding: 0 0px!important;

}
  .el-dropdown-menu__item--divided:before{
    margin: 0!important;
  }
</style>
