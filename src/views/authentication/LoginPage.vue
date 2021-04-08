<template>
    <form @submit.prevent="handleLogin">
      <input type="email" placeholder="e-mail" v-model="user.username">
      <input type="password" placeholder="password" v-model="user.password">
    </form>
</template>

<script lang="ts">
import User from "@/classes/user";
export default {
  name: "LoginPage",
  data(): {
    user: User;
  }
  {
    //as user?
    return {
      user: { username:'', password:''} as User
    };
  },
  methods:{
    handleLogin(): void {
      console.log('bert');
    }
  }
}
</script>

<style scoped>

</style>
