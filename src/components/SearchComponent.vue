<template>
  <div>
    <p v-bind:key="user.id" v-for="user in this.users">{{user.username}}</p>
  </div>
</template>

<script lang="ts">
import User from "../class/user";

export default {
  name: "SearchComponent",
  data(): {
    users: User[];
  }
  {
    return {
      users: []
    }
  }
}
</script>

<style scoped>

</style>
