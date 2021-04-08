<template>
  <div>
    <p v-for="user in this.users">{{user.username}}</p>
  </div>
</template>

<script lang="ts">
import User from "../classes/user";

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
