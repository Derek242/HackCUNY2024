<script>
</script>

<template>
    <div class = "page">
        <div class = "container">
            <div class = head>Contacts: </div>
            <div class = "text">

                <p>
                    This website allows you to browse vehicles to ur best interest. <br/>
                    In this project we used: Google firebase, Vite, Vue, cars API from api ninja. 
                </p>
            </div>
            <div class = "Pictures">
                <a href="https://www.linkedin.com/in/elu1">
                <img src="../assets/Linkedin/Evan.jpeg" alt="Evan Lu">
                </a>
                <a href="https://www.linkedin.com/in/derekni">
                    <img src="../assets/Linkedin/Derek.jpeg"  alt="Derek Ni">
                </a>
                <a href="https://www.linkedin.com/in/thomashuang0">
                <img src="../assets/Linkedin/Thomas.jpeg"  alt="Thomas Huang">
                </a>
                <a href="https://www.linkedin.com/in/christopher-pawlus-843607294">
                <img src="../assets/Linkedin/Chris.PNG" alt="Christopher Pawlus">
                </a>
            </div>
            <div class = "about-text">
                <p>Evan <br/> Lu</p>
                <p>Derek <br/>Ni</p>
                <p>Thomas <br/>Huang</p>
                <p>Christopher <br/>Pawlus</p>
            </div>
            <div class = "github">
                <a href="https://www.github.com/Derek242/HackCUNY2024">
                    <img src="../assets/Github.png" alt="github">
                </a>
            </div>

        </div>
    </div>  

</template>

<style scoped>
    .page{
        margin-top: 20px;
        margin-bottom: auto;
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
    .head{
        margin-top:50px;
        margin-bottom:50px;
        font-size:48px;
        font-weight:200;
        color: rgba(53,56,57);
        padding:4px;
        display:flex;
        justify-content: center;
    
    }
    .text{
        margin-bottom:50px;
        font-size:24px;
        color: rgba(65,74,76);
        display:flex;
        justify-content: center;
        width:auto;
        
    }
    .about-us{
        display:flex;
        font-size:26px;
        color: rgba(53,56,57);
        gap:99px;
    }
    .Pictures{
        width:auto;
        display:flex;
        justify-content: space-between;
    
    }
    .Pictures img{
        transition: transform .25s;
        box-shadow: 8px 4px 2px 1px rgba(0,0,0,.2);
        margin-bottom:25px;
        width:200px;
        height:200px;

    }
    .Pictures img:hover {
        transform:scale(1.5);

    }
    .about-text {
        display:flex;
        flex-direction: row;
        justify-content: space-between;
        align-items:space-between;
        width:auto;
        font-size:26px;
    }
    .github img{
        display:flex;
        justify-content: end;
        align-items: end;
        width: 100px;
        text-align: center;
        display: flex;
  
    }
</style>