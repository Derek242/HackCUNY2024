<template>
    <aside class="sidebar">
        <div>
            <img src="" alt="" class ="home-image"/>
            <router-link to = "/home"> </router-link>       
        </div>
        <div>
            <img src="" alt="" class ="about-image"/>
            <router-link to = "/about"> About</router-link>
        </div>
        <div>
            <img src="" alt="" class ="contact=image"/>
            <router-link to = "/contact"> Contact</router-link>
        </div>
        <div>
            <img src="" alt="" class ="questions=image"/>
            <router-link to = "/questions"> Questions</router-link>
        </div>
        <div>
            <img src="" alt="" class ="register-image"/>
            <router-link to = "/sign-up"> Register</router-link>
        </div>
        <div>
            <img src="" alt="" class ="login-image"/>
            <router-link to = "/sign-in"> Login</router-link>
        </div>
    </aside>
</template>



<style>

#aside{
    display: flex;
    flex: column;
}

.sidebar {
    background-color: gray;
    padding: 2%;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    --sidebar-width: 50px;
    color: white;
}

.sidebar div{
    margin-bottom: 50%;
    margin-top: 50%;
    border-bottom: 1px solid white;    
    overflow: hidden;
    color: white;
}


.sidebar a {
    text-decoration: none;
    text-align: center;
    color: white;
    display: block;
    font-size: 75%;
    padding: 10%;
    justify-content: center;

    
}

.about-image, .contact-image, .questions-image, .register-image, .login-image {
    width: 100%;
    height: auto;
    margin-bottom: 25%;
}

</style>