<script setup>
import { ref, toHandlerKey } from 'vue'
import axios from 'axios'

defineProps({
  msg: String,
})

const count = ref(0)

const headers = {
  'content-type': 'application/json',
  'X-Api-Key': '13aF+ziMB9pD3sPpHquy2g==QhkZJPnZlcZ5OzwW'
};
function search(){
    axios.get('https://api.api-ninjas.com/v1/cars?limit=5&model=camry',{
      headers: headers
    })
    .then(response => {
    console.log(response.data);
    })
    .catch(error => {
    console.error('Error fetching data:', error);
    });
}
</script>


<template>
  <!-- <h1>{{ msg }}</h1> -->

  <!-- <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div> -->
<!-- 
  <p>
    <input type="text" id="car-name" v-model=carname @keyup.enter=search>
  </p> -->
<!-- 
  <div>
    <label for="dropdown"> </label>
    <select v-model="selectedFilters" id="dropdown">
      <option value = "" disabled selected> Select an option</option>
      <option value="option1"> Option 1</option>
      <option value="option2"> Option 2</option>
    </select>  
    </div> -->
</template>

<style scoped>
/* .read-the-docs {
  color: #888;
}

.dropdown {
  color: whitesmoke;
} */

</style>
