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
        <el-menu-item :index="item.path" @click="clickMenu(item)">
          <i :class="item.icon"></i>
          <span slot="title">{{item.name}}</span>
        </el-menu-item>
      </div>
      <div v-else>
        <el-submenu index="folder">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>{{item.name}}</span>
          </template>
          <el-menu-item
            @click="clickMenu(subItem)"
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
  name: "CommonAside",
  data() {
    return {
      asideMenu: [
        {
          path: "/",
          name: "首页",
          icon: "el-icon-menu"
        },
        {
          name: "导航二",
          icon: "el-icon-menu",
          child: [
            {
              path: "/temp",
              name: "temp",
              icon: "el-icon-menu"
            },
            {
              path: "/temp1",
              name: "temp1",
              icon: "el-icon-menu"
            }
          ]
        },
        {
          path: "/usermanage",
          name: "用户管理",
          icon: "el-icon-menu"
        },
        {
          path: "/detail",
          name: "详细",
          icon: "el-icon-menu"
        }
      ]
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      // console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
    },
    clickMenu(item) {
      this.$store.commit("changeMenu", item.name);
      console.log(item.path,item.name)
      this.$router.push(item.path)

      // this.$store.dispatch('changeMenu',name)//异步
      // this.$store.commit("changeMenu", name); //同步
      // this.$router.push(item.path)
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