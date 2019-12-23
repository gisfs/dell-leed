<template>
  <!-- <router-link to="/detail" class="home">detail</router-link>  
    <el-button @click="handleClick">AAA</el-button>
  -->

  <el-container style="height: 100%">
    <el-aside width="200px">
      <common-aside></common-aside>
    </el-aside>
    <el-container>
      <el-header height="60px">
        <common-header :city="city"></common-header>
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import CommonHeader from "@/pages/common/CommonHeader";
import CommonAside from "@/pages/common/CommonAside";
import axios from "axios";

export default {
  name: "MainContent",
  components: {
    CommonHeader,
    CommonAside
  },
  data() {
    return {
      city: ""
    };
  },
  methods: {
    handleClick() {
      console.log("element test");
    },
    getHomeInfo() {
      axios.get("/api/index.json").then(this.getHomeInfoSucc);
    },
    getHomeInfoSucc(res) {
      res = res.data;
      if (res.ret && res.data) {
        const data = res.data;
        this.city = data.city;
      }

      console.log(res);
    }
  },
  mounted() {
    this.getHomeInfo();
  }
};
</script>


<style  lang="scss" scoped>
header.el-header {
  padding: 0;
}
</style>




