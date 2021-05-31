<template>
  <div class="post">
    <div class="base-post">
      <img v-bind:src="post.imageUrl">
      <p class="description">{{post.description}}</p>
      <p>likes: {{post.likes}}</p>
    </div>
    <MessageComponent v-bind:messages="post.comments"></MessageComponent>
  </div>
</template>

<script lang="ts">
import Post from "@/class/post";
import MessageComponent from "@/components/MessageComponent.vue";
import PostComment from "@/class/postComment";
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
      post: new Post(1,{ username: 'gertje', description:'gertje is een mooie meid',imageUrl:'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png'} as User,'https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg','adad',[new PostComment(1,'aba',{ username: 'gertje', description:'gertje is een mooie meid',imageUrl:'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png'} as User),new PostComment(2,'kaka',{ username: 'gertje', description:'gertje is een mooie meid',imageUrl:'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png'} as User)],50) as Post
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
</style>
