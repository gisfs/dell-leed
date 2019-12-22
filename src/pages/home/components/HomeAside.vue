<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <div v-for="item in asideMenu" :key="item.path">
      <div v-if="!item.child">
        <el-menu-item :index="item.path">
          <i :class="item.icon"></i>
          <span slot="title">{{item.name}}</span>
        </el-menu-item>
      </div>
      <div v-else>
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>{{item.name}}</span>
          </template>
          <el-menu-item
            :index="subItem.path"
            v-for="subItem in item.child"
            :key="subItem.path"
          >{{subItem.name}}</el-menu-item>
        </el-submenu>
      </div>
    </div>
  </el-menu>
</template>

<script>
export default {
  name: "HomeAside",
  data() {
    return {
      asideMenu: [
        {
          name: "导航一",
          icon: "el-icon-menu",
          child: [
            {
              path: "/subPath1",
              name: "选项1",
              icon: "el-icon-menu"
            },
            {
              path: "/subPath2",
              name: "选项2",
              icon: "el-icon-menu"
            }
          ]
        },
        {
          path: "/path2",
          name: "导航二",
          icon: "el-icon-menu"
        },
        {
          path: "/path3",
          name: "导航三",
          icon: "el-icon-menu"
        },
        {
          path: "/path4",
          name: "导航四",
          icon: "el-icon-menu"
        }
      ]
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  computed: {
    hasChild: function() {
      return this.asideMenu.filter(item => item.child);
    },
    noChild() {
      return this.asideMenu.filter(item => !item.child);
    }
  }
};
</script>

<style lang='scss' scoped>
.el-menu {
  height: 100%;
}
</style>