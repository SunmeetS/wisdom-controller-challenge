<template>
    <div class="main">
        <div class="pc">
            <LoginVuePC />
        </div>
        <div class="mainScreen">
            <div class="top">
                <MainLogo class="mainLogoMobile" />
                <div class="middle">
                    <div class="signIn">
                        <div class="textSignIn">
                            <h2>Sign In to WisdomCircle</h2>
                            <div class="signUp">
                                <p>Don't have an account?</p>
                                <a>Sign up</a>
                            </div>
                        </div>
                        <div class="inputGroup">
                            <input ref="emailRef" type="email" v-model="email" placeholder="Email Id or Mobile Number"
                                class="email" />
                            <p class="errMsg">{{ emailError }}</p>
                            <div class="passDiv">
                                <input ref="passRef" v-model="password" placeholder="Password"
                                    :type="showPassword ? 'password' : 'text'" class="password" />
                                <img class="open" :onclick="() => showPassword = !showPassword"
                                    v-if="(showPassword && passwordError)" src="../assets/Vector.png" alt="">
                                <img class="close" :onclick="() => showPassword = !showPassword"
                                    v-if="!showPassword && passwordError" src="../assets/hidePassword.png" alt="">
                                <img class="open" :onclick="() => showPassword = !showPassword"
                                    v-if="showPassword && !passwordError" src="../assets/openEye.png" alt="">
                                <img class="close" :onclick="() => showPassword = !showPassword"
                                    v-if="!showPassword && !passwordError" src="../assets/closedEye.png" alt="">
                            </div>
                            <p class="errMsg">{{ passwordError }}</p>
                            <a :onclick="() => router.push('forgotpassword')" class="forgotPassword">Forgot password</a>
                        </div>
                    </div>
                </div>
                <div class="userDeets">
                    <h4>Current Email : {{ userDetails ? userDetails.email : '' }}</h4>
                    <h4>Current Password : {{ userDetails ? userDetails.password : '' }}</h4>
                </div>

            </div>
            <div class="footer">
                <ButtonVue @click="validate"> Sign in </ButtonVue>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import router from '@/router';
import { ref, onMounted } from 'vue'
import ButtonVue from '../components/Button.vue'
import MainLogo from "../components/MainLogo.vue"
import { useToast } from "vue-toastification";
import axios from 'axios';
import LoginVuePC from './LoginVuePC.vue';

let emailRef = ref<HTMLInputElement | null>(null);
let passRef = ref<HTMLInputElement | null>(null);
let showPassword = ref(true);

let userDetailsFunc: any = async () => await axios.get(import.meta.env.VITE_MAIN_URL+'/'+'user@mail.com').then((res) => res.data)

let userDetails = ref()

userDetailsFunc().then((res: any) => {
    userDetails.value = res
})

onMounted(() => {
    emailRef.value!.focus()
    passRef.value!.focus()
})

let email = ref(""), password = ref(""),
    emailError = ref(""), passwordError = ref("")

let validate = async () => {
    if (!email.value.match(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,63})$/)) {
        emailError.value = "Please enter a valid Email ID"
        emailRef.value!.style.borderColor = "red"
    }
    else {
        emailError.value = ""
        emailRef.value!.style.borderColor = "inherit"
    }
    if (password.value.length < 8) {
        passwordError.value = `Password must be at least 8 characters`
        passRef.value!.style.borderColor = "red"
    }
    else if (password.value != userDetails.value.password) {
        passwordError.value = 'Password is incorrect. '
    }
    else {
        passwordError.value = ""
        passRef.value!.style.borderColor = "inherit"

        console.log(userDetails.value.password, password.value)

        password.value === userDetails.value.password ? router.push("welcome") : console.error(userDetails.value.email)
    }
}



</script>

<style >
.footer {
    display: none;
}

input {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
}

.mainLogoMobile {
    display: none !important;
}

.errMsg {
    color: red;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
}


@media only screen and (min-device-width : 320px) and (max-device-width : 940px) {
    .pc {
        display: none;
    }

    .open, .close {
        margin-top: 8px;
    }

    .mainLogoMobile {
        display: flex !important;
    }

    .signUp {
        display: flex;
        font-size: 0.8rem;
        align-items: center;
    }

    .signUp a~p {
        margin-bottom: 5px;
        font-family: 'Poppins';
        font-weight: 400;
        font-size: 14px;
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
        font-family: 'Poppins';
    }

    .textSignIn h2 {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 700;
        font-size: 21px;
    }

    .userDeets>* {
        margin: 0.5rem
    }

    .textSignIn p {
        color: grey;
        font-size: 14px;
    }

    .textSignIn a {
        font-family: 'Poppins';
    }

    .main {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 0rem;
        left: 0rem;
        height: 100vh;
        width: 100vw;

        overflow: hidden;
    }

    a {
        font-style: normal;
        font-weight: 600;
        text-align: center;
        color: #2558e5;
        cursor: pointer;
    }

    a:hover {
        border-bottom: 1px solid;
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
        height: 0.7rem;
        top: 5px;
    }

    .close {
        height: 0.9rem !important;
    }

    .top {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }

    .middle {
        display: flex;
        justify-content: space-around;
        align-items: flex-start;
        height: 30vh;
    }

    .signIn h2 {
        color: #121317;
    }

    .footer {
        width: 100vw;
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
    }

    h1,
    h2,
    h3,
    h4,
    p,
    a {
        margin: 0.1rem;
    }

    .mainScreen {
        width: 360px;
        height: 700px;
        background: white;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }

    .mainScreen>* {
        padding: 1rem;
    }

    .inputGroup {
        display: flex;
        flex-wrap: wrap;
        justify-content: end;
        margin: 1rem 0rem 0rem 0rem;
    }

    input {
        outline: none;
        width: 100%;
        background: #ffffff;
        border: 1px solid #dcdee5;
        border-radius: 4px;
        padding: 0.3rem 0.5rem;
        margin-top: 0.7rem;
    }

    .passDiv input {
        border: none;
        margin-top: 0rem;
    }

    .inputGroup a {
        width: fit-content;
    }

    * {
        letter-spacing: 0.05rem;
    }
}
</style>