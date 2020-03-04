<template>
  <div class="fromInput">
    <el-form :model="userForm" :rules="userRules" ref="userForm">
      <el-form-item prop="nickName">
        <el-input size="medium" v-model="userForm.nickName" placeholder="网站名称"></el-input>
      </el-form-item>
      <el-form-item prop="email">
        <el-input size="medium" v-model="userForm.email" placeholder="电子邮箱(@xx.com)"></el-input>
      </el-form-item>
      <el-form-item prop="url">
        <el-input size="medium" v-model="userForm.url" placeholder="博客/github地址(开头http://或https://)"></el-input>
      </el-form-item>
      <el-form-item prop="description" v-if="isUpload">
        <el-input size="medium" type="textarea" v-model="userForm.description" placeholder="个人描述"></el-input>
      </el-form-item>
      <el-form-item size="medium" prop="avatarImg" v-if="isUpload">
        <el-upload
          class="avatar-uploader"
          :action="$axios.defaults.baseURL+'/upload'"
          :show-file-list="false"
          :on-success="res => $set(userForm, 'avatarImg', res.url)"
        >
          <img v-if="userForm.avatarImg" :src="userForm.avatarImg" class="logo-img" alt="缩略图" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
        <!-- <span>* 图标：站点logo, 100px*100px最佳</span> -->
      </el-form-item>
      <!-- <el-form-item prop="isRead" v-if="isUpload">
        <el-checkbox size="medium" v-model="userForm.isRead">
          <span :class="userForm.isRead ? 'isRead' : 'read-text'" @click="readInfo">已阅读详细填写要求</span>
        </el-checkbox>
      </el-form-item> -->
    </el-form>
    <el-button type="primary" class="width-100" @click="saveForm('userForm')">提交</el-button>
  </div>
</template>

<script>
export default {
  props: {
    isUpload: Boolean
  },
  data() {
    return {
      userForm: {
        nickName: "",
        email: "",
        url: "",
        description: "",
        avatarImg: "",
        isRead: false
      },
      userRules: {
        nickName: { required: true, message: "必填", trigger: "change" },
        email: { required: true, message: "必填", trigger: "change" },
        url: { required: true, message: "必填", trigger: "change" },
        description: { required: true, message: "必填", trigger: "change" },
        avatarImg: { required: true, message: "必填", trigger: "change" },
        isRead: { required: false, message: "必填", trigger: "change" }
      }
    };
  },
  methods: {
    saveForm(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          this.$emit("toRequest", this.userForm);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    readInfo() {
      // console.log(this.$parent)
      // this.$parent.turnAnima = true
      // console.log(this.$parent.turnAnima) 
    }
  }
};
</script>

<style lang="scss">
.read-text {
  border-bottom: 1px solid #000;
  &:hover {
    border-color: #8600ff;
    color: #8600ff;
  }
}
.isRead {
  border-bottom: 1px solid #ffb929;
}
.avatar-uploader {
  height: 62px;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9 !important;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff !important;
}
.avatar-uploader-icon {
  font-size: 24px;
  color: #8c939d;
  width: 60px;
  height: 60px;
  line-height: 60px !important;
  text-align: center;
}
.logo-img {
  width: 60px;
  height: 60px;
  display: block;
}
.el-form-item {
  margin-bottom: 18px !important;
}
</style>