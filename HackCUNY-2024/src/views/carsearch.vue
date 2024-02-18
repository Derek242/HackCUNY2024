<template>
  <div class ="too">
    <input type="text" id="car-name" v-model=carmake @keyup.enter="fetchdata" @input="cardata" placeholder = "Car Company" >

    <h2>teASFASDst</h2>
    <ul>
        <li v-for="(car,i) in cardata" :key="i">
          <p>Model: {{ car.model }}<br/>
            Company: {{ car.make }}<br/>
            Class: {{ car.class }}<br/>
            Year: {{ car.year }}<br/>
          </p>

        </li>
    </ul>
  </div>
</template>

<script>
// CAR SEARCH
import axios from 'axios'

export default {
  data() {
    return {
      carmake: '',
      cardata: this.cardata
    };
  },
  methods: {
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
  .too{
    margin-left:100px;
    margin-top:150px;
    display:flex;
    align-items: center;
    text-align:center;
    justify-content: center;
  }
</style>