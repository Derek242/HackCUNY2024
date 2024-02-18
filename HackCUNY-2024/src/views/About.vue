<template>
  <div class="page">
    <div class="sections" :class="{ active: isOpen}">
      <h2 @click="toggleAnswer"> What is this About?
      <span class = "dropdown-btn" :class="{ rotated: isOpen }">▼</span> 
      </h2>
      <p class="answer" v-show="isOpen"> 
          Yes
      </p>
    </div>
  </div>
</template>


<style>
.page{
    margin-top: 20px;
    margin-bottom: auto;
    background-color: lightgray;
    height:auto;
    min-height:800px;
    width:auto;
    border-radius: 20px;
    display:flex;
    justify-content: center;
    align-items: center;
    box-shadow: 8px 4px 2px 1px rgba(0,0,0,.2);
    }

.container{
    max-width:900px;
}
  
</style>


<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleAnswer() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

