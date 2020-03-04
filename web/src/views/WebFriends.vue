<template>
  <div>
    <div class="header-img"></div>
    <div class="bg-light-1 py-4">
      <div class="text-center">
        <el-button type="primary" @click="dialogVisible = true">+ 申请加入</el-button>
      </div>
      <container-body :isGrey="true">
        <div class="d-flex jc-around flex-wrap card-box">
          <el-card
            class="box-card"
            shadow="hover"
            @click="open(item)"
            v-for="(item, i) in cardList"
            :key="i"
          >
            <div slot="header" class="title" @click="open(item)">
              <img :src="item.avatarImg" alt="logo" height="40" />
              <span class="pl-3 fs-3xl">{{item.nickName}}</span>
            </div>
            <p class="pl-3 fs-2xl">{{item.description}}</p>
          </el-card>
        </div>
      </container-body>
    </div>
    <el-dialog  title="欢迎加入" :visible.sync="dialogVisible" width="320px" center>
      <div :class="{'turnAnima' : false}">
        <form-input @toRequest="submit" :isUpload="true"></form-input>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      turnAnima: false,
      dialogVisible: false,
      cardList: []
    };
  },
  created() {
    this.getCardsList();
  },
  methods: {
    async getCardsList() {
      let res = await this.$axios.get("/friends");
      this.cardList = res.data;
    },
    async submit(form) {
      let res = await this.$axios.post("/friends", form);
      this.dialogVisible = false;
      this.getCardsList();
      console.log(res);
    },
    open(item) {
      console.log(item.url);
      window.open(item.url);
    }
  }
};
</script>

<style  lang="scss" scoped>
.header-img {
  width: 100%;
  height: 300px;
  background: url("../assets/headerImages/kobe6.jpg") no-repeat center
    center/cover;
}
.card-box{
  // margin-right: -41px;
}
.box-card {
  cursor: pointer;
  width: 25%;
  // margin-right: 20px;
  margin-bottom: 20px;
  .title {
  }
}
.turnAnima{
  animation: turn 2s linear 1;
}
@keyframes turn {
  from {
    -webkit-transform: skewX(0deg);
  }
  to {
    -webkit-transform: skewX(180deg);
  }
}
@media screen and (max-width: 1024px) {
  .box-card {
    width: 32%;
  }
}
@media screen and (max-width: 768px) {
  .box-card {
    width: 48%;
  }
}
@media screen and (max-width: 500px) {
  .box-card {
    width: 100%;
  }
}
</style>