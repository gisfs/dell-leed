<template>
<div>
  <div >
    HomeHeader {{this.city}}
  </div>
</div>

</template>

<script>
export default {
  name:'HomeHeader',
  props:{
    city:String,
    age: {
      type: Number,
      default: 0
    }
  }
}
</script>


<style >

</style>

