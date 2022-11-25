<template>
    <button>
        <slot>
        </slot>
    </button>
</template>

<script setup lang="ts">
</script>

<style scoped>
button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    cursor: pointer;
    padding: 11px 32px;
    gap: 8px;
    background: #F1C12B;
    border-radius: 4px;
    border: none;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 26px;
    color: black;
    margin: 1rem 0rem 0rem 0rem
}
</style>