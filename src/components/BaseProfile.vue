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
import TokenService from "@/service/authentication/token.service"
import {defineComponent} from "vue";
import { toRefs } from 'vue'

export default defineComponent({
  name: "BaseProfile",
  props:{
    user: User
  }
})
</script>

<style scoped>

</style>
