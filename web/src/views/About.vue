<template>
  <div class="about bg-light-1 fs-3xl">
    <!-- <div class="header-img d-flex ai-start jc-center">
      <div class="top-box text-center">
        <div class="mamba-box col-white">
          <i class="iconfont icon-M mx-2"></i>
          <strong>amba</strong>
        </div>
        <h3 class="m-2">我是曼巴</h3>
        <p class="fs-3xl">89年老腊肉，web前端工程师</p>
        <el-button type="primary" size="small">
          <router-link to="/">回到首页</router-link>
        </el-button>
      </div>
      <div class="ground-box">
        <div class="ball-box">
          <div class="ball-border"></div>
        </div>
      </div>
    </div>
    <div class="d-flex bg-white flex-wrap js-around">
      <div class="flex-1 px-5 py-4 video-box">
        <h2 class="mamba-text text-center">What Can I Say? MamBa Out!</h2>
        <video
          width="100%"
          controls
          autoplay
          loop
          src="http://coco727.oss-cn-hongkong.aliyuncs.com/2c485b722a105a0181868e289faaf9c6.mp4"
        ></video>
        <div class="video-p">
          <p>2009年09月~2013年06月就读于湖北工程学院-物理与电子信息学院-光信息科学与技术</p>
          <p>2013年06月大学毕业后，参军入伍，拿起钢枪，保卫祖国，并与2017年12月满服役期退役</p>
          <p>2018年年后入坑前端，在家自学，一段暗淡而又让人向往的日子</p>
          <p>然后在武汉工作，从此一入前端深似海</p>
        </div>
      </div>
      <div class="d-flex">
        <div class="roll-up">
          <div class="carousel-border">
            <div v-for="(item,i) in carouselList" :key="i" class="carousel">
              <img :src="item.imgUrl" alt="jpg" width="300" class="roll-img" />
            </div>
          </div>
        </div>
        <div class="roll-up-p flex-1">
          <p>2009年09月~2013年06月就读于湖北工程学院-物理与电子信息学院-光信息科学与技术</p>
          <p>2013年06月大学毕业后，参军入伍，拿起钢枪，保卫祖国，并与2017年12月满服役期退役</p>
          <p>2018年年后入坑前端，在家自学，一段暗淡而又让人向往的日子</p>
          <p>然后在武汉工作，从此一入前端深似海</p>
        </div>
      </div>
    </div>-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      carouseIndex: 0,
      carouselList: [
        {
          imgUrl: require("../assets/school.jpg"),
          text:
            "200909～201306，就读于湖北工程学院-物理与电子信息工程学院-光信息科学与技术.（图为学校图书馆）"
        },
        {
          imgUrl: require("../assets/about1.jpg"),
          text:
            "201306毕业后，参军入伍，拿起钢枪，保卫国家，并于201712满服役期退伍."
        },
        {
          imgUrl: require("../assets/about2.jpg"),
          text: "退伍后，2018年初入坑前端，在家自学."
        },
        {
          imgUrl: require("../assets/about3.jpg"),
          text: "然后在武汉工作，从此一入前端深是海."
        },
        {
          imgUrl: require("../assets/school.jpg"),
          text:
            "200909～201306，就读于湖北工程学院-物理与电子信息工程学院-光信息科学与技术.（图为学校图书馆）"
        },
        {
          imgUrl: require("../assets/about1.jpg"),
          text:
            "201306毕业后，参军入伍，拿起钢枪，保卫国家，并于201712满服役期退伍."
        },
        {
          imgUrl: require("../assets/about2.jpg"),
          text: "退伍后，2018年初入坑前端，在家自学."
        },
        {
          imgUrl: require("../assets/about3.jpg"),
          text: "然后在武汉工作，从此一入前端深是海."
        }
      ]
    };
  },
  methods: {
    changeIndex(i) {
      console.log(i);
      this.carouseIndex = i;
    }
  }
};
</script>

