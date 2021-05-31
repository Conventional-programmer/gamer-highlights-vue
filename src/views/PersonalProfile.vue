<template>
  <div>
    <p>{{sentence}}</p>
    <BaseProfile v-bind:user="user"></BaseProfile>
    <PostsComponent v-bind:posts="posts"></PostsComponent>
  </div>
</template>

<script lang="ts">
import User from "../class/user";
import Post from "../class/post";
import BaseProfile from "../components/BaseProfile.vue";
import PostsComponent from "../components/PostsComponent.vue";
import UserService from "@/service/user-service";
import PostService from "@/service/post-service";
import SentenceService from "@/service/sentence-service"
import {defineComponent} from "vue";

export default defineComponent({
  name: "PersonalProfile",
  components: {BaseProfile, PostsComponent},
  data(): {
      user: User;
      posts: Post[];
      sentence: string;
  }
  {
    return {
      user: {} as User,
      posts: [],
      sentence: ''
    }
  },
  mounted() {
    SentenceService.getRandomSentence().then((sentence) => {
      this.sentence = sentence;
    })
    UserService.getById(this.$store.state.authentication.user.id!).then(user => {
      this.user = user;
    })
    PostService.getAllByUserId(this.$store.state.authentication.user.id!).then(posts => {
      this.posts = posts;
    })

  }
})
</script>

<style scoped>

</style>
