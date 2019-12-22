<template>
  <div class="content">
    <div class="l-content">
      <el-button type="primary" icon="el-icon-menu" size="mini"></el-button>
    </div>

    <div class="r-content">
      <el-dropdown trigger="click">
        <span class="el-dropdown-link"><img :src="userImg"/>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
          <el-dropdown-item icon="el-icon-circle-plus">狮子头</el-dropdown-item>
          <el-dropdown-item icon="el-icon-circle-plus-outline">螺蛳粉</el-dropdown-item>
          <el-dropdown-item icon="el-icon-check">双皮奶</el-dropdown-item>
          <el-dropdown-item icon="el-icon-circle-check">蚵仔煎</el-dropdown-item>
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
      userImg: require('@/assets/images/user.png')
    }
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
</style>
