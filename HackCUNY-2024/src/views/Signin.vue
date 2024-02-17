<template>
    <h1>Login</h1>
    <p><input type ="text" placeholder ="Email" v-model="email"/> </p>
    <p><input type = "password" placeholder ="Password" v-model="password"/> </p>
    <p v-if="errMsg">{{  errMsg }}</p>
    <p><button @click="reg">Signin</button></p>
    <p><button @click="Google">Sign up with google</button></p>
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