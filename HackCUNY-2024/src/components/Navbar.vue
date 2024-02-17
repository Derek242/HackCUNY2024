<template>
  <nav class="navbar">
    <div class="brand">
      <router-link to="/">CarSearch</router-link>
    </div>
    <ul class="nav">
      <li><router-link to = "/"> CarSearch</router-link></li>
      <li><router-link to = "/about"> About</router-link></li>
      <li><router-link to = "/contact"> Contact</router-link></li>
      <li><router-link to = "/sign-up"> Register</router-link></li>
      <li><router-link to = "/sign-in"> Login</router-link></li>
    </ul>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  background: white;
}

.navbar a{
  color: #555;
}

.navbar a:hover {
  color: green;
}

.navbar .brand {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0px 10px;
}

.navbar .nav {
  list-style: none;
}

.navbar .nav li {
  display: inline-block;
  padding: 15px 15px;
}
</style>