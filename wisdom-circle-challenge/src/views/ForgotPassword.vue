<template>
    <div class="main">
        <div class="mainScreen">
            <div class="top">
                <MainLogo />
                <div class="middle">
                    <div class="signIn">
                        <div class="textSignIn">
                            <h2>Forgot password</h2>
                            <div class="signUp">
                                <p>We’ll send you a link to reset your password.</p>
                            </div>
                        </div>
                        <input v-model="email" @input="validate" ref="emailRef" type="text" />
                        <span>{{ emailError }} </span>
                    </div>
                </div>
            </div>
            <div @click="doesUserExist" class="footer">
                <ButtonVue> Send Reset Password Link </ButtonVue>
            </div>
            <ModalCompVueVue @close="{showModal = false; $router.push('resetpassword')}" v-if="showModal"></ModalCompVueVue>
        </div>
    </div>
</template>

<script setup lang="ts">
import ButtonVue from '@/components/Button.vue';
import MainLogo from '@/components/MainLogo.vue';
import { defineProps, onMounted, ref, toRef } from 'vue';
import ModalCompVueVue from '../components/ModalComp.vue.vue';

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

let actualEmail = 'user@mail.com'
let doesUserExist = () => {
    if (email.value !== actualEmail) emailError.value = 'Sorry! This email  is not registered.'
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
    width: 23vw;
    flex-wrap: wrap;


}
</style>