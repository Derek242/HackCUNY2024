<template>
    <div class="sign-up-container">
        <h1>Create an account</h1>
        <div class="account-info">
            <input type ="text" placeholder ="Email" v-model="email"/> 
            <input type = "password" placeholder ="Password" v-model="password"/> 
        </div>
        
        <div class="button-container">
            <button @click="reg">Sign up</button>
            <button @click="Google">Sign up with Google</button>
        </div>
        
        
    </div>
</template>

<script setup>
import {ref} from "vue";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import {useRouter} from 'vue-router'
const email = ref("");
const password = ref("");
const router = useRouter()
const reg = () => {
    createUserWithEmailAndPassword(getAuth(), email.value,password.value)
    .then((data)=>{
        console.log("Successful");
        router.push('/feed')
    })
    .catch((error)=> {
        console.log(error.code);
        alert(error.message);
    })
};
const Google = () =>{

}
</script>


<style scoped>
.sign-up-container, .account-info, .button-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.sign-up-container{
    margin-top: 150px;
}

.account-info {
    margin-bottom: 20px;
}

input {
    margin-bottom: 10px;
}


button {
    margin-bottom: 10px;
    font-family: Arial;
    font-size: 15px;
    padding: 5px 5px 5px 5px;
    width: 240px;
    border-radius: 15px;
    cursor: pointer;
}
</style>