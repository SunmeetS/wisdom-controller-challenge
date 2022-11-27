<template>
    <div class="mainDiv">
        <CompanyLogo />
        <div class="welcomeHome">
            <div>
                <TextComp class="textWelcome" heading="Welcome! "
                    subText="We hope we provided a smooth login experience for you. " />
                <MainLogo />
            </div>
            <img src="../assets/dogWelcome.jpg" alt="">
        </div>
    </div>
</template>

<script setup lang="ts">
import TextComp from '@/components/TextComp.vue';
import CompanyLogo from '../components/CompanyLogo.vue';
import MainLogo from '../components/MainLogo.vue';


</script>

<style scoped>
.mainDiv {
    display: flex;
    height: 100vh;
    width: 100vw;
}

.welcomeHome img {
    height: 70vh;
    transform: scalex(-1)
}

.welcomeHome>div {
    display: flex;
    justify-content: space-around;
    width: calc(100vw - 526px);
    margin-top: 2rem;
}

.welcomeHome {
    width: calc(100vw - 526px);
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
}
</style>