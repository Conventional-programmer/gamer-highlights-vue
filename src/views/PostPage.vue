<template>
  <img v-bind:src="post.imageUrl">
  <p>{{post.description}}</p>
  <div>
    <p v-bind:key="comment.id" v-for="comment in post.messages">
      {{comment.message}}
    </p>
  </div>
  <p>likes: {{post.likes}}</p>
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
