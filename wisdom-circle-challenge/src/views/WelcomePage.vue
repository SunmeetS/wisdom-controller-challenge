<template>
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

</script>

<style>
.mainWelcome {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: rgba(0, 0, 0, 0.848);
    position: fixed;
    width: 100vw;
    top: 0rem;
    left: 0rem;
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
    width: 420px;
    background: white;
    height: 90vh;
}
</style>