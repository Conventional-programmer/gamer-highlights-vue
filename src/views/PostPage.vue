<template>
  <div class="post">
    <div class="base-post">
      <img v-bind:src="post.imageUrl">
      <p class="description">{{post.description}}</p>
      <p>likes: {{post.likes.length}}</p>
    </div>
    <MessageComponent v-bind:messages="post.comments"></MessageComponent>
  </div>
</template>

<script lang="ts">
import Post from "@/class/post";
import MessageComponent from "@/components/MessageComponent.vue";
import PostService from "@/service/post-service"
import User from "@/class/user";
import {defineComponent} from 'vue'
export default defineComponent({
  name: "PostPage",
  components: {MessageComponent},
  mounted(){
    PostService.getById(Number(this.$route.params.id)).then((post) => {
      this.post = post;
    });
  },
  data(): {
    post: Post;
  }
  {
    //as user?
    return {
      post: {id : 0, postingUser :{ username: '', description:'',imageUrl:''} as User,description:'',imageUrl:'',comments:[],likes:0} as Post
    };
  },
})
</script>

<style scoped>
  .post{
    display: flex;
  }
  .base-post{
    width: 50%;

  }
  img{
    width: 100%;
  }
</style>
