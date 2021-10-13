<template>
  <div id="nav">
    <div class="title">
      <router-link to="/">Game highlights</router-link>
    </div>
    <div class="search-bar">
      <input type="search" placeholder="username"/>
    </div>
    <div class="authentication">
      <router-link v-if="!currentUser" id="login" to="/">Login</router-link>
      <router-link v-if="!currentUser" id="register" to="/register">Register</router-link>
      <a v-if="currentUser" @click.prevent="logout">Logout</a>
    </div>
  </div>
  <router-view/>
</template>
<script lang="ts">
  import {defineComponent} from "vue";
  import tokenService from "@/service/authentication/token.service";
  export default defineComponent({
    computed: {
      currentUser()
      {
        return this.$store.state.authentication.user;
      }
    },
    methods: {
      logout() {
        this.$store.dispatch('authentication/logout');
        this.$router.push('/login')
      }
    },
    created() {
      console.log(process.env.API_URL);
    }
  })
</script>
<style>
#nav {
  display: flex;
  justify-content: space-between;
  flex-flow: row nowrap;
  padding: 30px;
}
#login {
  margin-right: 15px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
.search-bar input{
  margin: 5px;
  border-radius: 4px;
  box-sizing: border-box;
  box-shadow: rgb(221, 221, 221) 0px 1px 3px;
  border: 1px solid rgb(204, 204, 204);
  padding: 8px 12px;
  outline: none;
}
</style>
