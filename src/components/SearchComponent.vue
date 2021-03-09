<template>
  <p v-for="user in this.users">{{user.username}}</p>
</template>

<script>
export default {
  name: "SearchComponent",
  data: {
    return: {
      users: [];
    }
  }
}
</script>

<style scoped>

</style>
