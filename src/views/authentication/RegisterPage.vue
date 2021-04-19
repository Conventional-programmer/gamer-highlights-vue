<template>
  <div>
    <form id="" @submit.prevent="registerAccount" class="forum">
      <input type="text" name="username" placeholder="username">
      <input type="email" name="username" placeholder="e-mail">
      <input type="password" name="password" placeholder="password">
      <button type="submit" class="submitButton">register</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "RegisterPage",
  methods: {
    registerAccount()
    {
      console.log('register')
    }
  }
}
</script>
<style scoped src="@/assets/css/forum.css">

</style>
