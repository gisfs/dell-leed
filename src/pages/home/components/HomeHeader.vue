<template>
  <div>
    <div>{{city}}</div>
  </div>
</template>


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
  }
};
</script>
<style lang="scss" scoped></style>;
