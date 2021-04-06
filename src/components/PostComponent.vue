<template>
  <router-link :to="{name:'post',params:{id:postId}}">
    <img v-bind:src="imageUrl">
  </router-link>
</template>

<script lang="ts">
export default {
  name: "PostComponent",
  props: {
    postId: Number,
    imageUrl:String
  }
}
</script>

<style scoped>

</style>
