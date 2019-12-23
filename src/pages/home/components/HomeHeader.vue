<template>
  <div class="content">
    <div class="l-content">
      <el-button type="primary" icon="el-icon-menu" size="mini"></el-button>
      <div class="select">{{this.$store.state.menuSelect}}</div>
      <el-breadcrumb class="bread" separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>
          <a href="/">活动管理</a>
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="r-content">
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          <img class="userImage" :src="userImage" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>
    // <div class="l-content">lll</div>

<script>
export default {
  name: "HomeHeader",
  props: {
    city: {
      type: String,
      default: ""
    },
    age: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      userImage: require("@/assets/image/user.png")
    };
  }
};
</script>
<style lang="scss" scoped>
.content {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
}
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.select{
  margin-left:20px;
}
.l-content {
  // width: 400px;
  display: flex;
  align-items: center;
  // justify-content: space-between;
}
.r-content {
  .userImage {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
}
.bread {
  margin-left: 100px;
}
</style>
