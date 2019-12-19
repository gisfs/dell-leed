<template>
<div>
  <router-link to="/helloworld" class="home">helloworld</router-link>
  
  <el-button @click="handleClick">AAA</el-button>
  <home-header></home-header>
</div>

</template>

<script>
import HomeHeader from './components/HomeHeader'
import axios from 'axios'

export default {
  name:'Home',
  components:{
    HomeHeader
  },
  methods:{
    handleClick(){
       console.log('element test')
    },
    getHomeInfo(){
      
    }
  },
  mounted:{
    this.getHomeInfo()
  }
}
</script>


<style >
  .home{
    font-size: 50px
  }
</style>