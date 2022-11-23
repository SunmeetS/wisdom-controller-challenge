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
                    <h3>Welcome back!</h3>
                    <p>Sign In to find opportunities that match your interests. We have both part-time and full-time roles that can be done online and in-person.</p>
                </div>
                <div class="contactDetails">
                    <p>Please contact us at +91-9380644532 if you need any assistance.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .companyLogo{
        background: #404555;
        width: 526px;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }

    .companyLogo>*{
        height: 80%
    }

    .logo{
        display: flex;
        justify-content: center;
        align-items: end;
    }

    .logo>img{
        height: 150px;
        width: 200px;
        padding: 0rem 0rem 1rem 0rem
    }

    .welcomeText, .contactDetails {
        color: white;
        width: 337px;
    }

    .introContainer{
        display: flex;
    }
    .avatar{
        display: flex;
        align-items: flex-end;
    }
    .textIntro{
        display: flex;
        flex-wrap: wrap;
        align-items: flex-end;
    }

</style>