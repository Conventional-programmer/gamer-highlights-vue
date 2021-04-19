<template>
    <form @submit.prevent="handleLogin" class="forum">
      <input type="email" placeholder="e-mail" v-model="user.username">
      <input type="password" placeholder="password" v-model="user.password">
      <button class="submitButton" type="submit">login</button>
    </form>
    <p v-if="message">{{message}}</p>
</template>

<script lang="ts">
import User from "@/class/user";
import {defineComponent} from "vue";
export default defineComponent({
  name: "LoginPage",
  data(): {
    user: User;
    message: string;
    loading: boolean;
  }
  {
    //as user?
    return {
      user: { username:'', password:''} as User,
      message: '',
      loading: false
    };
  },
  computed:{
    loggedIn(): boolean {
      return this.$store.state.authentication.status.loggedIn;
    }
  },
  created() {
    if (this.loggedIn) {
      this.$router.push('/profile');
    }
  },
  methods:{
    handleLogin(): void {
      this.loading = true;
      if (this.user.username && this.user.password) {
        this.$store.dispatch('authentication/login', this.user).then(
            () => {
              this.$router.push('/profile');
            },
            error => {
              this.loading = false;
              this.message =
                  (error.response && error.response.data) ||
                  error.message ||
                  error.toString();
            }
        );
      }
    }
  }
})
</script>
<style scoped src="@/assets/css/forum.css">

</style>
