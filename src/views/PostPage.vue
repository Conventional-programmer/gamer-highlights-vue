<template>
  <img v-bind:src="post.imageUrl">
  <p>{{post.description}}</p>
  <MessageComponent v-bind:messages="post.messages"></MessageComponent>
  <p>likes: {{post.likes}}</p>
</template>

<script lang="ts">
import Post from "@/classes/post";
import MessageComponent from "@/components/MessageComponent.vue";
export default {
  name: "PostPage",
  components: {MessageComponent},
  data(): {
    post: Post;
  }
  {
    //as user?
    return {
      post: {} as Post
    };
  },
}
</script>

<style scoped>

</style>
