<template>
    <div class="main">
        <div class="mainScreen">
            <div class="top">
                <MainLogo />
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
                                <img class="open" :onclick="() => showPassword = !showPassword" v-if="showPassword"
                                    src="../assets/Vector.png" alt="">
                                <img class="close" :onclick="() => showPassword = !showPassword" v-if="!showPassword"
                                    src="../assets/hidePassword.png" alt="">
                            </div>
                            <p class="errMsg">{{ passwordError }}</p>
                            <a :onclick="() => router.push('forgotpassword')" class="forgotPassword">Forgot password</a>
                        </div>
                    </div>
                </div>
                <div class="userDeets">
                    <h4>Current Email : {{ userDetails? userDetails.email:'' }}</h4>
                    <h4>Current Password : {{ userDetails? userDetails.password:'' }}</h4>
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

let emailRef = ref<HTMLInputElement | null>(null);
let passRef = ref<HTMLInputElement | null>(null);
let showPassword = ref(true);

let userDetailsFunc = async () => await axios.get(`https://wisdom-circle-nest-production.up.railway.app/user@mail.com`).then((res) => res.data)

let userDetails = ref()

userDetailsFunc().then((res) => {
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
    if (!password.value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/)) {
        passwordError.value = `Password Should Contain The Following :
                                Min 1 uppercase letter.
                                Min 1 lowercase letter.
                                Min 1 special character.
                                Min 1 number.
                                Min 8 characters.
                                Max 30 characters.`
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

<style>

.signUp {
    display: flex;
    font-size: 0.8rem;
    align-items: center;
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

.userDeets>*{
    margin: 0.5rem
}

.textSignIn p {
    color: grey;
}

.textSignIn a {
    font-family: "Inter", sans-serif;
}

.errMsg {
    width: 100%;
    text-align: start;
    font-size: 0.7rem;
    color: red
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
    background: rgba(0, 0, 0, 0.9);
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
    width: 380px;
    height: 90vh;
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


</style>