<template>
<h1>Create an account</h1>
<p><input type ="text" placeholder ="Email" v-model="email"/> </p>
<p><input type = "password" placeholder ="Password" v-model="password"/> </p>
<p><button @click="reg">Signup</button></p>
<p><button @click="Google">Sign up with google</button></p>
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