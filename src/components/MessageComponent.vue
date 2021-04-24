<template>
  <div class="messages">
    <h2>comments</h2>
    <div v-bind:key="comment.id" v-for="comment in messages">
      <p>{{comment.message}}</p>
      <p>{{comment.user.username}}</p>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
export default defineComponent( {
  name: "MessageComponent",
  props: {
    messages: {
      type: Array
    }
  }
})
</script>

<style scoped>

</style>
