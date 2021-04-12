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

<script lang="ts">
import User from "../class/user";

export default {
  name: "BaseProfile",
  props:{
    user: {
      type: Object as () => User,
      validator: function (value) {
        // The value ust match one of these strings
        return typeof(value.username) === "string"&& typeof(value.description) == "string";
      }
    }
  }
}
</script>

<style scoped>

</style>
