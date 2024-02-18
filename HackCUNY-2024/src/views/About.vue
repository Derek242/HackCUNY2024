<template>
  <div class="page">
    <div class="about-sections" :class="{ active: aboutSectionOpen}">
      <h2 @click="toggleAnswer('about')"> What is this About?
      <span class = "dropdown-btn" :class="{ rotated: aboutSectionOpen }">▼</span> 
      </h2>
      <p class="answer" v-show="aboutSectionOpen"> 
          This website serves as a reoucrse where users are able to explroe and search for a diverse array of 
          avaliable vehicles that are currently on the market. Through our user-friendly interface, individuals
          can search through their favorite motorized companies to find the car they like and additional information
          on them! Furthermore, we have implemented a user registration and login section, providing individuals with 
          the opportunity to create a personalized account. This feature enables users to store and manage their 
          favorite vehicle searches, enhancing the overall user experience by offering a personalized and secure 
          environment for their automotive preferences.
      </p>
    </div>

    <div class="beginning-sections" :class="{ active: beginningSectionOpen}">
      <h2 @click="toggleAnswer('beginning')"> How did this Beginning?
      <span class = "dropdown-btn" :class="{ rotated: beginningSectionOpen }">▼</span> 
      </h2>
      <p class="answer" v-show="beginningSectionOpen"> 
          This all began when we decided to go down the UX/UI route. We thought about something that is 
          neccessary and useful to young adults, which we ended up on a car search. Something that cater towards
          adults that want to buy their first cars or trying to compare options. We started off very ambitious and 
          were determined to see it through!

      </p>
    </div>

    <div class="challanges-sections" :class="{ active: challengesSectionOpen}">
      <h2 @click="toggleAnswer('challenges')"> What were the Challanges?
      <span class = "dropdown-btn" :class="{ rotated: challengesSectionOpen }">▼</span> 
      </h2>
      <p class="answer" v-show="challengesSectionOpen"> 
          Over the course of this Project, there were a bunch of issues and roadblocks, especially since this was our first Hackathon and our
          first time using Vue+Vite. The learning curve associated with these technologies, combined with the constraints 
          posed by team members' prior commitments, significantly slowed down our progress. Despite these difficulties, our team persevered, 
          demonstrating resilience and determination in navigating through unfamiliar territory. ...

      </p>
    </div>

  <div class="goals-sections" :class="{ active: goalsSectionOpen}">
      <h2 @click="toggleAnswer('goals')"> What's Next?
      <span class = "dropdown-btn" :class="{ rotated: goalsSectionOpen }">▼</span> 
      </h2>
      <p class="answer" v-show="goalsSectionOpen"> 
          Due to the limited time constraints and learning issues. We couldn't get much done. However, we hope 
          to expand more on the user login features such as being able to favorite cars. ...

      </p>
    </div>
  </div>  
</template>


<style>
.page{
    margin-top: 20px;
    margin-left: 4.5%;
    margin-bottom: auto;
    background-color: lightgray;
    height:auto;
    min-height:800px;
    width:auto;
    border-radius: 20px;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 8px 4px 2px 1px rgba(0,0,0,.2);
    }

.sections {
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
}

.sections div{
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;

}
/* 
.sections p {
  
} */

.container{
    max-width:900px;
}
  
</style>


<script>
export default {
  data() {
    return {
      aboutSectionOpen: false,
      beginningSectionOpen: false,
      challengesSectionOpen: false,
      goalsSectionOpen: false
    };
  },
  methods: {
    toggleAnswer(section) {
      this[`${section}SectionOpen`] = !this[`${section}SectionOpen`];
    },
  },
};
</script>

