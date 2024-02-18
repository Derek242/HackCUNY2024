<template>
  <nav class="navbar">
    <div class="brand">
      <router-link to="/">
        <img src="../assets/4fingers.png">
      </router-link>
    </div>
    <div class="login">
      <router-link to = "/sign-in"> Login</router-link>
    </div>
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

.navbar .brand, .navbar .login{
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