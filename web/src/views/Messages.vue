<template>
  <div class="bg-attachment fs-2xl">
    <div class="dialog">
      <div class="header-img d-flex ai-center">
        <div class="comment">
          <div class="bg-white px-5 pb-4 fs-2xl">
            <comment-textarea model="messages" @toResponse="getMessagesList" type="parent" placeholder='大家请坐下，陈独秀同志，要发言了。。。'>></comment-textarea>
          </div>
        </div>
      </div>
      <div class="message-box">
        <container-body :isWhite="true">
        <!-- <div class="container bg-white p-5 fs-2xl"> -->
        <comment-list model="messages" @getCommentList="getMessagesList" :commentsList="parentComments"></comment-list>
        </container-body>
        <!-- </div> -->
      </div>
    </div>

  </div>
</template>

<script>
import commentTextarea from "../components/commentTextarea";
import commentList from "../components/commentList";

export default {
  components: {
    commentTextarea,
    commentList
  },
  data() {
    return {
      parentComments: []
    };
  },
  created() {
    this.getMessagesList();
  },
  methods: {
    async getMessagesList() {
      let res = await this.$axios.get("/messages");
      let blogsComments = res.data
      this.parentComments = blogsComments.filter(v => v.parent == '5e52a80981bf76430fd982f0')
      this.parentComments.forEach( c => {
        return c.children = blogsComments.filter( v => v.parent == c._id)    
      })
      console.log(this.parentComments, blogsComments, res.data)
    }
  }
};
</script>

<style  lang="scss" scoped>
.header-img {
  width: 100%;
  height: 450px;
  // background: url("../assets/messages.jpg") no-repeat center center/cover;
}
.comment{
    width: 100%;
    max-width: 740px;
    margin: auto;
}
.bg-attachment{
  font-size: 16px;
  background: url("../assets/headerImages/kobe8.jpg") no-repeat center center/cover;
  background-attachment: fixed;
}
.message-box{
  // height: 500px;
  padding-bottom: 100px
}
.dialog{
  position: relative;
  background-color: rgba(21, 21, 21, 0.5)
}

</style>
<style>
 .emoji-picker-icon{
  top: 95px;
} 
</style>