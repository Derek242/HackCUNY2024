<template>
    <aside class="sidebar">
        <div>
            <router-link to = "/home"> 
                <img src="../assets/home.png" alt="" class ="home-image"/>
                Home
            </router-link>       
        </div>
        <div>

            <router-link to = "/about"> 
                <img src="../assets/paper.png" alt="" class ="about-image"/> 
                About
            </router-link>
        </div>
        <div>
            <router-link to = "/contact"> 
                <img src="../assets/contact.png" alt="" class ="contact-image"/>
                Contact
            </router-link>
        </div>
        <div>
            <router-link to = "/sign-up"> 
                <img src="../assets/signup.png" alt="" class ="register-image"/>
                Register
            </router-link>
        </div>
        <div>
            <router-link to = "/sign-in"> 
                <img src="../assets/login.png" alt="" class ="login-image"/>
                Login
            </router-link>
        </div>
    </aside>
</template>



<style>

#aside{
    display: flex;
}

.sidebar {
    background-color: gray;
    padding: 2%;
    position: fixed;
    left: 0;
    top: 80px;
    bottom: 0;
    width: 20vh;
    color: white;
    display: flex;
    flex-direction: column;
    z-index: 200px;
}

.sidebar div{
    border-bottom: 1px solid white;    
    overflow: hidden;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center; /* Center items horizontally */
    justify-content: center; /* Center items vertically */}


.sidebar a {
    /* text-decoration: none;
    text-align: center;
    color: white;
    display: block;
    font-size: 75%;
    padding: 10%;
    justify-content: center;
    display: block; */

text-decoration: none;
  text-align: center;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center; /* Center items horizontally */
  justify-content: center; /* Center items vertically */
  font-size: 75%;

    
}

.about-image, .contact-image, .home-image, .register-image, .login-image {
    display: flex;
    flex-direction: column;
    justify-content: center; 
    width: 15vh; 
    height: 15vh; 
    z-index: 100%;
    max-width: 20vh;

}

</style>