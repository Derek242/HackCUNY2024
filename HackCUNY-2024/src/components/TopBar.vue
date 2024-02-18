<template>
  <aside class="topBar">
    <div class="brand">
      <div class="logo">
      </div>
      <div class="appName">
        <img src="" alt="Logo Picture" class ="logo-image"/>
            <router-link to = "/home"></router-link>
        <h1>CarSearch</h1>
      </div>
   </div>
  </aside>
</template>

<script>

</script>

<style>
#aside{
  display: flex;
  flex-direction: row;
}

.topBar {
    background-color: gray;
    border-bottom: solid;
    padding: 2%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 10vh;
    z-index: 200;
}

.logo-image {
  width: 10%;
  height: 10%;
  max-height: 100vh;
  max-width: 100hv;
  background-color: black;
}
</style>