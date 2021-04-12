<template>
  <div>
    <BaseProfile v-bind:user="user"></BaseProfile>
    <PostsComponent v-bind:posts="posts"></PostsComponent>
  </div>
</template>

<script lang="ts">
import User from "../class/user";
import Post from "../class/post";
import BaseProfile from "@/components/BaseProfile.vue";
import PostsComponent from "@/components/PostsComponent.vue";
export default {
  name: "Profile",
  components: {BaseProfile, PostsComponent},
  data(): {
    user: User;
    posts: Post[];
  }
  {
    return {
      user: {} as User,
      posts: []
    }
  }
}
</script>

<style scoped>

</style>
