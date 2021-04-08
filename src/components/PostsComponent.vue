<template>
  <div>
    <PostComponent v-bind:key="post.id" v-for="post in posts" v-bind:post-id="post.id()" v-bind:image-url="post.imageUrl()">
    </PostComponent>
  </div>
</template>

<script lang="ts">
import Post from "../classes/post";
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
