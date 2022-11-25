<template>
<div class="header">
    <div class="logo">
        <img src="../assets/WisdomLogo.svg" alt="img" />
    </div>
    <div class="companyName">
        <h4>WISDOM</h4>
        <p>CIRCLE</p>
    </div>
</div>
</template>

<script setup lang="ts">
</script>

<style scoped>

.header {
    display: flex;
    justify-content: center;
    align-items: center;
}
.companyName h4 {
    color: #404554;
    font-family: 'Poppins';    
    font-weight: 600;
}

.companyName>*{
    margin: 0.1rem 0.1rem 0rem 1.2rem;
    scale: 1.2;
}
.companyName p {
    color: #888b94;
    font-family: 'Poppins';
    margin-top: 0rem;
}

</style>