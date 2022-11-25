<template>
    <div class="pc">
        <ResetPagePC />
    </div>
    <div class="main">
        <div class="mainScreen">
            <div class="top">
                <MainLogo />
                <div class="middle">
                    <div class="signIn">
                        <TextComp heading="Reset your Password" subText="Enter new password you haven’t used before." />
                        <div class="inputGroup">
                            <div class="passDiv">
                                <input @input="validate" v-model="password1" placeholder="Password"
                                    :type="showPassword1 ? 'password' : 'text'" class="password" />
                                <img class="open" :onclick="() => showPassword1 = !showPassword1"
                                    v-if="(showPassword1 && passwordError1)" src="../assets/Vector.png" alt="">
                                <img class="close" :onclick="() => showPassword1 = !showPassword1"
                                    v-if="!showPassword1 && passwordError1" src="../assets/hidePassword.png" alt="">
                                <img class="open" :onclick="() => showPassword1 = !showPassword1"
                                    v-if="showPassword1 && !passwordError1" src="../assets/openEye.png" alt="">
                                <img class="close" :onclick="() => showPassword1 = !showPassword1"
                                    v-if="!showPassword1 && !passwordError1" src="../assets/closedEye.png" alt="">
                            </div>
                            <p class="errMsg">{{ passwordError1 }}</p>

                            <div class="passDiv">
                                <input :oninput="validate" v-model="password2" placeholder="Password"
                                    :type="showPassword2 ? 'password' : 'text'" class="password" />
                                <img class="open" :onclick="() => showPassword2 = !showPassword2"
                                    v-if="(showPassword2 && passwordError2)" src="../assets/Vector.png" alt="">
                                <img class="close" :onclick="() => showPassword2 = !showPassword2"
                                    v-if="!showPassword2 && passwordError2" src="../assets/hidePassword.png" alt="">
                                <img class="open" :onclick="() => showPassword2 = !showPassword2"
                                    v-if="showPassword2 && !passwordError2" src="../assets/openEye.png" alt="">
                                <img class="close" :onclick="() => showPassword2 = !showPassword2"
                                    v-if="!showPassword2 && !passwordError2" src="../assets/closedEye.png" alt="">
                            </div>
                            <p class="errMsg">{{ passwordError2 }}</p>

                        </div>
                    </div>
                </div>
            </div>
            <div class="footer">
                <Button @click="ifSuccess()"> Reset Password </Button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Button from '@/components/Button.vue';
import router from '@/router';
import { ref } from 'vue';
import MainLogo from '../components/MainLogo.vue'
import TextComp from '../components/TextComp.vue'
import { useToast } from "vue-toastification";
import axios from 'axios';
import ResetPagePC from './ResetPagePC.vue';

let showPassword1 = ref(true), showPassword2 = ref(true),
    password1 = ref(""), password2 = ref(""),
    passwordError1 = ref(""), passwordError2 = ref("")

let validate = () => {
    if ((password1.value.length < 8)) {
        passwordError1.value = 'Password must be at least 8 characters'
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
            url: import.meta.env.VITE_MAIN_URL+'/'+'updatePassword',
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
        ).catch((err) => {
            console.log(err.message);
            toast.error("Your password was not changed. Please try again", {
                timeout: 2000
            });
        })

    }
}

</script>

<style scoped>
.mainScreen {
    display: none;
}

@media only screen and (min-device-width : 320px) and (max-device-width : 940px) {

    .mainScreen {
        display: flex;
    }
}
</style>