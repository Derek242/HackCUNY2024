<script setup>
import TopBar from './components/TopBar.vue'
import SideBar from './components/SideBar.vue'
import { handleError, ref, toHandlerKey, onMounted } from 'vue'
import axios from 'axios'
import { getAuth, onAuthStateChanged, signOut} from 'firebase/auth'
import { useRouter} from "vue-router"
const router = useRouter();
const log = ref(false);
let auth;


onMounted(()=>{
  auth = getAuth();
  onAuthStateChanged(auth, (user)=>{
    if(user){
      
      log.value=true;
    }else{
      log.value=false;
    } 
  });
});
const handleSignOut = () =>{
  signOut(auth).then(()=>{
    router.push("/signup");
  });
}
const count = ref(0)
</script>

<template>
  <div class ="signoutbutton">
    <button @click="handleSignOut" v-if="log">Sign Out</button>
</div>
  <div id="app">
    <TopBar/>
    <SideBar/>
    <router-view/>
  </div>

</template>

<script>
export default {
  data() {
    return {
      currentContent: 'Home',
      carmake: '',
      cardata: []
    };
  },
  methods: {
    changeContent(content) {
      this.currentContent = content;
    },
     async fetchdata(){
      try{
        const res = await axios.get(`https://api.api-ninjas.com/v1/cars?limit=5&make=${this.carmake}`, {
         headers: {   'content-type': 'application/json',
         'X-Api-Key': '13aF+ziMB9pD3sPpHquy2g==QhkZJPnZlcZ5OzwW'}  
       })
       this.cardata = res.data; 
       console.log(res.data);
      }catch(error) {
        console.error('Error fetching data:', error);
      };
    }
  }
};
</script>


<style>

body {
  margin: 0 0 0 20vh;
  background-color: #DCD0C0;
}


  .signoutbutton {
    z-index: 3;
    position: absolute;
    margin-right: auto;
    top: 20px;
    right: 5vh;

  }

.signoutbutton button{
    border-radius: 10%;
    background-color: beige;
    border-color: 2%;
    padding: 1%;
    font-size: 3vh;
    width: 10vh;
}
</style>
