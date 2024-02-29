<template>
  <div class="topBar">
    <div class="brand">
    <a href="../home">
      <img class="logo" src="../assets/pngwing.com.png" alt="logo"/>
    </a>
      <h1 class="title">Car Search</h1>
   </div>
  </div>
</template>
<script>

</script>

<style>
.topBar {
    background-color: #C0B283;
    border-bottom: solid;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 12vh;
    z-index: 2;
}
/* button{
  z-index:100%;
} */
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
  margin-left: 20px;
  margin-top: 7px;
}


</style>