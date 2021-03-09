<template>
  <div id="nav">
    <div class="title">
      <router-link to="/">Game highlights</router-link>
    </div>
    <div class="search-bar">
      <input type="search"/>
    </div>
    <div class="authentication">
      <router-link id="login" to="/">Login</router-link>
      <router-link id="register" to="/register">Register</router-link>
    </div>
  </div>
  <router-view/>
</template>

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
</style>
