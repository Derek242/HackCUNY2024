<script setup>
import Navbar from './components/Navbar.vue'
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
const count = ref(0)
</script>

<template>
  <div id="app">
    <Navbar/>
    <SideBar/>
    <router-view/>
  </div>

  <!-- <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Hi" /> -->

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


<style scoped>
header {
  margin-bottom: 20px;
  display: block;
  justify-content: space-between;
  padding: 20px;
  display: flex;
}
.Logo, .Login{
  
}

.Logo img, .Login img {
  max-width: 25%;
  height: auto;
  margin-right: 25%;
}


.navbar {
  background-color: #333;
  color: white;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;

}

.navbar ul {
  list-style-type: none;
  padding: 0;
  display: flex;
}

.navbar li {
  cursor: pointer;
  margin-right: 20px;
}
.sidebar {
  width: 100px;
  background-color: #333;
  color: white;
  padding: 20px;
}

.sidebar ul {
  list-style-type: none;
  padding: 0;
}

.sidebar li {
  cursor: pointer;
  margin-bottom: 10px;
}

.content {
  flex: 1;
  padding: 20px;
}
</style>
