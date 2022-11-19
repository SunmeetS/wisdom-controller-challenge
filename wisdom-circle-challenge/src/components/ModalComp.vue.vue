<template>
    <div class="mainModal">
        <div class="modalContainer">
          <div class="upper">
            <h6>Reset Password</h6>
            <img @click="emits('close')" src="../assets/Icon/Vector.png" alt="">
        </div>
        <div class="lower">
            <p>Thank you! We have sent you a password reset link. Please check your email.</p>
        </div>
        </div>
    </div>
</template>

<script setup lang="ts">
let emits = defineEmits(['close'])
emits
</script>

<style scoped>
.upper{
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid lightgrey;
  align-items: center;
}

img{
  border-radius: 50%;
  padding: 0.2rem !important;
  background: rgba(0, 0, 0, 0.04);
  cursor: pointer;

}

*{
  font-family: "Inter", sans-serif;

}

.upper h6{
  margin: 0rem;
  font-size: 16px;
}

.mainModal{
  height: 90vh;
  width: 415px;
  top: 0%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  background: rgba(0, 0, 0, 0.531);
}

.modalContainer{
  margin: 0.5rem;
  background: white;
  padding: 0.5rem 1rem
}

.upper>*, p{
  padding: 0.7rem 0rem;
  font-size: 12px;
}


  
</style>