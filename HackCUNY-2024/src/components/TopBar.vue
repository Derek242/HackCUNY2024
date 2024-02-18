<template>
  <div class="topBar">
    <div class="brand">
      <img class="logo" src="../assets/pngwing.com.png" alt="logo"/>
      <h1 class="title">Car Search</h1>
      <button @click="handleSignOut" v-if="log">Sifffffffffffffffffffffgn Out</button>
   </div>
  </div>
</template>
<script>
  import {ref, onMounted } from 'vue'
  import { useRouter} from 'vue-router'
  import { getAuth,onAuthStateChanged, signOut} from "firebase/auth";
  const router = useRouter();
  const log = ref(false);
  let auth;
  onMounted(()=>{
    auth = getAuth();
    onAuthStateChanged(auth, (user)=>{
    console.log("test");
    if(user){
      log.value=true;
    }else{
      log.value=false;
    } 
  });
})
const handleSignOut = () =>{
  signOut(auth).then(()=>{
    router.push("/");
  });
}
const count = ref(0)
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
    z-index: 200;
}
button{
  z-index:100%;
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
  margin-left: 20px;
  margin-top: 7px;
}


</style>