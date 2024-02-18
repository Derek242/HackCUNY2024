<template>
  <div class="topBar">
    <div class="brand">
      <img class="logo" src="../assets/pngwing.com.png" alt="logo"/>
      <h1 class="title">Automobile Search</h1>
   </div>
  </div>
</template>


<style>

.topBar {
    background-color: gray;
    border-bottom: solid;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 13vh;
    z-index: 200;
}

.brand {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.title {
  margin-top: 0;
  margin-bottom: 0;
  letter-spacing: 4px;
}

.logo {
  width: 12vh;
  height: 9vh;
  margin-right: 30px;
  margin-left: 10px;
  margin-top: 7px;
}


</style>