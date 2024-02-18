<template>
    <div class="carousel"> 
      <div v-for="(slide, index) in slides" :key="index" class="carousel-item" :class="{ active: index === activeIndex }"> 
        <div class="slide-image" :style="{ 'background-image': 'url(' + slide.imageUrl + ')' }"></div> 
      </div> 
      <button @click="goToPreviousSlide">◀</button>
      <button @click="goToNextSlide">▶</button>
    </div> 
    <h2>Car List:</h2>
    <div class ="container-car">
      <input type="text" id="car-name" v-model="carmake" @keyup.enter="fetchdata" @input="cardata" placeholder = "Car Company" >
  
      <div class = "car-list">
      <ul class = "nobulletpoint">
          <li v-for="(car,i) in cardata" :key="i">
            <div class = car-card>
              Company: {{ car.make }}<br/>
              Model: {{ car.model }}<br/>
              Year: {{ car.year }}<br/>
              Highway(Miles): {{ car.highway_mpg }}<br/>
              City(Miles): {{ car.city_mpg }}<br/>
              Fuel: {{ car.fuel_type }}<br/>
            </div>
          </li>
      </ul>
    </div>
    </div>
  </template>

<script>
import axios from 'axios'

  export default {
    data() {
      return {
        slides: [
          { imageUrl: 'https://media.istockphoto.com/id/1478431022/photo/cars-for-sale-stock-lot-row.jpg?s=1024x1024&w=is&k=20&c=9Ia8cojAjkfVgft22bC_pt5NDko-_pWIu4JOYsjnAuY=' },
          { imageUrl: 'https://media.istockphoto.com/id/1562275869/photo/3d-rendering-of-a-brand-less-generic-concept-car.jpg?s=1024x1024&w=is&k=20&c=RuZr1eHCzn6u5CpI0dnLfhH4Sj4TocL7xEopqEKBaFQ='},
          { imageUrl: 'https://media.istockphoto.com/id/1562295342/photo/3d-rendering-of-a-brand-less-generic-concept-car.jpg?s=1024x1024&w=is&k=20&c=mJHXzxzvxTWMEtTV1zNTKOGhi4cSprR-UHQ-Uv7COMU=' },
          { imageUrl: 'https://media.istockphoto.com/id/1286476808/photo/gray-sportscar-driving-on-a-road.jpg?s=1024x1024&w=is&k=20&c=INNemsW_dSTDu0atV_boosblJwRZZoaRPwq13iNKqB8=' }
        ],
        activeIndex: 0,
        intervalId: null,
        slideDuration: 3000, // Adjusted slide duration to 2.5 seconds (2500 milliseconds)
        carmake: '',
        cardata: this.cardata,
    
    };
    },
    mounted() {
      this.startCarousel();
    },
    methods: {
        async fetchdata(){
      try{
        const res = await axios.get(`https://api.api-ninjas.com/v1/cars?limit=100&make=${this.carmake}`, {
         headers: {   'content-type': 'application/json',
         'X-Api-Key': '13aF+ziMB9pD3sPpHquy2g==QhkZJPnZlcZ5OzwW'}  
       })
       this.cardata = res.data; 
       console.log(res.data);
      }catch(error) {
        console.error('Error fetching data:', error);
      };
        },
      startCarousel() {
        this.intervalId = setInterval(() => {
          this.activeIndex = (this.activeIndex + 1) % this.slides.length;
        }, this.slideDuration);
      },
      stopCarousel() {
        clearInterval(this.intervalId);
      },
      goToPreviousSlide() {
        this.activeIndex = (this.activeIndex - 1 + this.slides.length) % this.slides.length;
      },
      goToNextSlide() {
        this.activeIndex = (this.activeIndex + 1) % this.slides.length;
      }
    },
    beforeDestroy() {
      this.stopCarousel();
    },
  };
</script>


<style>
* { 
    box-sizing: border-box; 
} 
.nobulletpoint{
    /* Good */
    list-style-type:none;
}
.nobulletpoint li{
    /* Good */

    display:inline-block;
    margin:10px;

}
.container-car{
    /* Good */

    display:flex;
    align-items: start;
    text-align:center;
    justify-content: start;
    height:1000px;
  }
.container-car input{

    display:flex;
    align-items:center;

}
.car-card{
    display:flex;
    flex-direction: row;
    background-color: #DCD0A5;
    padding:10px;
    border-radius:20px;
    box-shadow:8px 4px 2px 2px rgba(0,0,0,.2);
    flex-wrap: wrap;
    max-width:225px;
    
}


template { 
    display: flex; 
    justify-content: center; 
    align-items: center; 
} 
  
.carousel { 
    display: flex;
    flex-direction: row;
    position: relative; 
    width: 195vh; 
    height: 100vh; 
    overflow: hidden; 
    background-color: #cdcdcd; 
    justify-content: space-between;
    align-items: center;
} 
  
.carousel-item .slide-image { 
    width: 195vh; 
    height: 100vh; 
    background-size: cover; 
    background-repeat: no-repeat; 
} 
  
.carousel-item { 
    position: absolute; 
    width: 100%; 
    height: 270px; 
    border: none; 
    top: 0px; 
    left: 100%; 
} 
  
.carousel-item.active { 
    left: 0; 
    transition: all 0.5s ease-out; 
} 
  
.carousel-item div { 
    height: 100%; 
} 


/*Button */
button {
    position: relative;
    height: 50px;
    opacity: 0.6;
    border: none;
    font-size: larger;
}




</style>