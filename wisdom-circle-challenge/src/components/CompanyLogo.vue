<template>
    <div class="companyLogo">
        <div class="logo">
            <img src="../assets/logoPC.png" alt="">
        </div>
        <div class="introContainer">
            <div class="avatar">
                <img src="../assets/POSE_02.png" alt="">
            </div>
            <div class="textIntro">
                <div class="welcomeText">
                    <div class="textContent">
                        <h3>Welcome back!</h3>
                        <p>Sign In to find opportunities that match your interests. We have both part-time and full-time
                            roles that can be done online and in-person.</p>
                    </div>
                    <div class="partition">
                        <img src="../assets/Rectangle-354.png" alt="">
                        <img src="../assets/Rectangle-355.png" alt="">
                        <img src="../assets/Rectangle-355.png" alt="">
                    </div>
                </div>
                <div class="contactDetails">
                    <p>Please contact us at +91-9380644532 if you need any assistance.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.companyLogo {
    background: #404555;
    width: 526px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    position: relative;
    z-index: 2;
}

.partition {
    display: flex;
    justify-content: space-around;
    width: 26.36px
}

.companyLogo>* {
    height: 80%
}

.logo {
    display: flex;
    justify-content: center;
    align-items: end;
}

.logo>img {
    height: 130px;
    width: 190px;
    padding: 0rem 0rem 3rem 0rem;
}

.textContent,
.contactDetails {
    color: white;
    width: 337px;
}

.textContent h3 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    margin: 0.25rem
}

.welcomeText{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 50%
}

.textContent p {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
}

.contactDetails p {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
}

.introContainer {
    display: flex;
}

.avatar {
    display: flex;
    align-items: flex-end;
}

.textIntro {
    display: flex;
    flex-wrap: wrap;
    align-items: center
}

</style>