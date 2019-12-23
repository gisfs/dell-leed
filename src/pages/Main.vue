<template>
  <!-- <router-link to="/detail" class="home">detail</router-link>  
    <el-button @click="handleClick">AAA</el-button>
  -->

  <el-container style="height: 100%">
    <el-aside width="200px">
      <home-aside></home-aside>
    </el-aside>
    <el-container>
      <el-header height="60px" >
        <home-header  :city="city"></home-header>
      </el-header>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
import HomeHeader from "@/pages/home/HomeHeader";
import HomeAside from "@/pages/home/HomeAside";
import axios from "axios";

export default {
  name: "Main",
  components: {
    HomeHeader,
    HomeAside
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
header.el-header{
  padding:0;
}
</style>




