<template>
  <div id="app">
    <el-button @click="handleClick">AAA</el-button>
    <router-view />
  </div>
</template>

<script>

export default {
  name: "app",
  methods:{
    handleClick(){
       console.log('element test')
    }
  }
};
</script>

<style lang="scss">

</style>