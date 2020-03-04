<template>
  <div class="bg-light-2">
    <v-loading :vLoading="vLoading">
      <div class="header-img"></div>
      <container-body :isGrey="true">
        <Stick :list="blogList" imgKey="cover" @onScrollEnd="loadMore" style="background: #efefee">
          <template slot-scope="scope">
            <div class="blogs-item">
              <router-link tag="div" class="link" :to="`/blogs/${scope.data._id}`" :title="scope.data.title">
                <img :src="scope.data.imgUrl" alt="图片" />
                <h3 class="fs-4xl fw-4 pt-5 pb-1 px-5 text-center">{{scope.data.title}}</h3>
                <p
                  class="p-content fs-2xl px-4 pb-3 m-0 col-grey-4 text-indent"
                >{{scope.data.description}}</p>
              </router-link>
              <footer class="p-3 d-flex jc-between ai-center col-grey-1 fs-3xl">
                <div>{{scope.data.createdAt | formatDate}}</div>
                <div>
                  <!-- <i @click="addLikes(scope.data)" class="iconfont icon-dianzan mr-3"> {{scope.data.likes}}</i> -->
                  <i class="iconfont icon-yanjing mr-3"> {{scope.data.views}}</i>
                  <i class="iconfont icon-message"> {{scope.data.msgs}}</i>
                </div>
              </footer>
            </div>
          </template>
        </Stick>
      </container-body>
    </v-loading>
  </div>
</template>

<script>
import dayjs from "dayjs";

export default {
  data() {
    return {
      vLoading: true,
      blogList: [],
      pageNum: 1,
      pageSize: 1,
      total: 0,
      moreLoading: false
    };
  },
  created() {
    this.getBlogslist()
  },
  mounted() { 
  },
  filters: {
    formatDate(val) {
      return dayjs(val).format("YYYY-MM-DD");
    }
  },
  methods: {
    async getBlogslist() {
      this.moreLoading = true;
      let res = await this.$axios.get(`/blogs/${this.pageNum}/${this.pageSize}`)
      console.log(res);
      this.blogList = this.blogList.concat(res.data.rows);
      this.total = res.data.total;
      this.moreLoading = false;
      this.vLoading = false
    },
    loadMore() {
      // 避免重复加载，上一个getBlogslist请求完毕，再loadMore
      if (this.moreLoading) {
        return;
      }
      // 没有更多数据加载了,
      if (this.pageNum * this.pageSize >= this.total) {
        return;
      }
      this.pageNum += 1;
      this.getBlogslist();
    },

    async addLikes(item) {
      let res = await this.$axios.put(`/blogs/likes/${item._id}`, {
        likes: item.likes + 1
      });
      console.log(res);
    }
  }
};
</script>

<style lang="scss" scoped>
.blogs-item {
  margin-bottom: 10px;
  overflow: hidden;
  background: #fff;
  transition: box-shadow 0.3s ease-out;
  transition-delay: 0.1s;
  .link{
    cursor: pointer;
  }
  img {
    display: block;
    background: #eee;
    max-width: 100%;
    margin: auto;
  }
}
.p-content {
  line-height: 1.4;
}
.header-img {
  width: 100%;
  height: 300px;
  background: url("../assets/headerImages/kobe1.jpg") no-repeat center center/cover;
}
</style>