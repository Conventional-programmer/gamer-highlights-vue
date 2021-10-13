<template>
  <router-link :to="{name:'Post',params:{id:postId}}">
    <img v-bind:src="imageToken()">
  </router-link>
</template>

<script lang="ts">
import TokenService from "@/service/authentication/token.service"
import {defineComponent} from "vue";
import { toRefs } from 'vue'
export default defineComponent({
  name: "PostComponent",
  props: {
    postId: Number,
    imageUrl:String
  },
  setup(props)
  { 
    const { imageUrl } = toRefs(props)
    const imageToken = () => {
      const imageUrlToken = imageUrl?.value +'?Authorization='+TokenService.getLocalAccessToken()
      return imageUrlToken;
    }
    return {
      imageToken
    }
  }
})
</script>

<style scoped>

</style>
