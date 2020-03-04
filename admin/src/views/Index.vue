<template>
  <div>
    <el-container style="height: 100vh;">
      <el-aside style="width: 200px; background-color: rgb(238, 241, 246)">
        <el-menu router unique-opened :default-active="$route.path">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-message"></i>内容管理
            </template>
            <el-menu-item-group>
              <template slot="title">博文管理</template>
              <el-menu-item index="/blogs/editor/new">新建博文</el-menu-item>
              <el-menu-item index="/blogs/list">博文列表</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <template slot="title">博文评论</template>
              <el-menu-item index="/comments/editor">回复评论</el-menu-item>
              <el-menu-item index="/comments/list">评论列表</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <template slot="title">留言</template>
              <el-menu-item index="/messages/editor">新建留言</el-menu-item>
              <el-menu-item index="/messages/list">留言列表</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <template slot="title">留言和评论用户</template>
              <el-menu-item index="/users/editor">编辑用户</el-menu-item>
              <el-menu-item index="/users/list">留言和评论用户列表</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <template slot="title">web圈</template>
              <el-menu-item index="/friends/editor">新建web圈</el-menu-item>
              <el-menu-item index="/friends/list">web圈列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-message"></i>系统管理
            </template>
            <el-menu-item-group>
              <template slot="title">登陆管理</template>
              <el-menu-item index="/users/editor">新建用户</el-menu-item>
              <el-menu-item index="/users/list">用户列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <el-dropdown @command="handleCommand">
            <i class="el-icon-setting" style="margin-right: 15px; line-height:60px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item :command="`/users/create/${userInfo._id}`">查看</el-dropdown-item>
              <el-dropdown-item command="/login">注销</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>Hello {{userInfo.username}} ！</span>
        </el-header>
        <el-main>
          <router-view :key="$route.path"></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    const item = {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄"
    };
    return {
      tableData: Array(20).fill(item),
      userInfo: {}
    };
  },
  created() {
    if (localStorage.userInfo) {
      this.userInfo = JSON.parse(localStorage.userInfo);
    }
  },
  methods: {
    handleCommand(command) {
      console.log("loginOut");
      if (command == "/login") {
        localStorage.clear();
      }
      this.$router.push(command);
    }
  }
};
</script>

<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>