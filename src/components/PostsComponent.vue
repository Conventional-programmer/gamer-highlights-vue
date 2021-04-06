<template>
  <div>
    <PostComponent v-for="post in posts" v-bind:post-id="post.id()" v-bind:image-url="post.imageUrl()">
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
    posts: Post[];
  }
}
</script>

<style scoped>

</style>
