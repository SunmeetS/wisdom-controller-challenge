<template>
    <WelcomePC class="pc" />
    <div class="mainWelcome">
        <div class="containerWelcome">
            <MainLogo />
            <TextComp class="textWelcome" heading="Welcome! "
                subText="We hope we provided a smooth login experience for you. " />
            <img src="../assets/dogWelcome.jpg" alt="">
        </div>
    </div>
</template>

<script setup lang="ts">
import MainLogo from "../components/MainLogo.vue"
import TextComp from '@/components/TextComp.vue';
import WelcomePC from "./WelcomePC.vue";

</script>

<style>
.mainWelcome {
    display: none;
}

@media only screen and (min-device-width : 320px) and (max-device-width : 940px) {
    .pc {
        display: none;
    }
    .mainWelcome {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background: white;
        position: absolute;
        width: 100vw;
        top: 0rem;
        left: 0rem;
        z-index: 10;
    }

    .textWelcome .signUp>* {
        text-align: center;
    }

    .containerWelcome>img {
        height: 20vh;
    }

    .textWelcome>* {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .containerWelcome {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        width: 380px;
        background: white;
        height: 90vh;
    }
}
</style>