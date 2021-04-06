<template>
  <div>
    <BaseProfile v-bind:user="user"></BaseProfile>
    <PostsComponent v-bind:posts="posts"></PostsComponent>
  </div>
</template>

<script lang="ts">
import PostsComponent from "../components/PostsComponent";
import BaseProfile from "../components/BaseProfile";
import User from "../classes/user";
import Post from "../classes/post";
export default {
  name: "Profile",
  components: {BaseProfile, PostsComponent},
  data(): {
    user: User,
    posts: Post[];
  }
  {
    return {
      user:{},
      posts: []
    }
  }
}
</script>

<style scoped>

</style>
