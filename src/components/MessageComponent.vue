<template>
  <div class="messages">
    <h2>comments</h2>
    <p v-bind:key="comment.id" v-for="comment in messages">
      {{comment.message}}
    </p>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
export default defineComponent( {
  name: "MessageComponent",
  props: {
    messages: Array
  }
})
</script>

<style scoped>

</style>
