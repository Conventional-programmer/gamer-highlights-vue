<template>
  <div>
    <p v-bind:key="comment.id" v-for="comment in messages">
      {{comment.message}}
    </p>
  </div>
</template>

<script>
export default {
  name: "MessageComponent",
  props: {
    messages: {
      type: Array.of(String)
    }
  }
}
</script>

<style scoped>

</style>