<style lang="scss" scoped>
// .header-img {
//   height: 150px;
//   width: 100%;
//   background: linear-gradient(135deg, #ffb929, #8600ff);
//   border-bottom: 4px solid #8600ff;
//   position: relative;
//   // top: 100px;
//   .ground-box {
//     position: absolute;
//     left: 0px;
//     bottom: 0px;
//     animation: rollRight 10s linear infinite;
//     // transition: all .28s ease-in 10s;
//     .ball-box {
//       animation: turn 2s linear infinite;
//       // transition: all .28s ease-in 10s;
//       width: 100px;
//       height: 100px;
//       margin: 0 auto;
//       background-color: orange;
//       border: 2px solid #000;
//       border-radius: 50%;
//       position: relative;
//       overflow: hidden;
//       transform: rotate(20deg);
//       &:before {
//         content: "";
//         position: absolute;
//         top: -5px;
//         left: -160px;
//         width: 200px;
//         height: 100px;
//         border: 2px solid #000;
//         border-radius: 50%;
//       }
//       &:after {
//         content: "";
//         position: absolute;
//         top: -15px;
//         left: 67px;
//         width: 200px;
//         height: 100px;
//         border: 2px solid #000;
//         border-radius: 50%;
//         transform: rotate(-5deg);
//       }
//     }
//     .ball-border {
//       position: absolute;
//       top: 40px;
//       left: -50px;
//       width: 200px;
//       height: 100px;
//       border: 2px solid #000;
//       border-radius: 50%;
//       &:before {
//         content: "";
//         position: absolute;
//         top: -100px;
//         left: 3px;
//         width: 100px;
//         height: 200px;
//         border: 2px solid #000;
//         border-radius: 50%;
//       }
//     }
//   }
// }
// .top-box {
//   z-index: 1000;
//   animation: dropdown 1s linear 1;
//   animation-fill-mode: both;
//   .mamba-box {
//     .icon-M {
//       font-size: 40px !important;
//     }
//     .manba {
//       padding: 7px 3px 0;
//     }
//   }
// }
// .roll-up {
//   height: 800px;
//   overflow: hidden;
// }
// .carousel-border {
//   animation: rollUp 10s linear infinite;
//   border-left: 30px solid transparent;
//   border-right: 30px solid transparent;
//   border-image: url("../assets/border.jpg") 0 100 round;
//   .carousel {
//     font-size: 0;
//     .roll-img {
//       border-top: 15px solid #000;
//     }
//   }
// }
// .video-box {
//   min-width: 600px;
//   max-width: 1200px;
// }
// .video-p {
//   font-size: 16px;
//   padding: 50px 10px;
//   text-align: center;
//   p {
//     // text-align: center;
//   }
// }
// .roll-up-p {
//   padding: 10px;
//   display: none;
// }

// @media screen and (max-width: 1066px) {
//   .roll-up {
//     margin-left: 30px;
//   }
//   .video-p {
//     display: none;
//   }
//   .roll-up-p {
//     display: inline-block;
//   }
// }
// @media screen and (max-width: 768px) {
//   .video-box {
//     min-width: 365px;
//   }
//   .roll-up {
//     display: none;
//   }
//   .roll-up-p {
//     // display: none;
//   }
// }
// @media screen and (max-width: 500px) {
//   .fs-3xl {
//     font-size: 14px;
//   }
//   .mamba-text {
//     font-size: 20px;
//   }
//   .video-box {
//     min-width: 300px;
//   }
//   .px-5 {
//     padding-left: 10px;
//     padding-right: 10px;
//   }
// }
// @keyframes dropdown {
//   0% {
//     -webkit-transform: translatey(0);
//   }
//   100% {
//     -webkit-transform: translatey(50px);
//   }
// }
// @keyframes turn {
//   from {
//     -webkit-transform: rotate(0deg);
//   }
//   to {
//     -webkit-transform: rotate(360deg);
//   }
// }
// @keyframes rollRight {
//   from {
//     -webkit-transform: translate(0);
//   }
//   to {
//     -webkit-transform: translate(100vw);
//   }
// }
// @keyframes rollUp {
//   from {
//     -webkit-transform: translatey(0);
//   }
//   to {
//     -webkit-transform: translatey(-1046.345px);
//   }
// }
</style>
