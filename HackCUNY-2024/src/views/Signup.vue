<template>
<h1>Create an account</h1>
<p><input type ="text" placeholder ="Email" v-model="email"/> </p>
<p><input type = "password" placeholder ="Password" v-model="password"/> </p>
<p><button @click="reg">Signup</button></p>
<p><button @clcik="Google">Sign up with google</button></p>
</template>


<script setup>
import {ref} from "vue";
import {getAuth, createUserEmailAndPassword} from "firebase/auth";
import {useRouter} from 'vue-router'
const email = ref("");
const pw = ref("");
const router = useRouter()
const reg = () => {
    createUserEmailAndPassword(getAuth(), email.value,pw.value)
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