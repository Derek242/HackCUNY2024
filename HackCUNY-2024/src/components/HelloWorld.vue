<script setup>
import { ref } from 'vue'


defineProps({
  msg: String,
})

const count = ref(0)


</script>


<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>
  <p>
    <input type="text" id="car-name" >
  </p>

  <div>
    <label for="dropdown"> </label>
    <select v-model="selectedFilters" id="dropdown" placeholder="select an option">
      <option value = "" disabled selected>Select an option</option>
      <option value="option1"> Option 1</option>
      <option value="option2"> Option 2</option>
    </select>  
    </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}

.dropdown {
  color: whitesmoke;
}

</style>
