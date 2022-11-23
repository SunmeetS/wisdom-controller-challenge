<template>
  <div class="mainResetPagePC">
    <CompanyLogo />
    <div class="resetPassword">
      <TextComp heading='Reset Password' subText="Enter new password you haven’t used before."/>
      <div class="inputGroup">
        <div class="passDiv">
          <input @input="validate" v-model="password1" placeholder="Password"
            :type="showPassword1 ? 'password' : 'text'" class="password" />
          <img class="open" :onclick="() => showPassword1 = !showPassword1" v-if="showPassword1"
            src="../assets/Vector.png" alt="">
          <img class="close" :onclick="() => showPassword1 = !showPassword1" v-if="!showPassword1"
            src="../assets/hidePassword.png" alt="">
        </div>
        <p class="errMsg">{{ passwordError1 }}</p>

        <div class="passDiv">
          <input :oninput="validate" v-model="password2" placeholder="Password"
            :type="showPassword2 ? 'password' : 'text'" class="password" />
          <img class="open" :onclick="() => showPassword2 = !showPassword2" v-if="showPassword2"
            src="../assets/Vector.png" alt="">
          <img class="close" :onclick="() => showPassword2 = !showPassword2" v-if="!showPassword2"
            src="../assets/hidePassword.png" alt="">
        </div>
        <p class="errMsg">{{ passwordError2 }}</p>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CompanyLogo from '../components/CompanyLogo.vue'
import Button from '@/components/Button.vue';
import router from '@/router';
import { ref } from 'vue';
import { useToast } from "vue-toastification";
import axios from 'axios';


let showPassword1 = ref(true), showPassword2 = ref(true),
    password1 = ref(""), password2 = ref(""),
    passwordError1 = ref(""), passwordError2 = ref("")

let validate = () => {
    if (!password1.value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/)) {
        passwordError1.value = `Password Should Contain The Following :
                                Min 1 uppercase letter.
                                Min 1 lowercase letter.
                                Min 1 special character.
                                Min 1 number.
                                 Min 8 characters.
                                Max 30 characters.`
    }
    else {
        password1.value !== password2.value ? passwordError2.value = 'Both fields do not match. ' : passwordError2.value = ''
        passwordError1.value = ""
    }
}

let ifSuccess = async () => {
    console.log(password1.value + " 1", password1.value + " 2", password2.value + " 3", passwordError1.value + " 4", passwordError2.value)

    if (password1.value != '' && password2.value != '' && passwordError1.value == "" && passwordError2.value == '') {
        const toast = useToast();

        // or with options

        axios({
            method: 'patch',
            url: 'https://wisdom-circle-nest-production.up.railway.app/updatePassword',
            data: {
                email: 'user@mail.com',
                password: password1.value
            }
        }).then((res) => {
            toast.success("Your password is reset succesfully", {
            timeout: 2000
        });
            console.log(res.data)
            router.push('/')
        }
        ).catch((err)=>{console.log(err.message);
            toast.error("Your password was not changed. Please try again", {
            timeout: 2000
        });})

    }
}

</script>

<style scoped>
.mainResetPagePC {
  position: absolute;
  left: 0rem;
  top: 0rem;
  display: flex;
}

.resetPassword{
  display: flex;
  justify-content: center;
  align-content: center;
  width: calc(100vw - 526px);
  height: 100vh;
}

.inputGroup{
  display: flex;
  flex-direction: column;
  justify-content: center;
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
.passDiv img {
  position: relative;
  left: -15px;
  height: 15px;
  top: 20px;
  width: 21.65px
}

</style>