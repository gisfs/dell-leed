<template>
  <div class="content">
    <div class="l-content">
      <el-button type="primary" icon="el-icon-menu" size="mini"></el-button>
      <div class="select">{{this.$store.state.menu}}</div>
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

<script>
export default {
  name: "CommonHeader",
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
  justify-content: space-between;
  background-color: #ffffff;
  .l-content {
    display: flex;
    width: 150px;
    align-items: center;
    .select{
      margin-left:20px;
    }
  }
  .r-content {
    .userImage {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }
}
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}


.bread {
  margin-left: 100px;
}
</style>
