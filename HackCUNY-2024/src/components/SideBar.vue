<template>
    <aside class="sidebar">
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
    padding: 5%;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    width: 100px;
    color: white;
}

.sidebar div{
    margin-bottom: 100%;
    margin-top: 100%;
    border-bottom: 1px solid white;    
    overflow: hidden;
    color: white;
}


.sidebar a {
    text-decoration: none;
    text-align: center;
    color: white;
    display: block;
    font-size: 100%;
    padding: 25%;

    
}

.about-image, .contact-image, .questions-image, .register-image, .login-image {
    width: 100%;
    height: auto;
    margin-bottom: 25%;
}

</style>