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
import PostService from "@/service/post-service";
import UserService from "@/service/user-service"
import {defineComponent} from "vue";
export default defineComponent({
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
  },
  mounted() {
    UserService.getById(Number(this.$route.params.name!)).then(user => {
      this.user = user;
    })
    PostService.getAllByUserId(Number(this.$route.params.name!)).then(posts => {
        this.posts = posts;
    })
  }
})
</script>

<style scoped>

</style>
