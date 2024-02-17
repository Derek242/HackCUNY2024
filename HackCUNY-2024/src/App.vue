<script setup>
 //import HelloWorld from './components/HelloWorld.vue'
import { ref, toHandlerKey } from 'vue'
import axios from 'axios'
</script>

<template>
  <!-- <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Hi" /> -->
  <div id = "car-website">
    <section>
        <header>
            <nav class="navbar">
              <!-- Left Side for the logo and name-->
              <div class="Logo">
                <a href="../src/HelloWorld.vue" rel="Links to main page" >
                  <img src="../src/pictures/4fingers.png" alt="Logo">
                </a>
              </div>

              <!-- Right side for login-->
              <div class="Login">
                <a href="../src/components/HelloWorld.vue" rel="Testing Link">
                  <img src="../src/pictures/keshi.jpg" alt="Login">
                </a>
              </div>
            </nav>
        </header>
    </section>
        <aside class="sidebar">
          <ul>
              <li @click = "changeContent('Home')"> Home</li>
              <li @click = "changeContent('About')"> About</li>
              <li @click = "changeContent('Questions')"> Questions</li>              
              <li @click = "changeContent('Profile')"> Profile</li>
              <li @click = "changeContent('Information')"> More Information</li>               
          </ul>
        </aside>

        <main class ="main-content">
          <div class = "container">

        <input type="text" id="car-name" v-model=carmake @keyup.enter=searchbar @keyup=SearchChanged(carmake) placeholder = "Car Company">
        <div class = "cars-container">
        <ul>cars: 
        <li v-for="(car,i) in cardata" :key="i">
          <p>
          model: {{ car.model }}<br/>
          company: {{ car.make }}<br/>
          year: {{ car.year }}<br/>
          cylinders: {{ car.cylinders }}<br/>
        </p>
        </li>
        </ul>
        </div>
        </div>


          <div>
            <label for="dropdown"> </label>
            <select v-model="selectedFilters" id="dropdown">
              <option value = "" disabled selected> Select an option</option>
              <option value="option1"> Option 1</option>
              <option value="option2"> Option 2</option>
            </select>  
          </div> 

          <div>
            <p> AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</p>
          </div>
        </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentContent: 'Home',
    };
  },
  methods: {
    changeContent(content) {
      this.currentContent = content;
    },
  },
};


const count = ref(0)
let search = '';
let cardata = [];
function SearchChanged(carmake){
  this.search = carmake;
}
const headers = {
  'content-type': 'application/json',
  'X-Api-Key': '13aF+ziMB9pD3sPpHquy2g==QhkZJPnZlcZ5OzwW'
};
function searchbar(){
    axios.get('https://api.api-ninjas.com/v1/cars?limit=5&make=' + search,{
      headers: headers
    })
    .then(response => {
      
    cardata = response.data;
    console.log(cardata);
    console.log(cardata[0]);
    })
    .catch(error => {
    console.error('Error fetching data:', error);
    });
}
</script>


<style scoped>

/* #car-website {

} */

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
