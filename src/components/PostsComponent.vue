<template>
  <div>
    <PostComponent v-bind:key="post.id" v-bind:postId="post.id" v-bind:imageUrl="post.imageUrl" v-for="post in posts">
    </PostComponent>
  </div>
</template>

<script lang="ts">
import Post from "../class/post";
import PostComponent from "@/components/PostComponent.vue";

export default {
  name: "PostsComponent",
  components: {PostComponent},
  props: {
    posts: {
      type: Array.of(Post)
    }
  }
}
</script>

<style scoped>

</style>
