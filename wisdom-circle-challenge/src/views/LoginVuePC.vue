<template>
    <div class="mainDiv">
        <CompanyLogo />
        <div class="signInPage">
            <div>
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
                <Button @click="validate" class="buttonLoginPC">
                    Sign In
                </Button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import TextComp from '@/components/TextComp.vue';
import router from '@/router';
import { ref } from 'vue';
import { onMounted } from 'vue';
import Button from '../components/Button.vue';
import CompanyLogo from '../components/CompanyLogo.vue';

let emailRef = ref<HTMLInputElement | null>(null);
let passRef = ref<HTMLInputElement | null>(null);
let showPassword = ref(true);
let userDetails = ref()

let userDetailsFunc = async () => await axios.get(`https://wisdom-circle-nest-production.up.railway.app/user@mail.com`).then((res) => res.data)

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
    console.log(email.value)
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

<style scoped>

.errMsg{
    color:red   
}
.inputGroup {
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    margin: 1rem 0rem 0rem 0rem;
    width: 384px;
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

.inputGroup>*, .textSignIn>*{
    margin: 0.2rem 0rem 0.2rem 0rem 
}

.buttonLoginPC{
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

input{
    font-size: 16px;
    font-weight: 400;
}

.email:focus, .passDiv:focus{
    border: 1px solid black ;
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