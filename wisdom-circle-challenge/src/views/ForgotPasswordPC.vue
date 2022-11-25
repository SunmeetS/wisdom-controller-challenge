<template>
    <div class="mainDiv">
        <ModalCompVue @close="{showModal = false; router.push('resetpassword')}" v-if="showModal">
        </ModalCompVue>
        <CompanyLogo />
        <div class="signInPage">
            <div>
                <div class="middle">
                    <div class="signIn">
                        <TextComp heading="Forgot password"
                            subText="We’ll send you a reset password link to your registered email address" />
                        <input v-model="email" placeholder="Registered Email" @input="validate" ref="emailRef"
                            type="text" />
                        <span class="errMsg">{{ emailError }} </span>
                    </div>
                </div>

                <div class="buttons">
                    <ButtonVue @click="doesUserExist"> Email me a recovery link </ButtonVue>
                    <ButtonVue :onclick="() => router.push('/')" class="return"> Return to sign in
                    </ButtonVue>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import TextComp from "@/components/TextComp.vue";
import ButtonVue from "../components/Button.vue";
import CompanyLogo from "../components/CompanyLogo.vue";
import { ref } from 'vue';
import axios from "axios"
import MainLogo from '../components/MainLogo.vue';
import ModalCompVue from '@/components/ModalComp.vue.vue';
import router from '@/router';
import ForgotPasswordPC from './ForgotPasswordPC.vue';

let emailRef = ref<HTMLInputElement | null>(null);

let email = ref(""),
    emailError = ref("")
let validate = () => {
    if (!email.value.match(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,63})$/)) {
        emailError.value = "Please enter a valid Email ID"
        emailRef.value!.style.borderColor = "red"
        emailRef.value!.style.color = "red"
    }
    else {
        emailError.value = ""
        emailRef.value!.style.borderColor = "black"
        emailRef.value!.style.color = "black"

    }
}

let showModal = ref(false)

let doesUserExist = async () => {
    console.log("https://wisdom-circle-nest-production.up.railway.app/" + email.value);

    let userObj = await axios.get(`https://wisdom-circle-nest-production.up.railway.app/${email.value}`).catch(()=>showModal.value = true)
    if (email.value !== userObj?.data?.email) emailError.value = 'Sorry! This email  is not registered.'
    else {
        showModal.value = true
    }
}


</script>

<style scoped>
.errMsg {
    color: red
}

.middle {
    width: 384px;
}

.inputGroup {
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    margin: 1rem 0rem 0rem 0rem;
    width: 384px;
}

.buttons>* {
    margin: 1rem 0rem 0rem 0rem;
}

input {
    outline: none;
    width: 100%;
    background: #ffffff;
    border: 1px solid #dcdee5;
    border-radius: 4px;
    padding: 0.1rem 0.5rem;
    margin-top: 0.7rem;
    height: 48px
}

.inputGroup>*,
.textSignIn>* {
    margin: 0.2rem 0rem 0.2rem 0rem
}

.buttonLoginPC {
    margin: 1rem 0rem 0rem 0rem
}

.passDiv input {
    border: none;
    margin-top: 0rem;
}

.passDiv {
    display: flex;
    justify-content: center;
    width: 100%;
    background: #ffffff;
    border: 1px solid #dcdee5;
    border-radius: 4px;
    margin-top: 0.7rem;
}

.passDiv img {
    position: relative;
    left: -15px;
    height: 15px;
    top: 20px;
    width: 21.65px
}

input {
    font-size: 16px;
    font-weight: 400;
}

.email:focus,
.passDiv:focus {
    border: 1px solid black;
}



.textSignIn {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
}

.textSignIn h2 {
    font-family: 'Poppins';
    font-size: 24px;
    line-height: 32px;
}

.textSignIn p {
    color: grey;
}


a {
    font-style: normal;
    font-weight: 600;
    text-align: center;
    color: #2558e5;
    cursor: pointer;
    font-size: smaller;
    margin: 2px 0px 0px 2px;
    font-family: 'Poppins';
}

a:hover {
    border-bottom: 1px solid;
}

.signUp {
    display: flex;
}

.mainDiv {
    top: 0rem;
    left: 0rem;
    position: absolute;
    display: flex;
}

.signInPage {
    display: flex;
    justify-content: center;
    align-items: center;
    width: calc(100vw - 526px)
}

.return {
    background: #FEFCF4 !important;
    color: #A9871E;
    border: 1px solid #A9871E;

}

h1,
h2,
h3,
h4,
h5,
h6,
p {
    margin: 0.1rem
}
</style>