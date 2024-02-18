<template>
    <div class="sign-up-container">
        <h1>Login</h1>
        <div class="account-info">
            <input type ="text" placeholder ="Email" v-model="email"/> 
            <input type = "password" placeholder ="Password" v-model="password"/> 
        </div>
        <p v-if="errMsg">{{  errMsg }}</p>
        <div class="button-container">
            <button @click="reg">Sign in</button>
            <button @click="Google">Sign up with google</button>
        </div>
    </div>
</template>

<script setup>
import { ref} from "vue";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from 'vue-router'

const email = ref("");
const password = ref("");
const errMsg = ref();
const router = useRouter();

const register = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth,email.value,password.value)
    .then((data)=>{
        console.log(data)
        console.log("Successful")
        console.log(auth.currentUser)
        router.push('/feed')
    })
    .catch((error)=>{
        console.log(error)
        errMsg.value="Invalid email or password";
    })
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
