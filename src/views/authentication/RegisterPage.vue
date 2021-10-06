<template>
  <div>
    <form id="" @submit.prevent="handleRegister" class="forum">
      <input type="text" name="username" placeholder="username" v-model="user.username">
      <input type="email" name="e-mail" placeholder="e-mail" v-model="user.email" >
      <input type="password" name="password" placeholder="password" v-model="user.password">
      <button type="submit" class="submitButton">register</button>
    </form>
  </div>
</template>

<script lang="ts">
import { useStore } from 'vuex'
import User from "@/class/user";
import { defineComponent } from "@vue/runtime-core";
import { useReCaptcha } from 'vue-recaptcha-v3'
export default  defineComponent({
  name: "RegisterPage",
  components: {
  },
  setup(){
    const store = useStore()
    const user: User = {username:'',email:'',password:''} as User;
    let submitted = false;
    let successful = false;
    let message = ''
    const { executeRecaptcha, recaptchaLoaded } = useReCaptcha()!
    
    const handleRegister = async() => {
      await recaptchaLoaded();
      const token  = await executeRecaptcha('register');
      console.log(token);
      message = '';
      submitted = true;
      store.dispatch('authentication/register', {user,token}).then(
        data => {
          message = data.message;
          successful = true;
        },
          error => {
          message =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
          successful = false;
      });
    }
    return{
      handleRegister,
      user 
    }
  }
})
</script>
<style scoped src="@/assets/css/forum.css">

</style>
