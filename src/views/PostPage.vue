<template>
  <img v-bind:src="post.imageUrl">
  <div>

  </div>
</template>

<script lang="ts">
import Post from "@/classes/post";
export default {
  name: "PostPage",
  data(): {
    post: Post;
  }
  {
    //as user?
    return {
      post: {}
    };
  },
}
</script>

<style scoped>

</style>
