<template>
    <div class="carousel"> 
      <div v-for="(slide, index) in slides" :key="index" class="carousel-item" :class="{ active: index === activeIndex }"> 
        <div class="slide-image" :style="{ 'background-image': 'url(' + slide.imageUrl + ')' }"></div> 
      </div> 
      <button @click="goToPreviousSlide"><</button>
      <button @click="goToNextSlide">></button>
    </div> 
</template>

<script>
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
        slideDuration: 3000 // Adjusted slide duration to 2.5 seconds (2500 milliseconds)
      };
    },
    mounted() {
      this.startCarousel();
    },
    methods: {
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
    }
  };
</script>


<style>
* { 
    box-sizing: border-box; 
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
    width: 670px; 
    height: 460px; 
    overflow: hidden; 
    background-color: #cdcdcd; 
    justify-content: space-between;
    align-items: center;
} 
  
.carousel-item .slide-image { 
    width: 670px; 
    height: 460px; 
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
    transition: all 0.3s ease-out; 
} 
  
.carousel-item div { 
    height: 100%; 
} 


/*Button */
button {
    position: relative;
    height: 50px;
}



</style>