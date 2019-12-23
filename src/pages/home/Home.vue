<template>
  <!-- <router-link to="/detail" class="home">detail</router-link>  
    <el-button @click="handleClick">AAA</el-button>
  -->

  <el-container style="height: 100%">
    <el-aside width="200px">
      <home-aside></home-aside>
    </el-aside>
    <el-container>
      <el-header height="60px">
        <home-header  :city="city"></home-header>
      </el-header>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
import HomeHeader from "./components/HomeHeader";
import HomeAside from "./components/HomeAside";
import axios from "axios";

export default {
  name: "Home",
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


<style  lang="scss" >
.el-header,
.el-footer {
  background-color: #ffffff;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: left;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
  
</style>




