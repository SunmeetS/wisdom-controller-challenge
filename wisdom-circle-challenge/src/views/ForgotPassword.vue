<template>
    <div class="main">
        <div class="mainScreen">
            <div class="top">
                <MainLogo />
                <div class="middle">
                    <div class="signIn">
                        <TextComp heading="Forgot password" subText="We’ll send you a link to reset your password." />
                        <input v-model="email" placeholder="Registered Email" @input="validate" ref="emailRef"
                            type="text" />
                        <span>{{ emailError }} </span>
                    </div>
                </div>
            </div>
            <div class="footer">
                <div>
                    <ButtonVue @click="doesUserExist"> Send Reset Password Link </ButtonVue>
                    <ButtonVue :onclick="()=>router.push('/')" class="return"> Return to sign in </ButtonVue>
                </div>
            </div>
            <ModalCompVue @close="{showModal = false; router.push('resetpassword')}" v-if="showModal">
            </ModalCompVue>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import axios from "axios"
import ButtonVue from '@/components/Button.vue';
import MainLogo from '../components/MainLogo.vue';
import ModalCompVue from '@/components/ModalComp.vue.vue';
import TextComp from '@/components/TextComp.vue';
import router from '@/router';


let emailRef = ref<HTMLInputElement | null>(null);

let email = ref(""),
    emailError = ref("")
let validate = () => {
    if (!email.value.match(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,63})$/)) {
        emailError.value = "Please enter a valid Email ID"
        emailRef.value!.style.borderColor = "red"
    }
    else {
        emailError.value = ""
        emailRef.value!.style.borderColor = "black"
    }
}

let showModal = ref(false)

let doesUserExist = async () => {
    console.log("https://wisdom-circle-nest-production.up.railway.app/" + email.value);

    let userObj = await axios.get(`https://wisdom-circle-nest-production.up.railway.app/${email.value}`)
    if (email.value !== userObj.data.email) emailError.value = 'Sorry! This email  is not registered.'
    else {
        showModal.value = true
    }
}

</script>

<style scoped>
.signUp {
    display: flex;
    font-size: 0.8rem;
    align-items: center;
}

span {
    color: red
}

.footer {
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    align-items: flex-end;
}

.footer > *{
    width: 100%;
}

.return{
    background: #FEFCF4;
    color: #A9871E;
}

.footer >* >* {
    margin: 1rem 0rem 0rem 0rem;
}


.textSignIn {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
}

h1,
h2,
h3,
h4,
p,
a {
    margin: 0.1rem;
}

.textSignIn h2 {
    font-family: "Inter", sans-serif;
    font-size: 21px;
}

.textSignIn p {
    color: grey;
}

.textSignIn a {
    font-family: "Inter", sans-serif;
}

.signUp a {
    margin-bottom: 5px;
}

.textSignIn {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
}

h1,
h2,
h3,
h4,
p,
a {
    margin: 0.1rem;
}

.textSignIn h2 {
    font-family: "Inter", sans-serif;
    font-size: 21px;
}

.textSignIn p {
    color: grey;
}

.textSignIn a {
    font-family: "Inter", sans-serif;
}

.top>* {
    width: 100%;
}

.middle {
    justify-content: flex-start;
}

input {
    padding: 0.7rem
}

.signIn {
    display: flex;
    width: 400px;
    flex-wrap: wrap;


}
</style>