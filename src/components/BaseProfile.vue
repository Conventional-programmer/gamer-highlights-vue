<template>
  <div>
    <img v-if="user" v-bind:src="user.imageUrl"/>
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

import {defineComponent} from "vue";

export default defineComponent({
  name: "BaseProfile",
  props:{
    user: User
  }
})
</script>

<style scoped>

</style>
