<template>
    <form @submit.prevent="uploadPost" class="forum">
      <input id="postName" type="text" placeholder="name" v-model="post.name">
      <input id="description" type="text" placeholder="description" v-model="post.description">
      <input id="image" name="image" type="file"  accept="image/png, image/jpeg" @change="imageChange($event)">
      <button class="submitButton" type="submit">post</button>
    </form>
    <p v-if="message">{{message}}</p>
</template>
<script lang="ts" setup>
    import ImageService from '@/service/image-service'
    import PostService from '@/service/post-service'
    import User from '@/class/user'
    import Post from '@/class/post'
    import { useStore } from 'vuex'
    import { ref } from 'vue'
    const store = useStore();
    const image = ref('');
    const post = ref({postingUser :{ userId:0, username: '', description:'',imageUrl:''} as User,description:'',imageUrl:'',comments:[] ,likes:[]} as Post)
    post.value.postingUser.userId = store.state.authentication.user.userId;
    const uploadPost = async() => {
        ImageService.uploadImage(image.value).then((url) => {
            post.value.imageUrl = url;
            PostService.post(post.value).then((response) => {
              console.log(response.status);
            });

        });
    }
    const imageChange = async(event) => {
        image.value = event.target.files[0];
    } 
</script>
<style scoped>
    
</style>
