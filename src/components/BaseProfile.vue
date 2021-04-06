<template>
  <div>
    <img v-bind:src="user.imageUrl"/>
    <p>
      {{user.username}}
    </p>
    <p>
      {{user.description}}
    </p>
  </div>
</template>

<script>
import User from "../classes/user";

export default {
  name: "BaseProfile",
  props:{
    user:User
  }
}
</script>

<style scoped>

</style>
