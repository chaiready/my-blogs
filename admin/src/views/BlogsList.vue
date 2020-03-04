<template>
  <div>
    <div class="top-box">
        <strong>标题：</strong>
        <el-input class="search-input" placeholder="请输入博文标题" v-model="title">
          <!-- <template slot="append"><el-button type="primary">搜索</el-button></template> -->
        </el-input>
        <el-button type="primary">搜索</el-button>
        <el-button class="fr" type="primary" @click="$router.push('/blogs/editor/new')">写博客</el-button>
    </div>
    <el-table :data="tableData" border>
      <el-table-column type="index" label="序号" width="50"></el-table-column>
      <el-table-column prop="_id" label="id"></el-table-column>
      <el-table-column prop="title" label="标题"></el-table-column>
      <el-table-column label="操作" width="90">
        <template slot-scope="scope">
          <el-button
            type="text"
            size="small"
            @click="$router.push(`/blogs/editor/${scope.row._id}`)"
          >编辑</el-button>
          <el-button type="text" size="small" @click="deleteHandle(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [],
      title: ""
    };
  },
  created() {
    this.getList();
  },
  methods: {
    async getList() {
      let res = await this.$axios.get("/blogs");
      this.tableData = res.data;
    },
    deleteHandle(data) {
      this.$confirm(`是否确定要删除 《${data.title}》 ?`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(async () => {
          await this.$axios.delete(`/blogs/${data._id}`);
          this.getList();
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.top-box {
  margin-bottom: 30px;
  .search-input {
    width: 300px;
  }
}
</style>