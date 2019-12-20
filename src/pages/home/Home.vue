<template>
<div>
  <router-link to="/detail" class="home">detail</router-link>
  
  <el-button @click="handleClick">AAA</el-button>
  <home-header :city="city"></home-header>
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
  data(){
    return {
      city:''
    }
  },
  methods:{
    handleClick(){
       console.log('element test')
    },
    getHomeInfo(){
      //axios.get('static/mock/index.json')

       axios.get('/api/index.json')
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc(res){
      res=res.data
      if(res.ret && res.data) {
        const data=res.data
        this.city=data.city
      }

      console.log(res)
    }
  },
  mounted(){
    this.getHomeInfo()
  }
}
</script>


<style >
  .home{
    font-size: 50px
  }
</style>




